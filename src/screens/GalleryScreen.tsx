import React, { useMemo, useState, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Pressable,
  Modal,
  Dimensions,
  Text,
  ImageBackground,
  ImageSourcePropType,
  Linking,
} from 'react-native';

type GalleryItem = {
  id: string;
  source: ImageSourcePropType;
};

export default function GalleryScreen() {
  const [mode, setMode] = useState<'before' | 'after'>('before');
  const [category, setCategory] = useState<string>('House Project');
  const skillFolders = useMemo(() => ['2023', '2024', '2025'], []);
  const [skillFolder, setSkillFolder] = useState<string>(skillFolders[0]);
  const fatfFolders = useMemo(() => ['2024'], []);
  const [fatfFolder, setFatfFolder] = useState<string>(fatfFolders[0]);
  const medicalFolders = useMemo(() => ['2024'], []);
  const [medicalFolder, setMedicalFolder] = useState<string>(medicalFolders[0]);
  const floodFolders = useMemo(() => ['2024'], []);
  const [floodFolder, setFloodFolder] = useState<string>(floodFolders[0]);
  const iftarFolders = useMemo(() => ['2025'], []);
  const [iftarFolder, setIftarFolder] = useState<string>(iftarFolders[0]);
  const covidFolders = useMemo(() => ['2020'], []);
  const [covidFolder, setCovidFolder] = useState<string>(covidFolders[0]);

  const categories = useMemo(
    () => [
      'House Project',
      'Skill Development',
      'Financial Aid',
      'Free Medical Camps',
      'Flood Relief',
      'Ramadan Supply',
      'COVID-19 Supply',
    ],
    [],
  );

  const beforeSources: ImageSourcePropType[] = useMemo(
    () => [
      require('../assets/1/before/2.jpeg'),
      require('../assets/1/before/3.jpeg'),
      require('../assets/1/before/4.jpeg'),
      require('../assets/1/before/5.jpeg'),
      require('../assets/1/before/6.jpeg'),
      require('../assets/1/before/7.jpeg'),
      // Excluding file with spaces and multiple dots to avoid Metro static require issues
      // require("../assets/1/before/WhatsApp Image 2025-05-15 at 19.55.08.jpeg"),
    ],
    [],
  );

  const afterSources: ImageSourcePropType[] = useMemo(
    () => [
      require('../assets/1/after/1.jpeg'),
      require('../assets/1/after/2.jpeg'),
    ],
    [],
  );

  const skillSources: Record<string, ImageSourcePropType[]> = useMemo(
    () => ({
      '2023': [
        require('../assets/skill_development/2023/skill_dev03.jpeg'),
        require('../assets/skill_development/2023/skill_dev05.png'),
        require('../assets/skill_development/2023/skill_dev06.png'),
        require('../assets/skill_development/2023/skill_dev07.png'),
        require('../assets/skill_development/2023/skill_dev08.png'),
        require('../assets/skill_development/2023/skill_dev09.png'),
      ],
      '2024': [
        require('../assets/skill_development/2024/skill_dev01.jpg'),
        require('../assets/skill_development/2024/skill_dev02.jpg'),
        require('../assets/skill_development/2024/skill_dev04.png'),
        require('../assets/skill_development/2024/skill_dev10.png'),
      ],
      '2025': [
        require('../assets/skill_development/2025/1.jpeg'),
        require('../assets/skill_development/2025/2.jpeg'),
        require('../assets/skill_development/2025/3.jpeg'),
        require('../assets/skill_development/2025/4.jpeg'),
        require('../assets/skill_development/2025/5.jpeg'),
        require('../assets/skill_development/2025/6.jpeg'),
        require('../assets/skill_development/2025/7.jpeg'),
      ],
    }),
    [],
  );

  const floodSources: Record<string, ImageSourcePropType[]> = useMemo(
    () => ({
      '2024': [
        require('../assets/Flood_Project_2024/2024/1.jpg'),
        require('../assets/Flood_Project_2024/2024/2.jpg'),
        require('../assets/Flood_Project_2024/2024/3.jpg'),
        require('../assets/Flood_Project_2024/2024/4.jpg'),
        require('../assets/Flood_Project_2024/2024/5.jpg'),
        require('../assets/Flood_Project_2024/2024/10.jpg'),
        require('../assets/Flood_Project_2024/2024/12.jpg'),
        require('../assets/Flood_Project_2024/2024/13.jpg'),
        require('../assets/Flood_Project_2024/2024/14.jpg'),
        require('../assets/Flood_Project_2024/2024/15.jpg'),
        require('../assets/Flood_Project_2024/2024/16.jpg'),
        require('../assets/Flood_Project_2024/2024/17.jpg'),
        require('../assets/Flood_Project_2024/2024/18.jpg'),
        require('../assets/Flood_Project_2024/2024/19.jpg'),
        require('../assets/Flood_Project_2024/2024/20.jpg'),
      ],
    }),
    [],
  );

  const iftarSources: Record<string, ImageSourcePropType[]> = useMemo(
    () => ({
      '2025': [
        require('../assets/iftar_distribution/2025/iftar_disable.jpeg'),
        require('../assets/iftar_distribution/2025/iftar_disable2.jpeg'),
        require('../assets/iftar_distribution/2025/iftar_disable3.jpeg'),
        require('../assets/iftar_distribution/2025/iftar_disable4.jpeg'),
        require('../assets/iftar_distribution/2025/iftar_madrasha.jpeg'),
        require('../assets/iftar_distribution/2025/iftar_madrasha2.jpeg'),
      ],
    }),
    [],
  );

  const covidSources: Record<string, ImageSourcePropType[]> = useMemo(
    () => ({
      '2020': [
        require('../assets/COVID-19/2020/covid01.jpg'),
        require('../assets/COVID-19/2020/covid02.jpg'),
        require('../assets/COVID-19/2020/atd5.jpg'),
        require('../assets/COVID-19/2020/atd8.jpg'),
      ],
    }),
    [],
  );

  const medicalSources: Record<string, ImageSourcePropType[]> = useMemo(
    () => ({
      '2024': [
        require('../assets/medical_camp_flood/2024/IMG_2737.png'),
        require('../assets/medical_camp_flood/2024/IMG_2738.png'),
        require('../assets/medical_camp_flood/2024/IMG_2747.png'),
        require('../assets/medical_camp_flood/2024/IMG_2749.png'),
        require('../assets/medical_camp_flood/2024/IMG_2756.png'),
        require('../assets/medical_camp_flood/2024/IMG_2758.png'),
        require('../assets/medical_camp_flood/2024/IMG_2765.png'),
        require('../assets/medical_camp_flood/2024/IMG_2766.png'),
        require('../assets/medical_camp_flood/2024/IMG_2767.png'),
        require('../assets/medical_camp_flood/2024/IMG_2880.png'),
        require('../assets/medical_camp_flood/2024/IMG_2881.png'),
        require('../assets/medical_camp_flood/2024/banner.jpg'),
      ],
    }),
    [],
  );

  const fatfSources: Record<string, ImageSourcePropType[]> = useMemo(
    () => ({
      '2024': [
        require('../assets/financial_aid_to_flood/2024/fatf1.jpeg'),
        require('../assets/financial_aid_to_flood/2024/fatf2.jpeg'),
        require('../assets/financial_aid_to_flood/2024/fatf3.jpeg'),
        require('../assets/financial_aid_to_flood/2024/fatf4.jpeg'),
        require('../assets/financial_aid_to_flood/2024/fatf5.jpeg'),
        require('../assets/financial_aid_to_flood/2024/fatf6.jpeg'),
        require('../assets/financial_aid_to_flood/2024/fatf7.jpeg'),
        require('../assets/financial_aid_to_flood/2024/fatf8.jpeg'),
        require('../assets/financial_aid_to_flood/2024/fatf9.jpeg'),
        require('../assets/financial_aid_to_flood/2024/fatf10.jpeg'),
        require('../assets/financial_aid_to_flood/2024/fatf12.jpeg'),
        require('../assets/financial_aid_to_flood/2024/fatf13.jpeg'),
        require('../assets/financial_aid_to_flood/2024/fatf15.jpeg'),
        require('../assets/financial_aid_to_flood/2024/fatf18.jpeg'),
      ],
    }),
    [],
  );

  const data: GalleryItem[] = useMemo(() => {
    if (category === 'House Project') {
      const arr = mode === 'before' ? beforeSources : afterSources;
      return arr.map((src, idx) => ({ id: `${mode}-${idx}`, source: src }));
    }
    if (category === 'Skill Development') {
      const arr = skillSources[skillFolder] ?? [];
      return arr.map((src, idx) => ({
        id: `${skillFolder}-${idx}`,
        source: src,
      }));
    }
    if (category === 'Financial Aid') {
      const arr = fatfSources[fatfFolder] ?? [];
      return arr.map((src, idx) => ({
        id: `${fatfFolder}-${idx}`,
        source: src,
      }));
    }
    if (category === 'Free Medical Camps') {
      const arr = medicalSources[medicalFolder] ?? [];
      return arr.map((src, idx) => ({
        id: `${medicalFolder}-${idx}`,
        source: src,
      }));
    }
    if (category === 'Flood Relief') {
      const arr = floodSources[floodFolder] ?? [];
      return arr.map((src, idx) => ({
        id: `${floodFolder}-${idx}`,
        source: src,
      }));
    }
    if (category === 'Ramadan Supply') {
      const arr = iftarSources[iftarFolder] ?? [];
      return arr.map((src, idx) => ({
        id: `${iftarFolder}-${idx}`,
        source: src,
      }));
    }
    return [];
  }, [
    afterSources,
    beforeSources,
    mode,
    category,
    skillFolder,
    skillSources,
    fatfFolder,
    fatfSources,
    medicalFolder,
    medicalSources,
    floodFolder,
    floodSources,
    iftarFolder,
    iftarSources,
    covidFolder,
    covidSources,
  ]);

  const [viewerIndex, setViewerIndex] = useState<number | null>(null);
  const openViewer = useCallback((index: number) => setViewerIndex(index), []);
  const closeViewer = useCallback(() => setViewerIndex(null), []);

  // Close viewer if the dataset changes (e.g., switching mode/category/folder)
  useEffect(() => {
    setViewerIndex(null);
  }, [
    mode,
    category,
    skillFolder,
    fatfFolder,
    medicalFolder,
    floodFolder,
    iftarFolder,
  ]);

  const numColumns = 3;
  const gap = 8;
  const size = useMemo(() => {
    const width = Dimensions.get('window').width;
    const totalGap = gap * (numColumns + 1);
    return Math.floor((width - totalGap) / numColumns);
  }, [gap, numColumns]);

  const renderItem = useCallback(
    ({ item, index }: { item: GalleryItem; index: number }) => (
      <Pressable onPress={() => openViewer(index)} style={{ margin: gap / 2 }}>
        <Image
          source={item.source}
          style={{
            width: size,
            height: size,
            borderRadius: 8,
            backgroundColor: '#e5e7eb',
          }}
        />
      </Pressable>
    ),
    [gap, openViewer, size],
  );

  return (
    <View style={styles.container}>
      <View style={styles.categoryRow}>
        {categories.map(c => (
          <Pressable
            key={c}
            onPress={() => setCategory(c)}
            style={[
              styles.categoryBtn,
              category === c ? styles.categoryBtnActive : null,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                category === c ? styles.categoryTextActive : null,
              ]}
            >
              {c}
            </Text>
          </Pressable>
        ))}
      </View>
      <ImageBackground
        source={require('../assets/blue-bg-pattern.png')}
        style={styles.subHeaderBg}
        imageStyle={styles.subHeaderImage}
        resizeMode="cover"
      >
        <Text style={styles.subTitle}>{category.toUpperCase()}</Text>
      </ImageBackground>
      {category === 'House Project' && (
        <View style={styles.toggleRow}>
          <Pressable
            onPress={() => setMode('before')}
            style={[
              styles.toggleBtn,
              mode === 'before' ? styles.toggleBtnActive : null,
            ]}
          >
            <Text
              style={[
                styles.toggleText,
                mode === 'before' ? styles.toggleTextActive : null,
              ]}
            >
              Before
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setMode('after')}
            style={[
              styles.toggleBtn,
              mode === 'after' ? styles.toggleBtnActive : null,
            ]}
          >
            <Text
              style={[
                styles.toggleText,
                mode === 'after' ? styles.toggleTextActive : null,
              ]}
            >
              After
            </Text>
          </Pressable>
        </View>
      )}
      {category === 'Ramadan Supply' && (
        <View style={styles.toggleRow}>
          {iftarFolders.map(f => (
            <Pressable
              key={f}
              onPress={() => setIftarFolder(f)}
              style={[
                styles.toggleBtn,
                iftarFolder === f ? styles.toggleBtnActive : null,
              ]}
            >
              <Text
                style={[
                  styles.toggleText,
                  iftarFolder === f ? styles.toggleTextActive : null,
                ]}
              >
                {f}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
      {category === 'Financial Aid' && (
        <View style={styles.toggleRow}>
          {fatfFolders.map(f => (
            <Pressable
              key={f}
              onPress={() => setFatfFolder(f)}
              style={[
                styles.toggleBtn,
                fatfFolder === f ? styles.toggleBtnActive : null,
              ]}
            >
              <Text
                style={[
                  styles.toggleText,
                  fatfFolder === f ? styles.toggleTextActive : null,
                ]}
              >
                {f}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
      {category === 'Skill Development' && (
        <View style={styles.toggleRow}>
          {skillFolders.map(f => (
            <Pressable
              key={f}
              onPress={() => setSkillFolder(f)}
              style={[
                styles.toggleBtn,
                skillFolder === f ? styles.toggleBtnActive : null,
              ]}
            >
              <Text
                style={[
                  styles.toggleText,
                  skillFolder === f ? styles.toggleTextActive : null,
                ]}
              >
                {f}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
      {category === 'Free Medical Camps' && (
        <View style={styles.toggleRow}>
          {medicalFolders.map(f => (
            <Pressable
              key={f}
              onPress={() => setMedicalFolder(f)}
              style={[
                styles.toggleBtn,
                medicalFolder === f ? styles.toggleBtnActive : null,
              ]}
            >
              <Text
                style={[
                  styles.toggleText,
                  medicalFolder === f ? styles.toggleTextActive : null,
                ]}
              >
                {f}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
      {category === 'Flood Relief' && (
        <View style={styles.toggleRow}>
          {floodFolders.map(f => (
            <Pressable
              key={f}
              onPress={() => setFloodFolder(f)}
              style={[
                styles.toggleBtn,
                floodFolder === f ? styles.toggleBtnActive : null,
              ]}
            >
              <Text
                style={[
                  styles.toggleText,
                  floodFolder === f ? styles.toggleTextActive : null,
                ]}
              >
                {f}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
      {category === 'House Project' ||
      category === 'Skill Development' ||
      category === 'Financial Aid' ||
      category === 'Free Medical Camps' ||
      category === 'Flood Relief' ||
      category === 'Ramadan Supply' ||
      category === 'COVID-19 Supply' ? (
        <>
          <FlatList
            contentContainerStyle={styles.listContent}
            data={data}
            keyExtractor={it => it.id}
            numColumns={numColumns}
            renderItem={renderItem}
          />
          <View style={styles.viewMoreWrap}>
            <Pressable
              style={styles.viewMoreBtn}
              onPress={() => Linking.openURL('https://www.cpfint.org/gallery')}
              accessibilityRole="button"
              accessibilityLabel="View more"
            >
              <Text style={styles.viewMoreText}>View More</Text>
            </Pressable>
          </View>
        </>
      ) : (
        <View style={styles.placeholderWrap}>
          <Text style={styles.placeholderText}>Content coming soon</Text>
        </View>
      )}

      <Modal
        visible={viewerIndex !== null}
        transparent
        animationType="fade"
        onRequestClose={closeViewer}
      >
        <View style={styles.modalBackdrop}>
          <Pressable style={styles.backdropPress} onPress={closeViewer} />
          {viewerIndex !== null && data[viewerIndex] && (
            <View style={styles.viewerContainer}>
              <Image
                source={data[viewerIndex].source}
                style={styles.viewerImage}
                resizeMode="contain"
              />
              <View style={styles.viewerControls}>
                <Pressable
                  onPress={closeViewer}
                  style={styles.closeButton}
                  accessibilityRole="button"
                  accessibilityLabel="Close"
                >
                  <Text style={styles.closeText}>Close</Text>
                </Pressable>
              </View>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  header: {
    width: '100%',
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    marginTop: 16,
  },
  subHeaderBg: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    margin: 16,
  },
  subHeaderImage: {
    opacity: 0.25,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },
  toggleRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 8,
    justifyContent: 'center',
  },
  toggleBtn: {
    borderWidth: 1,
    borderColor: '#092b62',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#ffffff',
    marginHorizontal: 8,
  },
  toggleBtnActive: {
    backgroundColor: '#092b62',
  },
  toggleText: {
    color: '#092b62',
    fontWeight: '700',
  },
  toggleTextActive: {
    color: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
  },
  listContent: { padding: 8 },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdropPress: { ...StyleSheet.absoluteFillObject },
  viewerContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewerImage: { width: '100%', height: '85%' },
  viewerControls: { position: 'absolute', top: 44, right: 16 },
  closeButton: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  closeText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  // Category submenu styles
  categoryRow: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  categoryBtn: {
    borderWidth: 1,
    borderColor: '#0a2c63',
    borderRadius: 999,
    paddingHorizontal: 14,
    height: 36,
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: '#ffffff',
  },
  categoryBtnActive: {
    backgroundColor: '#0a2c63',
    borderColor: '#0a2c63',
  },
  categoryText: {
    color: '#0a2c63',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 18,
  },
  categoryTextActive: {
    color: '#ffffff',
  },
  // Placeholder for non-implemented categories
  placeholderWrap: {
    paddingVertical: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: '#6b7280',
    fontSize: 16,
    fontWeight: '600',
  },
  // View More button styles
  viewMoreWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  viewMoreBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#000000',
  },
  viewMoreText: {
    color: '#f4e911ff',
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 8,
  },
});
