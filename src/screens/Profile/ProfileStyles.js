import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../theme';

const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  optionsContainer: {
    marginTop: spacing.xxl,
    marginBottom: spacing.lg,
  },
  logoutContainer: {
    marginTop: spacing.sm,
    marginBottom: spacing.xxxl,
  },
});

export default ProfileStyles;

