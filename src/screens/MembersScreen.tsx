import React, { useMemo, useState, useCallback } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

type Member = {
  id: string;
  name: string;
  address: string;
  post: string;
  image?: any;
};

export default function MembersScreen() {
  const [tab, setTab] = useState<'Leadership' | 'Volunteers'>('Leadership');

  const leadership: Member[] = useMemo(
    () => [
      {
        id: '1',
        name: 'Fakru Uddin',
        address: 'Texas, USA',
        post: 'President',
        image: require('../assets/leaders/fakru.jpeg'),
      },
      {
        id: '2',
        name: 'Nick Chowdhury',
        address: 'USA',
        post: 'Director',
        image: require('../assets/leaders/nick.jpeg'),
      },
      {
        id: '3',
        name: 'Shafiul Islam',
        address: 'USA',
        post: 'Director',
        image: require('../assets/leaders/belal.jpeg'),
      },
      {
        id: '4',
        name: 'Nng Asaduzaman ',
        address: 'USA',
        post: 'Director / Marketing',
        image: require('../assets/leaders/asad.jpeg'),
      },
      {
        id: '5',
        name: 'Rayhan Uddin',
        address: 'New York, USA',
        post: 'Director / Project coordinator, treasurer ',
        image: require('../assets/leaders/rayhan.jpeg'),
      },
      {
        id: '6',
        name: 'Arefur Chowdhury',
        address: 'New York, USA',
        post: 'Director / Communication',
        image: require('../assets/leaders/arefur.jpeg'),
      },
      {
        id: '7',
        name: 'Mohammad Hasibul Haque',
        address: 'Bangladesh',
        post: 'Chief Coordinator / IT',
        image: require('../assets/leaders/jisan.jpeg'),
      },
    ],
    [],
  );

  const volunteers: Member[] = useMemo(
    () => [
      { id: 'v1', name: 'Volunteer 1', address: 'Noakhali', post: 'Volunteer' },
      { id: 'v2', name: 'Volunteer 2', address: 'Germantown', post: 'Volunteer' },
    ],
    [],
  );

  const data = tab === 'Leadership' ? leadership : volunteers;

  const renderItem = useCallback(({ item }: { item: Member }) => {
    const initials = item.name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(p => p[0]?.toUpperCase())
      .join('');
    return (
      <View style={styles.card}>
        {item.image ? (
          <Image source={item.image} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>{initials}</Text>
          </View>
        )}
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.meta}>{item.post}</Text>
          <Text style={styles.meta}>{item.address}</Text>
        </View>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Pressable
          onPress={() => setTab('Leadership')}
          style={[styles.tabBtn, tab === 'Leadership' && styles.tabBtnActive]}
        >
          <Text style={[styles.tabText, tab === 'Leadership' && styles.tabTextActive]}>Leadership team</Text>
        </Pressable>
        <Pressable
          onPress={() => setTab('Volunteers')}
          style={[styles.tabBtn, tab === 'Volunteers' && styles.tabBtnActive]}
        >
          <Text style={[styles.tabText, tab === 'Volunteers' && styles.tabTextActive]}>Volunteers team</Text>
        </Pressable>
      </View>

      {tab === 'Leadership' && (
        <FlatList
          data={data}
          keyExtractor={m => m.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}

      {tab === 'Volunteers' && (
        <FlatList
          data={data}
          keyExtractor={m => m.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  tabs: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'center',
    gap: 8,
  },
  tabBtn: {
    borderWidth: 1,
    borderColor: '#0a2c63',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#ffffff',
  },
  tabBtnActive: {
    backgroundColor: '#0a2c63',
  },
  tabText: {
    color: '#0a2c63',
    fontWeight: '700',
  },
  tabTextActive: {
    color: '#ffffff',
  },
  list: {
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  avatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#e5e7eb' },
  avatarPlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#0a2c63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: '#ffffff', fontWeight: '800' },
  info: { marginLeft: 12, flex: 1 },
  name: { fontSize: 16, fontWeight: '800', color: '#0f172a' },
  meta: { color: '#475569', marginTop: 2 },
});