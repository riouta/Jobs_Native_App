import React, {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
//import { isLoading } from 'expo-font'
import useFetch from '../../../hook/useFetch';

// Define the PopularJobs component
const Popularjobs = () => {
  const router = useRouter(); // Initialize the router for navigation
  const { data, isLoading, error} = useFetch(
    'search', {
      query:'React developer',
      num_pages: 1 
    }
  ); // Fetch data using the useFetch hook

  const [selectedJob, setSelectedJob] = useState(); // Define state for the selected job
  const handleCardPress = (item) => {
      // Handle card press
  }
  //console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList 
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard 
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item?.job_id.toString()} // Ensure unique key
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;