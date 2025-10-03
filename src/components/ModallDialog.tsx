import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
  Animated,
  BackHandler,
  Easing,
  Modal,
  Pressable,
  StyleSheet,
  View
} from "react-native";

// Components...
import { Paragraph } from "./Paragraph";

// Types...
import { ModalDialogProps } from "../utils/types/props/modal-props";

// Constants...
import { WEB_A11Y_PROPS } from "../utils/constants/web-A11y-Props";

function ModalDialog(props: ModalDialogProps): React.JSX.Element {
  // Hooks...
  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(0)).current;

  // Functions...
  const animateIn = useCallback((): void => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 180,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true
      }),
      Animated.timing(slide, {
        toValue: 0,
        duration: 220,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true
      })
    ]).start();
  }, [ fade, slide ]);

  const animateOut = useCallback((callbackFunction?: () => void) => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 0,
        duration: 160,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true
      }),
      Animated.timing(slide, {
        toValue: 10,
        duration: 160,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true
      })
    ]).start(({ finished }) => finished && callbackFunction && callbackFunction());
  }, [ fade, slide ]);

  // Effects...
  useEffect(() => {
    if(props.isVisible) return;

    const sub = BackHandler.addEventListener("hardwareBackPress", () => {
      if(props.onClose) {
        animateOut(props.onClose);
        return true;
      }

      return true;
    });

    return (): void => sub.remove();
  }, [ props.isVisible, props.onClose, animateOut ]);

  useEffect(() => {
    if(props.isVisible) animateIn();
  }, [ animateIn, props.isVisible ]);

  // Functions...
  const handleBackdrop = (): void => {
    if(!props.dismissOnBackdropPress) return;
    if(props.onClose) animateOut(props.onClose);
  };

  const handleSecondary = (): void => {
    if(props.onSecondaryButtonPress) props.onSecondaryButtonPress();
    if(props.onClose) animateOut(props.onClose);
  };

  // memo hook...
  const accessibilityLabel = useMemo(
    () => `${props.title}${props.description ? `. ${props.description}` : ""}`,
    [ props.title, props.description ]
  );

  return (
    <Modal
      transparent
      visible={props.isVisible}
      statusBarTranslucent
      animationType="none"
      hardwareAccelerated
      presentationStyle="overFullScreen"
      testID={props.testID}
      accessibilityViewIsModal
      onRequestClose={() => {
        if(props.onClose) animateOut(props.onClose);
      }}
    >
      <Animated.View
        accessible={false}
        style={[ styles.backdrop, { opacity: fade } ]}
      >
        <Pressable style={StyleSheet.absoluteFill} onPress={handleBackdrop} />
      </Animated.View>

      <Animated.View
        {...WEB_A11Y_PROPS}
        accessibilityLabel={accessibilityLabel}
        style={[
          styles.center, {
            transform: [ {
              translateY: slide.interpolate({
                inputRange: [ 0, 10 ],
                outputRange: [ 0, 10 ]
              })
            } ],
            opacity: fade
          }
        ]}
      >
        <View style={styles.card}>

          <View style={styles.headerRow}>
            <Paragraph style={styles.title} numberOfLines={2} text={props.title} />

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Fechar"
              hitSlop={10}
              onPress={ () => props.onClose && animateOut(props.onClose) }
              style={styles.xButton}
            >
              <Paragraph text="" numberOfLines={2} style={styles.x} />
            </Pressable>
          </View>

          {!!props.description && (
            <Paragraph text={props.description} style={styles.description} />
          )}

          <View style={styles.footer}>
            <Pressable
              accessibilityRole="button"
              onPress={handleSecondary}
              style={({ pressed }) => [ styles.secondaryBtn, pressed && styles.pressed ]}
            >
              <Paragraph text={props.secondaryButtonText} style={styles.secondaryText} />
            </Pressable>

            <Pressable
              accessibilityRole="button"
              onPress={props.onPrimaryButtonPress}
              style={({ pressed }) => [
                styles.primaryBtn,
                props.destructive && styles.destructive,
                pressed && styles.pressed
              ]}
            >
              <Paragraph text={props.primaryButtonText} style={styles.primaryText} />
            </Pressable>
          </View>
        </View>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)"
  },
  center: {
    flex: 1,
    justifyContent: "center",
    padding: 24
  },
  card: {
    borderRadius: 14,
    padding: 18,
    backgroundColor: "#111213",
    // sombra iOS
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    // elevação Android
    elevation: 6
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start"
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF"
  },
  xButton: {
    marginLeft: 8
  },
  x: {
    fontSize: 24,
    color: "#A7A7A7",
    lineHeight: 24
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: "#CFCFCF"
  },
  footer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12
  },
  secondaryBtn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "#1C1D1F"
  },
  secondaryText: {
    color: "#CFCFCF",
    fontWeight: "600"
  },
  primaryBtn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "#4C8BF5"
  },
  destructive: {
    backgroundColor: "#E5484D"
  },
  primaryText: {
    color: "#fff",
    fontWeight: "700"
  },
  pressed: {
    opacity: 0.85
  }
});

export { ModalDialog };