import React, { useMemo } from 'react';
import * as Styled from './styles';
import { FlatList, SafeAreaView } from 'react-native';
import { useCatsFragmentsViewController } from './cats-fragment-view-controler';
import { EmptyList, FeedPetCard, Loader, ErrorBoundary } from '@/presentation/components';
import { useNavigation } from '@react-navigation/native';
import { NavPropsLogged } from '@/presentation/navigation/routes';
import { useTheme } from 'styled-components/native';

export function CatsFragmentView() {
  const viewController = useCatsFragmentsViewController();
  const { navigate } = useNavigation<NavPropsLogged>();
  const { effects } = useTheme();

  const renderFooter = useMemo(() => {
    if (viewController.cats === null) {
      return null;
    }

    return <Styled.LoadingMore />;
  }, [viewController.cats]);

  const renderHeader = useMemo(() => {
    if (viewController.cats === null) {
      return null;
    }

    return <Styled.Title>List of Cats</Styled.Title>;
  }, [viewController.cats]);

  const renderEmpty = useMemo(() => {
    return (
      <EmptyList title="No cats found" description="There are no cats available at the moment." />
    );
  }, []);

  if (viewController.isLoading && viewController.cats == null) {
    return <Loader />;
  }

  if (!viewController.isLoading && viewController.error.length) {
    return <ErrorBoundary tryAgain={viewController.handleCats} />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={viewController.cats}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <FeedPetCard
            title={'Breed: ' + item.breed.name}
            description={'Weight: ' + item.breed.weight + ' Kg'}
            image={item.image}
            onPress={() => navigate('PetDetails', { data: item })}
          />
        )}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderFooter}
        onEndReached={viewController.cats !== null ? viewController.handleCats : null}
        onEndReachedThreshold={0.04}
        contentContainerStyle={{
          paddingHorizontal: effects.spacing.md,
          paddingVertical: effects.spacing.vl,
        }}
      />
    </SafeAreaView>
  );
}
