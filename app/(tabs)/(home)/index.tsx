import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { theme } from '../../../theme';
import { usePlantStore } from '@/store/plantStore' 
import { PlantCard } from '@/components/PlantCard';
import { PlantlyButton } from '@/components/PlantlyButton';
import { useRouter } from 'expo-router';

export default function App() {
  const plants = usePlantStore((state) => state.plants)
  const router = useRouter()
  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={plants}
        renderItem={({ item }) => (
          <PlantCard plant={item} />
        )}
        ListEmptyComponent={
          <PlantlyButton title='Add your first plant' onPress={() => router.navigate('/new')} />
        }
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite
  },
  contentContainer: {
    padding: 12
  }
});
