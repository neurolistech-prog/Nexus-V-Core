import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const NexusVApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>NEXUS-V: Scan your return item</Text>
      <Button title="Start AI Scan" onPress={() => console.log('Activating Camera...')} />
      <Text>CO2 Saved: 12.4 kg</Text>
    </View>
  );
};

export default NexusVApp;
