import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, PermissionsAndroid } from 'react-native';
import Tabs from './navigation/Tabs';
import Recents from './screens/recents/Recents';
import Contacts from './screens/contacts/Contacts';
import CallLogs from 'react-native-call-log';
import ContactsList from 'react-native-contacts';

const App = () => {
  const [activeTab, setActiveTab] = useState('contacts');
  const [contacts, setContacts] = useState([]);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getAllContacts();
    getAllLogs();
  }, [])

  async function getAllContacts() {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS
      );
      if (permission === 'granted') {
        const contacts = await ContactsList.getAll();
        setContacts(contacts)
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function getAllLogs() {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CALL_LOG
      );
      if (permission === 'granted') {
        const logs = await CallLogs.load(3);
        setLogs(logs)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === 'recents' && <Recents logs={logs} />}
      {activeTab === 'contacts' && <Contacts list={contacts} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  }
});

export default App;
