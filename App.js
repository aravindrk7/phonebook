import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, PermissionsAndroid, SafeAreaView, Dimensions } from 'react-native';
import Tabs from './navigation/Tabs';
import Recents from './screens/recents/Recents';
import Contacts from './screens/contacts/Contacts';
import CallLogs from 'react-native-call-log';
import ContactsList from 'react-native-contacts';

// const PRIMARY_BG = '#f5fAfA';
const PRIMARY_BG = '#292929';
const ALPHABETS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const App = () => {
  const [activeTab, setActiveTab] = useState('contacts');
  const [contacts, setContacts] = useState([]);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true)
    StatusBar.setBackgroundColor(PRIMARY_BG);
    getAllContacts();
    getAllLogs();
  }, [])

  const getSectionData = (list) => {
    let finalData = [];
    let obj = {};
    let alphabet;
    for (alphabet of ALPHABETS) {
      obj = {
        title: alphabet,
        data: list.filter(item => item.displayName.toLowerCase().startsWith(alphabet.toLowerCase()))
      }
      if (obj.data.length > 0)
        finalData.push(obj)
    }
    return finalData;
  }

  async function getAllContacts() {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS
      );
      if (permission === 'granted') {
        const contacts = await ContactsList.getAll();
        var filteredContacts = contacts.filter(function (el) {
          return el.phoneNumbers[0] != null;
        });
        filteredContacts.sort((a, b) => (a.displayName > b.displayName) ? 1 : ((b.displayName > a.displayName) ? -1 : 0))
        var sectionedData = getSectionData(filteredContacts);
        setContacts(sectionedData);
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
    <SafeAreaView style={styles.container}>
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === 'recents' && <Recents logs={logs} />}
      {activeTab === 'contacts' && <Contacts list={contacts} />}
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    paddingVertical: 10,
    backgroundColor: PRIMARY_BG
  }
});

export default App;
