import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import type { RootDrawerParamList } from '../navigation/RootTabs';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.container, styles.contentGrow]}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        nestedScrollEnabled
        keyboardShouldPersistTaps="handled"
      >
        <FourTextCard
          backgroundImage={require('../assets/Flood_Project_2024/2024/banner.jpg')}
          lines={[
            'Together, we uplift communities',
            'Join us to create lasting impact',
            '',
            '',
          ]}
        />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎥 Watch Our Featured Videos</Text>
          <Text style={styles.sectionSubtitle}>
            Learn more about our mission, community efforts, and the amazing
            work done by our volunteers.
          </Text>
        </View>
        <View style={styles.videosContainer}>
          <VideoCard
            videoId="ZSsX-xDb5Cc"
            title="Bringing Hope and Kindness to families during Ramadan"
          />
          <VideoCard
            videoId="dJyZSAd6ZiU"
            title="Building Housed and Madrasha Buildings"
          />
        </View>
        <ImageBackground
          source={require('../assets/blue-bg-pattern.png')}
          style={styles.sectionHero}
          imageStyle={styles.sectionHeroImage}
        >
          <View style={styles.sectionHeroOverlay} />
          <View style={styles.sectionHeroContent}>
            <Text style={[styles.sectionTitle, { color: '#fff' }]}>
              Financial AID to Flood VICTIM
            </Text>
          </View>
        </ImageBackground>

        <ImageSlider
          images={[
            require('../assets/financial_aid_to_flood/2024/fatf1.jpeg'),
            require('../assets/financial_aid_to_flood/2024/fatf2.jpeg'),
            require('../assets/financial_aid_to_flood/2024/fatf3.jpeg'),
          ]}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Gallery')}
            accessibilityRole="button"
            style={[styles.ctaButton, styles.ctaSecondary]}
          >
            <Text style={styles.ctaText}>Show More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://example.com/donate')}
            accessibilityRole="button"
            style={[styles.ctaButton, styles.ctaPrimary]}
          >
            <Text style={styles.ctaText}>Donate</Text>
          </TouchableOpacity>
        </View>

        <ImageBackground
          source={require('../assets/blue-bg-pattern.png')}
          style={styles.sectionHero}
          imageStyle={styles.sectionHeroImage}
        >
          <View style={styles.sectionHeroOverlay} />
          <View style={styles.sectionHeroContent}>
            <Text style={[styles.sectionTitle, { color: '#fff' }]}>
              Free Medical Camps
            </Text>
          </View>
        </ImageBackground>

        <ImageSlider
          images={[
            require('../assets/medical_camp_flood/2024/IMG_2715.webp'),
            require('../assets/medical_camp_flood/2024/IMG_2680.webp'),
            require('../assets/medical_camp_flood/2024/IMG_2875.webp'),
          ]}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Gallery')}
            accessibilityRole="button"
            style={[styles.ctaButton, styles.ctaSecondary]}
          >
            <Text style={styles.ctaText}>Show More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://example.com/donate')}
            accessibilityRole="button"
            style={[styles.ctaButton, styles.ctaPrimary]}
          >
            <Text style={styles.ctaText}>Donate</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  scroll: { flex: 1, backgroundColor: '#fff' },
  container: {
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 16,
    paddingTop: 12,
    paddingBottom: 32,
  },
  contentGrow: { flexGrow: 1 },
  card: {
    width: '100%',
    maxWidth: 600,
    aspectRatio: 16 / 9,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  cardImage: {
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  section: {
    width: '100%',
    maxWidth: 600,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#092b62',
    marginBottom: 6,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },
  textContainer: {
    position: 'absolute',
    left: 16,
    right: 16,
    top: 16,
    bottom: 16,
    justifyContent: 'space-between',
  },
  lineText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    marginBottom: 4,
  },
  donateButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#ff8c00',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 18,
  },
  donateText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  videosContainer: {
    width: '100%',
    maxWidth: 600,
    marginTop: 12,
    gap: 12,
  },
  videoCard: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  videoThumbWrapper: {
    position: 'relative',
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#111',
  },
  videoThumb: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  playBadge: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -18 }, { translateY: -18 }],
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
  },
  playTriangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderLeftColor: '#fff',
    borderTopWidth: 6,
    borderTopColor: 'transparent',
    borderBottomWidth: 6,
    borderBottomColor: 'transparent',
    marginLeft: 2,
  },
  videoTitle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: '#111',
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  sliderContainer: {
    width: '100%',
    maxWidth: 600,
    marginTop: 12,
  },
  slider: {
    width: '100%',
    height: 180,
  },
  slide: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d0d5dd',
  },
  dotActive: {
    backgroundColor: '#092b62',
  },
  buttonRow: {
    width: '100%',
    maxWidth: 600,
    marginTop: 12,
    flexDirection: 'row',
    gap: 12,
  },
  ctaButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
  },
  ctaPrimary: {
    backgroundColor: '#092b62',
  },
  ctaSecondary: {
    backgroundColor: '#0b7',
  },
  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  sectionHero: {
    width: '100%',
    maxWidth: 600,
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 20,
    height: 60,
  },
  sectionHeroImage: {
    resizeMode: 'cover',
  },
  sectionHeroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  sectionHeroContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

