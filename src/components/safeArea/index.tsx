import React, { ReactNode, memo, useMemo } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';

interface Props {
  children: ReactNode;
}

const SafeArea = ({ children }: Props) => {
  const insets = useSafeAreaInsets();

  const viewStyle = useMemo(() => {
    return [
      styles.container,
      { paddingTop: insets.top, paddingBottom: insets.bottom },
    ];
  }, [insets.top, insets.bottom]);

  return <View style={viewStyle}>{children}</View>;
};

export default React.memo(SafeArea);
