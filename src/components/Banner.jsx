import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { colors, spacing, typography, shadows } from '../theme';
import strings from '../constants/strings';
import { wp, hp, fontSize, isSmallScreen } from '../utils/responsive';

/**
 * Banner Component
 * Displays app banner/promotional banner
 */
const Banner = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={colors.primaryGradient}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <BlurView intensity={10} style={styles.blurContainer}>
          <View style={styles.content}>
            <Text style={styles.title}>{strings.welcomeMessage}</Text>
            <Text style={styles.subtitle}>{strings.discoverMessage}</Text>
          </View>
        </BlurView>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
            }}
            style={styles.image}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(180),
    borderRadius: spacing.lg,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.md,
    overflow: 'hidden',
    ...shadows.large,
  },
  gradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: isSmallScreen() ? spacing.md : spacing.lg,
  },
  blurContainer: {
    flex: 1,
    borderRadius: spacing.md,
    backgroundColor: colors.glass,
    padding: isSmallScreen() ? spacing.md : spacing.lg,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  content: {
    flex: 1,
    zIndex: 2,
  },
  title: {
    fontSize: fontSize(typography.fontSize.xxl),
    fontWeight: typography.fontWeight.bold,
    color: colors.textWhite,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: fontSize(typography.fontSize.sm),
    color: colors.textWhite,
    opacity: 0.9,
  },
  imageContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '50%',
    opacity: 0.3,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Banner;