type FourTextCardProps = {
  backgroundImage: { uri: string } | number;
  lines: [string, string, string, string];
};

function FourTextCard({ backgroundImage, lines }: FourTextCardProps) {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.card}
      imageStyle={styles.cardImage}
    >
      <View style={styles.overlay} />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.lineText}>{lines[0]}</Text>
          <Text style={styles.lineText}>{lines[1]}</Text>
          <Text style={styles.lineText}>{lines[2]}</Text>
          <Text style={styles.lineText}>{lines[3]}</Text>
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://example.com/donate')}
          accessibilityLabel="Donate"
          accessibilityRole="button"
          style={styles.donateButton}
        >
          <Text style={styles.donateText}>DONATE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

type VideoCardProps = {
  videoId: string;
  title: string;
};
function VideoCard({ videoId, title }: VideoCardProps) {
  const thumbUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(videoUrl)}
      accessibilityRole="button"
      accessibilityLabel={`${title} - YouTube video`}
      style={styles.videoCard}
      activeOpacity={0.85}
    >
      <View style={styles.videoThumbWrapper}>
        <Image source={{ uri: thumbUrl }} style={styles.videoThumb} />
        <View style={styles.playBadge}>
          <View style={styles.playTriangle} />
        </View>
      </View>
      <Text style={styles.videoTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

type ImageSliderProps = {
  images: number[];
};

function ImageSlider({ images }: ImageSliderProps) {
  const scrollRef = useRef<ScrollView>(null);
  const [index, setIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);

  const onScroll = (e: any) => {
    const { contentOffset, layoutMeasurement } = e.nativeEvent;
    const width = layoutMeasurement?.width || sliderWidth;
    if (width > 0) {
      const newIndex = Math.round(contentOffset.x / width);
      if (newIndex !== index) setIndex(newIndex);
    }
  };

  return (
    <View
      style={styles.sliderContainer}
      onLayout={e => {
        const w = e.nativeEvent.layout.width;
        if (w && w !== sliderWidth) setSliderWidth(w);
      }}
    >
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={styles.slider}
        decelerationRate="fast"
        snapToInterval={sliderWidth || undefined}
      >
        {images.map((img, i) => (
          <View
            key={i}
            style={[styles.slide, { width: sliderWidth || undefined }]}
          >
            <Image source={img} style={styles.sliderImage} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.dots}>
        {images.map((_, i) => (
          <View key={i} style={[styles.dot, i === index && styles.dotActive]} />
        ))}
      </View>
    </View>
  );
}
