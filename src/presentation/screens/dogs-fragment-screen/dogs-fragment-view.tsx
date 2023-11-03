import React, { useMemo } from 'react';
import * as Styled from './styles';
import { SafeAreaView, FlatList } from 'react-native';
import { useDogsFragmentsViewController } from './dogs-fragment-view-controller';
import { EmptyList, FeedPetCard, Loader, ErrorBoundary } from '@/presentation/components';
import { useNavigation } from '@react-navigation/native';
import { NavPropsLogged } from '@/presentation/navigation/routes';
import { useTheme } from 'styled-components/native';

export function DogsFragmentView() {
  const viewController = useDogsFragmentsViewController();

  const { navigate } = useNavigation<NavPropsLogged>();
  const { effects } = useTheme();

  const renderFooter = useMemo(() => {
    if (viewController.dogs === null) {
      return null;
    }

    return <Styled.LoadingMore />;
  }, [viewController.dogs]);

  const renderHeader = useMemo(() => {
    if (viewController.dogs === null) {
      return null;
    }

    return <Styled.Title>List of Dogs</Styled.Title>;
  }, [viewController.dogs]);

  const renderEmpty = useMemo(() => {
    return (
      <EmptyList title="No dogs found" description="There are no dogs available at the moment." />
    );
  }, []);

  if (viewController.isLoading && !viewController.dogs.length) {
    return <Loader />;
  }

  if (!viewController.isLoading && viewController.error.length) {
    return <ErrorBoundary tryAgain={viewController.handleDogs} />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={viewController.dogs}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <FeedPetCard
            title={item.breed.name}
            description={item.breed.weight + ' kg'}
            image={item.image}
            onPress={() => navigate('PetDetails', { data: item })}
          />
        )}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderFooter}
        onEndReached={viewController.dogs !== null ? viewController.handleDogs : null}
        onEndReachedThreshold={0.04}
        contentContainerStyle={{
          paddingHorizontal: effects.spacing.md,
          paddingVertical: effects.spacing.vl,
        }}
      />
    </SafeAreaView>
  );
}
