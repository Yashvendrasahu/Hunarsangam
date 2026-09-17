/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Globe,
  Palette,
  ShieldCheck,
  ChevronsUpDown,
  ChevronDown,
  Copy,
  Check,
  Code2,
  Smartphone,
  X,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Mic,
  Volume2,
  Camera,
  Upload,
  Sparkles,
  Timer,
  Play,
  RotateCcw,
  User,
  ShoppingBag,
  Sliders,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Bell,
  Building2,
  Calendar,
  Layers,
  Store,
  RefreshCw,
  Award,
  Users,
  Star,
  Package,
  Plus,
  Radio,
  FileText,
  AlertTriangle,
  HelpCircle,
  HandMetal,
  Headphones,
  Pause,
  MapPin,
  Medal,
  Truck,
  MessageSquare,
  SlidersHorizontal,
  Image as LucideImage,
  Clock,
  Ear,
  MoveHorizontal,
  MoveVertical,
  Scale,
  Calculator,
  TrendingUp,
  Info,
  QrCode,
  Share2,
  Wallet,
  Send,
  Download,
  Link,
  Tag,
  Shield,
} from 'lucide-react';

const DART_FILES: Record<string, { path: string; language: string; content: string }> = {
  'digital_visiting_card_screen.dart': {
    path: 'lib/screens/digital_visiting_card_screen.dart',
    language: 'dart',
    content: `// lib/screens/digital_visiting_card_screen.dart
// Artisan Digital Visiting Card & Verified B2B Identity Passport
import 'package:flutter/material.dart';

class DigitalVisitingCardScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onShareWhatsApp;
  final VoidCallback? onDownloadPdf;
  final VoidCallback? onCopyLink;
  final VoidCallback? onAddToWallet;
  final VoidCallback? onVoiceRecordStory;
  final VoidCallback? onShareCard;

  const DigitalVisitingCardScreen({
    super.key,
    this.onBack,
    this.onShareWhatsApp,
    this.onDownloadPdf,
    this.onCopyLink,
    this.onAddToWallet,
    this.onVoiceRecordStory,
    this.onShareCard,
  });

  @override
  State<DigitalVisitingCardScreen> createState() => _DigitalVisitingCardScreenState();
}

enum VisitingCardTemplate { phoneCard, stallStandee, packagingTag }

class _DigitalVisitingCardScreenState extends State<DigitalVisitingCardScreen> {
  VisitingCardTemplate _selectedTemplate = VisitingCardTemplate.phoneCard;
  bool _isPlayingAudio = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Column(
          children: [
            // Top App Bar
            _buildTopBar(),
            // Scrollable Passport Content
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 12.0),
                child: Column(
                  children: [
                    _buildIdentityBanner(),
                    const SizedBox(height: 12.0),
                    _buildVoiceStoryCTA(),
                    const SizedBox(height: 14.0),
                    _buildDigitalCardHero(),
                    const SizedBox(height: 20.0),
                    _buildQuickSharingSection(),
                    const SizedBox(height: 22.0),
                    _buildFormatsSection(),
                    const SizedBox(height: 18.0),
                    _buildPrimaryCTA(),
                  ],
                ),
              ),
            ),
            _buildBottomNav(),
          ],
        ),
      ),
    );
  }
}`,
  },
  'add_product_flow.dart': {
    path: 'lib/add_product/add_product_flow.dart',
    language: 'dart',
    content: `// lib/add_product/add_product_flow.dart
// Master Coordinator for the 10-screen Artisan "Add Product" Flow
// Orchestrates: Catalog -> Camera -> Coin AR -> Dimensions -> Voice Specs -> AI Draft -> Fair Price -> Bulk Capacity -> Final Preview -> Published ONDC
import 'package:flutter/material.dart';
import 'models/product_draft.dart';
import 'screens/product_catalog_screen.dart';
import 'screens/camera_capture_screen.dart';
import 'screens/coin_detector_ar_screen.dart';
import 'screens/dimension_review_screen.dart';
import 'screens/voice_description_screen.dart';
import 'screens/ai_draft_preview_screen.dart';
import 'screens/fair_pricing_screen.dart';
import 'screens/bulk_capacity_screen.dart';
import 'screens/product_final_preview_screen.dart';
import 'screens/catalog_published_screen.dart';`,
  },
  'product_catalog_screen.dart': {
    path: 'lib/add_product/screens/product_catalog_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/product_catalog_screen.dart - Screen 1 (ar--p1-Artisan Product Catalog.png)`,
  },
  'coin_detector_ar_screen.dart': {
    path: 'lib/add_product/screens/coin_detector_ar_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/coin_detector_ar_screen.dart - Screen 3 (p3 — Camera-First Add Photo with 10 rupes.png)`,
  },
  'dimension_review_screen.dart': {
    path: 'lib/add_product/screens/dimension_review_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/dimension_review_screen.dart - Screen 4 (p4— photo and dimension review.png)`,
  },
  'voice_description_screen.dart': {
    path: 'lib/add_product/screens/voice_description_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/voice_description_screen.dart - Screen 5 (p5-desciption all about product with raw materila cost voice serach.png)`,
  },
  'ai_draft_preview_screen.dart': {
    path: 'lib/add_product/screens/ai_draft_preview_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/ai_draft_preview_screen.dart - Screen 6 (p6-decsiption review.png)`,
  },
  'fair_pricing_screen.dart': {
    path: 'lib/add_product/screens/fair_pricing_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/fair_pricing_screen.dart - Screen 7 (p7— Fair Pricing Assistant.png)`,
  },
  'bulk_capacity_screen.dart': {
    path: 'lib/add_product/screens/bulk_capacity_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/bulk_capacity_screen.dart - Screen 8 (p8-voice based piese in day asking.png)`,
  },
  'product_final_preview_screen.dart': {
    path: 'lib/add_product/screens/product_final_preview_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/product_final_preview_screen.dart - Screen 9 (p9-final preview ar.png)`,
  },
  'catalog_published_screen.dart': {
    path: 'lib/add_product/screens/catalog_published_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/catalog_published_screen.dart - Screen 10 (p10 — Product Finalized & ONDC Ready.png)`,
  },
  'login_screen.dart': {
    path: 'lib/screens/login_screen.dart',
    language: 'dart',
    content: `// lib/screens/login_screen.dart

import 'package:flutter/material.dart';

/// Screen matching 'ar-Artisan- login.png'
/// Allows registered artisans to log in and proceed straight to the Artisan Home Dashboard.
class LoginScreen extends StatefulWidget {
  final VoidCallback onLoginSuccess;
  final VoidCallback onCreateAccount;
  final VoidCallback? onBack;
  final String currentLanguage;

  const LoginScreen({
    super.key,
    required this.onLoginSuccess,
    required this.onCreateAccount,
    this.onBack,
    this.currentLanguage = 'English',
  });

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController _contactController = TextEditingController(text: 'ramukumar@hunarsangam.in');
  final TextEditingController _passwordController = TextEditingController(text: 'password123');
  bool _obscurePassword = true;
  String _selectedLanguage = 'English';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Column(
          children: [
            // Top App Bar with back navigation, brand logo & language selector
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  IconButton(
                    icon: const Icon(Icons.arrow_back, color: Color(0xFF2D2421)),
                    onPressed: widget.onBack ?? widget.onCreateAccount,
                  ),
                  Row(
                    children: [
                      Container(
                        width: 32.0,
                        height: 32.0,
                        decoration: BoxDecoration(
                          color: const Color(0xFFFFFBF9),
                          borderRadius: BorderRadius.circular(9.0),
                          border: Border.all(color: const Color(0xFFE5D5CB)),
                        ),
                        child: const Center(
                          child: Text(
                            'हुनर',
                            style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.w900, color: Color(0xFF7C3F24)),
                          ),
                        ),
                      ),
                      const SizedBox(width: 8.0),
                      const Text(
                        'HunarSangam',
                        style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.w800, color: Color(0xFF7C3F24)),
                      ),
                    ],
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
                    decoration: BoxDecoration(
                      color: const Color(0xFFFFFDFB),
                      borderRadius: BorderRadius.circular(16.0),
                      border: Border.all(color: const Color(0xFFE5D5CB)),
                    ),
                    child: Row(
                      children: [
                        Text(_selectedLanguage, style: const TextStyle(fontSize: 12.0, fontWeight: FontWeight.w600)),
                        const Icon(Icons.arrow_drop_down, size: 16.0),
                      ],
                    ),
                  ),
                ],
              ),
            ),

            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: const [
                        _LoginDot(color: Color(0xFFB85324)),
                        SizedBox(width: 6.0),
                        _LoginDot(color: Color(0xFF2E7D32)),
                        SizedBox(width: 6.0),
                        _LoginDot(color: Color(0xFFB85324)),
                      ],
                    ),
                    const SizedBox(height: 14.0),
                    const Text(
                      'Login Your Account',
                      style: TextStyle(fontSize: 30.0, fontWeight: FontWeight.w800, color: Color(0xFF221C19)),
                    ),
                    const SizedBox(height: 6.0),
                    const Text('Enter your contact details to login.', style: TextStyle(fontSize: 14.5, color: Color(0xFF7A685F))),
                    const SizedBox(height: 28.0),

                    // Email / Phone field
                    const Text('Email Address / Phone number', style: TextStyle(fontSize: 14.0, fontWeight: FontWeight.w700)),
                    const SizedBox(height: 8.0),
                    Container(
                      decoration: BoxDecoration(color: const Color(0xFFF5EBE1), borderRadius: BorderRadius.circular(16.0)),
                      padding: const EdgeInsets.symmetric(horizontal: 14.0),
                      child: Row(
                        children: [
                          const Icon(Icons.mail_outline_rounded, color: Color(0xFF8A776D), size: 20.0),
                          const SizedBox(width: 12.0),
                          Expanded(child: TextField(controller: _contactController, decoration: const InputDecoration(border: InputBorder.none))),
                        ],
                      ),
                    ),
                    const SizedBox(height: 22.0),

                    // Password field
                    const Text('Create Password', style: TextStyle(fontSize: 14.0, fontWeight: FontWeight.w700)),
                    const SizedBox(height: 8.0),
                    Container(
                      decoration: BoxDecoration(color: const Color(0xFFF5EBE1), borderRadius: BorderRadius.circular(16.0)),
                      padding: const EdgeInsets.symmetric(horizontal: 14.0),
                      child: Row(
                        children: [
                          const Icon(Icons.lock_outline_rounded, color: Color(0xFF8A776D), size: 20.0),
                          const SizedBox(width: 12.0),
                          Expanded(
                            child: TextField(
                              controller: _passwordController,
                              obscureText: _obscurePassword,
                              decoration: const InputDecoration(border: InputBorder.none),
                            ),
                          ),
                          IconButton(
                            icon: Icon(_obscurePassword ? Icons.visibility_outlined : Icons.visibility_off_outlined),
                            onPressed: () => setState(() => _obscurePassword = !_obscurePassword),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 6.0),
                    const Text('Use at least 8 characters', style: TextStyle(fontSize: 12.0, color: Color(0xFF7A685F))),
                  ],
                ),
              ),
            ),

            // Login Button & Link
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: Column(
                children: [
                  SizedBox(
                    width: double.infinity,
                    height: 54.0,
                    child: ElevatedButton(
                      onPressed: widget.onLoginSuccess,
                      style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFFE87338), foregroundColor: Colors.white),
                      child: const Text('login', style: TextStyle(fontSize: 16.5, fontWeight: FontWeight.w700)),
                    ),
                  ),
                  const SizedBox(height: 16.0),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text('New here , create account '),
                      GestureDetector(
                        onTap: widget.onCreateAccount,
                        child: const Text('Here', style: TextStyle(color: Color(0xFF2563EB), fontWeight: FontWeight.w700, decoration: TextDecoration.underline)),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}`,
  },
  'artisan_home_screen.dart': {
    path: 'lib/screens/artisan_home_screen.dart',
    language: 'dart',
    content: `// lib/screens/artisan_home_screen.dart

import 'package:flutter/material.dart';
import '../models/onboarding_state.dart';

/// Primary Artisan Home Dashboard matching 'Artisan Home section.png'
/// Displays metrics, urgent B2B bulk orders with progress bar, products catalog,
/// reliability score, and guild collaboration opportunities.
class ArtisanHomeScreen extends StatefulWidget {
  final OnboardingState? state;
  final VoidCallback? onLogout;

  const ArtisanHomeScreen({super.key, this.state, this.onLogout});

  @override
  State<ArtisanHomeScreen> createState() => _ArtisanHomeScreenState();
}

class _ArtisanHomeScreenState extends State<ArtisanHomeScreen> {
  int _currentNavIndex = 0;
  int _bambooBasketProgress = 30;
  final int _bambooBasketTotal = 50;

  @override
  Widget build(BuildContext context) {
    final String artisanName = widget.state?.artisanName.isNotEmpty ?? false ? widget.state!.artisanName : 'Ramu';

    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Stack(
          children: [
            Column(
              children: [
                _buildTopAppBar(),
                Expanded(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Good morning, $artisanName 👋', style: const TextStyle(fontSize: 24.0, fontWeight: FontWeight.w800)),
                        const Text('Ready to create something beautiful today?', style: TextStyle(fontSize: 14.0, color: Color(0xFF6B584E))),
                        const SizedBox(height: 14.0),

                        // Voice Search Bar
                        _buildVoiceSearchBar(),
                        const SizedBox(height: 16.0),

                        // Metrics (New Orders: 2, In Progress: 1, Completed: 28)
                        _buildMetricsCardsRow(),
                        const SizedBox(height: 18.0),

                        // Needs Attention Banner
                        _buildActiveOrderCard(),
                        const SizedBox(height: 22.0),

                        // My Products Section
                        _buildMyProductsSection(),
                        const SizedBox(height: 20.0),

                        // Artisan Score Card
                        _buildArtisanScoreCard(),
                        const SizedBox(height: 22.0),

                        // Opportunities for you
                        _buildOpportunitiesSection(),
                        const SizedBox(height: 80.0),
                      ],
                    ),
                  ),
                ),
              ],
            ),
            Positioned(
              right: 18.0,
              bottom: 74.0,
              child: FloatingActionButton(
                onPressed: () {},
                backgroundColor: const Color(0xFF8C3A16),
                child: const Icon(Icons.mic_rounded, color: Colors.white),
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: _buildBottomNavigationBar(),
    );
  }
  // [Full widgets for metrics, orders, products, and opportunities...]
}`,
  },
  'account_creation_screen.dart': {
    path: 'lib/screens/account_creation_screen.dart',
    language: 'dart',
    content: `// lib/screens/account_creation_screen.dart - Step 1 of 5: Mobile & Name registration with "Already have an account? Login" link`,
  },
  'main.dart': {
    path: 'lib/main.dart',
    language: 'dart',
    content: `// lib/main.dart - Orchestrates Splash, Onboarding Steps 1-5, Login Screen, and Artisan Home Dashboard`,
  },
  'craft_story_screen.dart': {
    path: 'lib/screens/craft_story_screen.dart',
    language: 'dart',
    content: `// lib/screens/craft_story_screen.dart - My Craft Story with AI Voice-to-Text & B2B Buyer Story Structuring`,
  },
  'splash_welcome_screen.dart': {
    path: 'lib/screens/splash_welcome_screen.dart',
    language: 'dart',
    content: `// lib/screens/splash_welcome_screen.dart - Splash Screen with 2s Auto Timer and Get Started CTA`,
  },
};

export default function App() {
  // Navigation mode: 0: Splash, 1: Language, 2: Role, 3: Account, 4: Voice, 5: Crafts, 6: Photo, 7: Preview, 8: Login, 9: Home
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [selectedFile, setSelectedFile] = useState<string>('login_screen.dart');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // 5-Second Timer State for Splash Screen
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);
  const [timeLeftMs, setTimeLeftMs] = useState<number>(5000);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // User State
  const [selectedLanguage, setSelectedLanguage] = useState<string>('हिंदी / Hindi');
  const [userRole, setUserRole] = useState<'artisan' | 'buyer'>('artisan');
  const [artisanName, setArtisanName] = useState<string>('Ramu Kumar');
  const [phoneNumber, setPhoneNumber] = useState<string>('+91 98765 43210');
  const [location, setLocation] = useState<string>('Barabanki, Uttar Pradesh');
  const [selectedCrafts, setSelectedCrafts] = useState<string[]>(['Bamboo & Cane', 'Terracotta Pottery']);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [hasRecordedVoice, setHasRecordedVoice] = useState<boolean>(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [showProgressModal, setShowProgressModal] = useState<boolean>(false);
  const [bambooProgress, setBambooProgress] = useState<number>(30);
  const [homeBottomTab, setHomeBottomTab] = useState<number>(0);
  const [selectedProductFilter, setSelectedProductFilter] = useState<number>(0);
  const [loginContact, setLoginContact] = useState<string>('ramukumar@hunarsangam.in');
  const [loginPassword, setLoginPassword] = useState<string>('••••••••');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New Product Flow States
  const [productFlowStep, setProductFlowStep] = useState<number>(0);
  const [rawMaterialCost, setRawMaterialCost] = useState<number>(135);
  const [artisanLaborHours, setArtisanLaborHours] = useState<number>(3.5);
  const [hourlyWageRate, setHourlyWageRate] = useState<number>(45);
  const [overheadCost, setOverheadCost] = useState<number>(17.5);
  const [retailPrice, setRetailPrice] = useState<number>(399);
  const [wholesalePrice, setWholesalePrice] = useState<number>(280);
  const [wholesaleMoq, setWholesaleMoq] = useState<number>(20);
  const [dailyCapacity, setDailyCapacity] = useState<number>(5);
  const [weeklyCapacity, setWeeklyCapacity] = useState<number>(30);
  const [readyStock, setReadyStock] = useState<number>(140);
  const [dimensionUnit, setDimensionUnit] = useState<'inches' | 'cm'>('inches');
  const [isArActive, setIsArActive] = useState<boolean>(false);
  const [activeLangTab, setActiveLangTab] = useState<'en' | 'hi' | 'as'>('en');
  const [selectedCardTemplate, setSelectedCardTemplate] = useState<'phone' | 'standee' | 'hangtag'>('phone');
  const [isCraftStoryRecording, setIsCraftStoryRecording] = useState<boolean>(false);
  const [isPlayingCraftVoiceNote, setIsPlayingCraftVoiceNote] = useState<boolean>(false);
  const [isCraftStoryAudioGuidePlaying, setIsCraftStoryAudioGuidePlaying] = useState<boolean>(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Splash 5-second timer effect
  useEffect(() => {
    if (activeScreenIndex === 0 && isTimerActive) {
      setTimeLeftMs(5000);
      const interval = 50;
      let remaining = 5000;

      timerRef.current = setInterval(() => {
        remaining -= interval;
        if (remaining <= 0) {
          clearInterval(timerRef.current!);
          setTimeLeftMs(0);
          setActiveScreenIndex(1); // Auto-advance to Screen 1 (Language)
        } else {
          setTimeLeftMs(remaining);
        }
      }, interval);

      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [activeScreenIndex, isTimerActive]);

  const restartTimer = () => {
    setActiveScreenIndex(0);
    setIsTimerActive(true);
    setTimeLeftMs(5000);
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const screenPills = [
    { idx: 0, label: '0. Splash' },
    { idx: 1, label: '1. Language' },
    { idx: 2, label: '2. Role' },
    { idx: 3, label: '3. Account' },
    { idx: 8, label: '🔑 Login Screen' },
    { idx: 4, label: '4. Voice' },
    { idx: 5, label: '5. Crafts' },
    { idx: 6, label: '6. Photo' },
    { idx: 7, label: '7. Preview' },
    { idx: 9, label: '🏠 Artisan Home' },
    { idx: 10, label: '📦 10. Products Catalog' },
    { idx: 11, label: '📸 11. Coin Scale Guide' },
    { idx: 12, label: '📷 12. Viewfinder' },
    { idx: 13, label: '📐 13. AI Dimensions' },
    { idx: 14, label: '🎙️ 14. Raw Material Cost' },
    { idx: 15, label: '📜 15. Description & GI' },
    { idx: 16, label: '⚖️ 16. Fair Pricing' },
    { idx: 17, label: '🏭 17. Capacity Intake' },
    { idx: 18, label: '👓 18. Preview Product' },
    { idx: 19, label: '🎉 19. Catalog Published' },
    { idx: 20, label: '🪪 20. Profile (Visiting Card)' },
    { idx: 21, label: '🎙️ 21. My Craft Story' },
  ];

  return (
    <div className="min-h-screen bg-[#F4EDE7] text-[#2D2421] flex flex-col items-center">
      {/* Top Header */}
      <header className="w-full bg-[#FAF5F0] border-b border-[#E8DDD5] px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#A84318] text-white flex items-center justify-center font-bold shadow-xs">
            HS
          </div>
          <div>
            <h1 className="text-base font-bold text-[#4A3228] leading-tight">HunarSangam Mobile App</h1>
            <p className="text-xs text-[#8A756C]">Login &amp; Home Screen Integration • SIH Initiative</p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center bg-[#EFE4DC] p-1 rounded-xl border border-[#DFCECE]">
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'preview'
                ? 'bg-white text-[#A84318] shadow-xs'
                : 'text-[#6B5A51] hover:text-[#4A3228]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            Device Simulator
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'code'
                ? 'bg-white text-[#A84318] shadow-xs'
                : 'text-[#6B5A51] hover:text-[#4A3228]'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            Flutter / Dart Code
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-7xl flex-1 p-3 md:p-6 flex flex-col items-center justify-center">
        {activeTab === 'preview' ? (
          <div className="flex flex-col items-center w-full">
            {/* Screen Stepper Bar */}
            <div className="w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl p-2.5 border border-[#E8DDD5] shadow-xs mb-3 flex flex-col md:flex-row items-center justify-between gap-2.5">
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 md:pb-0">
                {screenPills.map((pill) => (
                  <button
                    key={pill.idx}
                    onClick={() => {
                      setActiveScreenIndex(pill.idx);
                      if (pill.idx === 0) setTimeLeftMs(5000);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      activeScreenIndex === pill.idx
                        ? 'bg-[#A84318] text-white shadow-xs'
                        : 'bg-[#F4ECE5] text-[#6B5A51] hover:bg-[#EADFD6]'
                    }`}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>

              {activeScreenIndex === 0 && (
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setIsTimerActive(!isTimerActive)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all border ${
                      isTimerActive
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                        : 'bg-amber-50 border-amber-300 text-amber-800'
                    }`}
                  >
                    <Timer className="w-3.5 h-3.5" />
                    <span>Timer: {isTimerActive ? 'ON' : 'OFF'}</span>
                  </button>
                  <button
                    onClick={restartTimer}
                    className="p-1 bg-[#F4ECE5] hover:bg-[#EADFD6] text-[#6B5A51] rounded-lg text-xs transition-all border border-[#DFCECE]"
                    title="Restart Splash"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Device Frame */}
            <div className="relative w-[390px] h-[780px] bg-black rounded-[50px] p-3 shadow-2xl ring-1 ring-black/20">
              {/* Dynamic Island / Camera Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-end px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] ring-1 ring-neutral-800" />
              </div>

              {/* Device Screen Content */}
              <div className="w-full h-full bg-[#FDFBF9] rounded-[42px] overflow-hidden flex flex-col relative pt-7 pb-2 select-none">
                {/* TOAST POPUP */}
                {toastMessage && (
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50 bg-[#2D2421] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg animate-in fade-in slide-in-from-top-2 flex items-center gap-2 max-w-[90%]">
                    <Sparkles className="w-3.5 h-3.5 text-[#E87338]" />
                    <span>{toastMessage}</span>
                  </div>
                )}

                {/* 1. SCREEN 0: SPLASH (100% Match to Splash or Start or Entry Point.png) */}
                {activeScreenIndex === 0 && (
                  <div
                    onClick={() => {
                      // Allow tap anywhere to proceed immediately
                      setActiveScreenIndex(1);
                      showToast('🚀 Welcome to HunarSangam');
                    }}
                    className="flex-1 flex flex-col bg-[#FDFBF9] relative overflow-hidden cursor-pointer select-none"
                  >
                    {/* 5-Second Timer Progress Bar */}
                    {isTimerActive && (
                      <div className="w-full bg-[#EADFD6] h-1.5 relative overflow-hidden z-20 shrink-0">
                        <div
                          className="h-full bg-[#8C2E18] transition-all duration-75 ease-linear"
                          style={{ width: `${((5000 - timeLeftMs) / 5000) * 100}%` }}
                        />
                      </div>
                    )}

                    {/* Subtle Rotating Mandala Watermark in Background */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 overflow-hidden">
                      <svg
                        className="w-[420px] h-[420px] text-[#EAD8CC] animate-[spin_60s_linear_infinite]"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
                        <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="0.75" />
                        <circle cx="100" cy="100" r="54" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                        <circle cx="100" cy="100" r="36" stroke="currentColor" strokeWidth="0.75" />
                        {/* 12 Floral Petals */}
                        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                          <g key={deg} transform={`rotate(${deg} 100 100)`}>
                            <path
                              d="M 100,28 C 108,50 115,70 100,100 C 85,70 92,50 100,28 Z"
                              stroke="currentColor"
                              strokeWidth="0.8"
                              fill="currentColor"
                              fillOpacity="0.06"
                            />
                            <circle cx="100" cy="22" r="2.5" fill="currentColor" fillOpacity="0.3" />
                          </g>
                        ))}
                      </svg>
                    </div>

                    {/* Top Header Row (SIH INITIATIVE & AI Helped craft) */}
                    <div className="px-5 pt-3 pb-1 flex items-center justify-between z-10 shrink-0">
                      {/* Left: SIH Initiative Pill Badge */}
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F6EDE7] border border-[#ECD9CE] rounded-full shadow-2xs">
                        <span className="w-2 h-2 rounded-full bg-[#1B803A] animate-pulse" />
                        <span className="text-[10px] font-black tracking-wider text-[#35251E]">SIH INITIATIVE</span>
                      </div>

                      {/* Right: AI Helped craft Badge + Timer Indicator */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#35251E]">
                          <Palette className="w-3.5 h-3.5 text-[#35251E]" />
                          <span className="text-[11px] font-bold text-[#35251E]">AI Helped craft</span>
                        </div>
                        {isTimerActive && (
                          <span className="text-[10px] font-bold text-[#8C3A16] bg-[#FDF2EB] px-1.5 py-0.5 rounded-md border border-[#F3DFD5]">
                            {(timeLeftMs / 1000).toFixed(1)}s
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Central Content Area */}
                    <div className="flex-1 flex flex-col items-center justify-center px-6 text-center z-10 -mt-2">
                      {/* Logo Emblem Container with Halo Glow */}
                      <div className="relative mb-5 group">
                        {/* Outer Soft Halo Glow */}
                        <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#FCECE3] via-[#F8DFD2] to-[#FCECE3] blur-xs opacity-80 animate-pulse" />

                        {/* Outer Circular Ring Border */}
                        <div className="relative w-32 h-32 rounded-full p-2 bg-[#FCECE3] flex items-center justify-center border border-[#F5D8CA] shadow-md">
                          {/* Inner Squircle Badge with Terracotta Border */}
                          <div className="w-26 h-26 bg-white rounded-[24px] border-[3.5px] border-[#9E3E1A] shadow-inner flex flex-col items-center justify-center p-2 transition-transform duration-300 group-hover:scale-105">
                            {/* Artistic Motif (Artisan silhouette & colorful palette) */}
                            <div className="w-10 h-10 mb-1 relative flex items-center justify-center">
                              {/* Peacock/Craft Multi-Color Brushstrokes */}
                              <svg className="w-9 h-9" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="16" fill="#FDF7F3" />
                                {/* Colorful arcs: saffron, teal, gold, terracotta */}
                                <path d="M18 6C13 6 8 11 8 18C8 22 11 25 15 27" stroke="#167873" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M18 6C23 6 28 11 28 18C28 22 25 25 21 27" stroke="#E67E22" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M18 10C14.5 10 11 13.5 11 18" stroke="#D35400" strokeWidth="2" strokeLinecap="round" />
                                <path d="M18 10C21.5 10 25 13.5 25 18" stroke="#F39C12" strokeWidth="2" strokeLinecap="round" />
                                {/* Artisan silhouette with brush */}
                                <path d="M18 12C16.3 12 15 13.3 15 15C15 16.5 16 17.7 17.4 18V24H18.6V18C20 17.7 21 16.5 21 15C21 13.3 19.7 12 18 12Z" fill="#3D2418" />
                                <circle cx="18" cy="14" r="1.5" fill="#E67E22" />
                              </svg>
                            </div>

                            {/* Hindi Text: हुनर संगम */}
                            <span className="font-serif font-black text-sm text-[#2D1C15] tracking-tight leading-none">
                              हुनर संगम
                            </span>

                            {/* Subtitle Underline */}
                            <div className="w-16 h-px bg-[#D9C4B8] my-0.5" />
                            <span className="text-[6.5px] font-bold text-[#8C5338] tracking-wider leading-none">
                              Inspire • Craft • Connect
                            </span>
                          </div>
                        </div>
                      </div>

                        {/* Main Brand Title */}
                      <h2 className="text-[26px] font-black text-[#9E3E1A] tracking-tight mb-1 leading-none">
                        HunarSangam
                      </h2>

                      {/* Subtitle */}
                      <p className="text-[13.5px] font-black text-[#221C19] mb-3 max-w-[240px] leading-snug">
                        Where Artisans Connect, Collaborate &amp; Grow
                      </p>

                      {/* Keywords with Separator Dots */}
                      <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#6B584E] mb-3.5">
                        <span>Connect</span>
                        <span className="w-1 h-1 rounded-full bg-[#9E3E1A]" />
                        <span>Collaborate</span>
                        <span className="w-1 h-1 rounded-full bg-[#9E3E1A]" />
                        <span>Create</span>
                      </div>

                      {/* Language Selector Pill Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveScreenIndex(1);
                        }}
                        className="px-3.5 py-1.5 bg-[#FFFDFB] border border-[#E5D5CB] rounded-full flex items-center gap-1.5 text-xs font-bold text-[#221C19] shadow-2xs hover:bg-[#FDF3ED] active:scale-95 transition-all mb-4"
                      >
                        <Globe className="w-3.5 h-3.5 text-[#221C19]" />
                        <span>English</span>
                        <span className="text-[10px] text-[#221C19]">▯</span>
                      </button>

                      {/* Bottom Verified Trust Seal */}
                      <div className="flex items-center justify-center gap-1.5 text-[11.5px] font-bold text-[#55433A]">
                        <div className="w-4 h-4 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#2E7D32] stroke-[3]" />
                        </div>
                        <span>Crafted with pride in India</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. SCREEN 1: LANGUAGE (Exact 1:1 Match to 2. language selection.png) */}
                {activeScreenIndex === 1 && (
                  <div className="flex-1 flex flex-col bg-[#FDFBF9] overflow-y-auto">
                    {/* Top Bar with Brand Logo & Help Icon */}
                    <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-[#FCEEE6] border border-[#E8DDD5] flex items-center justify-center">
                          <span className="text-xs font-black text-[#8C3A16]">हुनर</span>
                        </div>
                        <span className="font-extrabold text-[#7C3F24] text-base tracking-tight">HunarSangam</span>
                      </div>
                      <button className="w-7 h-7 rounded-full border border-[#D5C5BA] flex items-center justify-center text-[#7C3F24] hover:bg-[#F3E7DF]">
                        <HelpCircle className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="px-5 py-2 flex flex-col items-center text-center flex-1">
                      {/* Avatar Illustration */}
                      <div className="relative mb-3 mt-1">
                        <div className="w-20 h-20 rounded-full bg-[#FCEFE9] border-2 border-[#EAD5C8] flex items-center justify-center overflow-hidden shadow-xs">
                          <div className="w-full h-full bg-gradient-to-br from-[#FBE8DE] to-[#F3D7C7] flex items-center justify-center text-[#9C3C18]">
                            <Palette className="w-9 h-9" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#D85A2A] rounded-full flex items-center justify-center text-white shadow-xs border-2 border-[#FDFBF9]">
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Headings */}
                      <h1 className="text-2xl font-black text-[#1A1A1A] tracking-tight mb-0.5">
                        Choose your language
                      </h1>
                      <h2 className="text-lg font-black text-[#9C3C18] mb-1">
                        अपनी भाषा चुनें
                      </h2>
                      <p className="text-[12px] text-[#6B584E] mb-4">
                        You can change this anytime / इसे कभी भी बदल सकते हैं
                      </p>

                      {/* 2-Column Grid of Languages (8 Items matching image exactly) */}
                      <div className="grid grid-cols-2 gap-3 w-full mb-4">
                        {[
                          { native: 'हिंदी', eng: 'Hindi', code: 'hi' },
                          { native: 'English', eng: 'English', code: 'en' },
                          { native: 'मराठी', eng: 'Marathi', code: 'mr' },
                          { native: 'ગુજરાતી', eng: 'Gujarati', code: 'gu' },
                          { native: 'বাংলা', eng: 'Bengali', code: 'bn' },
                          { native: 'தமிழ்', eng: 'Tamil', code: 'ta' },
                          { native: 'తెలుగు', eng: 'Telugu', code: 'te' },
                        ].map((item) => {
                          const isSelected = selectedLanguage.toLowerCase().includes(item.eng.toLowerCase()) || 
                                            (item.code === 'hi' && selectedLanguage.includes('Hindi'));
                          return (
                            <button
                              key={item.code}
                              onClick={() => setSelectedLanguage(`${item.native} / ${item.eng}`)}
                              className={`p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#FDF8F5] border-2 border-[#8C3A16] shadow-xs'
                                  : 'bg-white border-[#E5D5CB] hover:border-[#CBB7AA]'
                              }`}
                            >
                              <div>
                                <span className={`text-[15px] font-extrabold block leading-tight ${isSelected ? 'text-[#8C3A16]' : 'text-[#1A1A1A]'}`}>
                                  {item.native}
                                </span>
                                <span className="text-[11px] text-[#7A685F] font-medium block mt-0.5">
                                  {item.eng}
                                </span>
                              </div>
                              <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                                  isSelected
                                    ? 'bg-[#8C3A16] border-[#8C3A16] text-white'
                                    : 'border-[#D5C5BA] bg-transparent'
                                }`}
                              >
                                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                            </button>
                          );
                        })}

                        {/* 8th Card: + More + */}
                        <div className="p-3 rounded-2xl border-2 border-dashed border-[#D5C5BA] bg-[#FAF3EE]/60 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#FAF3EE]">
                          <span className="text-[14px] font-extrabold text-[#4A3B32] block leading-tight">
                            + More +
                          </span>
                          <span className="text-[11px] text-[#8C7368] font-medium block mt-0.5">
                            अन्य भाषाएं
                          </span>
                        </div>
                      </div>

                      {/* Direct Artisan Connect Guarantee Banner */}
                      <div className="w-full p-3 rounded-2xl bg-[#F9EFE7] border border-[#EAD5C8] flex items-center gap-3 text-left mb-2">
                        <div className="w-9 h-9 rounded-full bg-[#ECD6C8] flex items-center justify-center text-[#8C4421] shrink-0">
                          <HandMetal className="w-5 h-5" />
                        </div>
                        <p className="text-[11px] leading-tight text-[#4A3B32]">
                          <strong className="font-bold text-[#2D2421]">शत प्रतिशत प्रत्यक्ष कारीगर जुड़ाव :</strong> हर खरीद से भारतीय शिल्पकारों और पारंपरिक हथकरघा को सीधा प्रोत्साहन मिलता है।
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="p-5 pt-2 border-t border-[#F0E6DE] bg-[#FDFBF9]">
                      <button
                        onClick={() => setActiveScreenIndex(2)}
                        className="w-full py-3.5 bg-[#9C3C18] hover:bg-[#853213] text-white rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        <span>आगे बढ़ें • Continue</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <div className="flex items-center justify-center gap-1.5 mt-2.5 text-[11px] text-[#4A372D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
                        <span>अगला कदम: उपयोगकर्ता प्रकार • Next: Role Selection</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. SCREEN 2: ROLE */}
                {activeScreenIndex === 2 && (
                  <div className="flex-1 flex flex-col p-5 overflow-y-auto">
                    <div className="flex items-center justify-between mb-4">
                      <button onClick={() => setActiveScreenIndex(1)} className="p-1 text-[#4A3228] hover:bg-[#F3E7DF] rounded-lg">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <span className="text-xs font-bold text-[#A84318]">Step 2 / 7</span>
                    </div>

                    <h2 className="text-lg font-black text-[#2D2421] mb-1">आपकी भूमिका क्या है?</h2>
                    <p className="text-xs text-[#6B5A51] mb-4">Select your primary role on HunarSangam</p>

                    <div className="space-y-3 flex-1">
                      <button
                        onClick={() => setUserRole('artisan')}
                        className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
                          userRole === 'artisan'
                            ? 'bg-[#FDF6F0] border-[#A84318] shadow-sm'
                            : 'bg-white border-[#E8DDD5]'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-xl bg-[#F3E7DF] flex items-center justify-center text-[#A84318]">
                            <Palette className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-[#2D2421]">कारीगर / शिल्पकार (Artisan)</h3>
                            <p className="text-[11px] text-[#7B665C]">I create and sell handmade crafts</p>
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => setUserRole('buyer')}
                        className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
                          userRole === 'buyer'
                            ? 'bg-[#FDF6F0] border-[#A84318] shadow-sm'
                            : 'bg-white border-[#E8DDD5]'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-xl bg-[#F3E7DF] flex items-center justify-center text-[#A84318]">
                            <ShoppingBag className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-[#2D2421]">खरीदार (Craft Buyer)</h3>
                            <p className="text-[11px] text-[#7B665C]">I want to purchase authentic handicrafts</p>
                          </div>
                        </div>
                      </button>
                    </div>

                    <button
                      onClick={() => setActiveScreenIndex(3)}
                      className="w-full py-3 bg-[#A84318] text-white rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 mt-4 cursor-pointer"
                    >
                      <span>Continue as Artisan →</span>
                    </button>
                  </div>
                )}

                {/* 4. SCREEN 3: ACCOUNT CREATION (with Already Have Account Link) */}
                {activeScreenIndex === 3 && (
                  <div className="flex-1 flex flex-col p-5 overflow-y-auto">
                    <div className="flex items-center justify-between mb-3">
                      <button onClick={() => setActiveScreenIndex(2)} className="p-1 text-[#4A3228] hover:bg-[#F3E7DF] rounded-lg">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <span className="text-xs font-bold text-[#A84318]">Step 3 / 7 • Step 1 of 5</span>
                    </div>

                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#B85324]" />
                      <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                      <span className="w-2 h-2 rounded-full bg-[#B85324]" />
                    </div>

                    <h2 className="text-xl font-black text-[#2D2421] mb-1">Create Your Account</h2>
                    <p className="text-xs text-[#6B5A51] mb-4">Enter your artisan registration details</p>

                    <div className="space-y-3 flex-1">
                      <div>
                        <label className="text-xs font-bold text-[#4A3228] block mb-1">Artisan Full Name</label>
                        <input
                          type="text"
                          value={artisanName}
                          onChange={(e) => setArtisanName(e.target.value)}
                          className="w-full p-2.5 bg-[#F6ECE5] border border-[#E5D5CB] rounded-xl text-xs font-semibold text-[#2D2421] outline-none"
                          placeholder="e.g. Ramu Kumar"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#4A3228] block mb-1">Mobile Number / WhatsApp</label>
                        <input
                          type="text"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full p-2.5 bg-[#F6ECE5] border border-[#E5D5CB] rounded-xl text-xs font-semibold text-[#2D2421] outline-none"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#4A3228] block mb-1">Workshop Location / City</label>
                        <input
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full p-2.5 bg-[#F6ECE5] border border-[#E5D5CB] rounded-xl text-xs font-semibold text-[#2D2421] outline-none"
                          placeholder="Barabanki, Uttar Pradesh"
                        />
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <button
                        onClick={() => setActiveScreenIndex(4)}
                        className="w-full py-3 bg-[#E66B38] text-white rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer mb-3"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      {/* ALREADY HAVE AN ACCOUNT? LOGIN LINK */}
                      <div className="text-center text-xs text-[#6B584E]">
                        <span>Already have an account? </span>
                        <button
                          onClick={() => setActiveScreenIndex(8)}
                          className="font-bold text-[#E66B38] underline hover:text-[#C84F1D] cursor-pointer"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. SCREEN 8: LOGIN SCREEN (Matching ar-Artisan- login.png) */}
                {activeScreenIndex === 8 && (
                  <div className="flex-1 flex flex-col p-5 bg-[#FDFBF9] overflow-y-auto">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() => setActiveScreenIndex(3)}
                        className="p-1 text-[#2D2421] hover:bg-[#F3E7DF] rounded-lg"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>

                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#FFFBF9] border border-[#E5D5CB] flex items-center justify-center">
                          <span className="font-serif font-black text-[9px] text-[#7C3F24]">हुनर</span>
                        </div>
                        <span className="text-base font-extrabold text-[#7C3F24]">HunarSangam</span>
                      </div>

                      <div className="px-2.5 py-1 bg-white border border-[#E5D5CB] rounded-full text-xs font-semibold text-[#4A372D] flex items-center gap-1">
                        <span>English</span>
                        <span className="text-[10px]">▼</span>
                      </div>
                    </div>

                    {/* Three Dots Flourish */}
                    <div className="flex items-center gap-1.5 mb-3 mt-1">
                      <span className="w-2 h-2 rounded-full bg-[#B85324]" />
                      <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                      <span className="w-2 h-2 rounded-full bg-[#B85324]" />
                    </div>

                    {/* Title & Subtitle */}
                    <h1 className="text-2xl font-black text-[#221C19] mb-1 leading-tight">
                      Login Your Account
                    </h1>
                    <p className="text-xs text-[#7A685F] mb-6">
                      Enter your contact details to login.
                    </p>

                    {/* Form Fields */}
                    <div className="space-y-4 flex-1">
                      {/* Field 1: Email Address / Phone number */}
                      <div>
                        <label className="text-xs font-bold text-[#2D2421] block mb-1.5">
                          Email Address / Phone number
                        </label>
                        <div className="flex items-center gap-2.5 bg-[#F5EBE1] border border-[#E8DDD5] rounded-2xl px-3.5 py-3">
                          <Mail className="w-4 h-4 text-[#8A776D] shrink-0" />
                          <input
                            type="text"
                            value={loginContact}
                            onChange={(e) => setLoginContact(e.target.value)}
                            placeholder="Enter your email address / phone number"
                            className="w-full bg-transparent text-xs text-[#2D2421] font-medium outline-none placeholder-[#9E8D84]"
                          />
                        </div>
                      </div>

                      {/* Field 2: Create Password */}
                      <div>
                        <label className="text-xs font-bold text-[#2D2421] block mb-1.5">
                          Create Password
                        </label>
                        <div className="flex items-center gap-2.5 bg-[#F5EBE1] border border-[#E8DDD5] rounded-2xl px-3.5 py-3">
                          <Lock className="w-4 h-4 text-[#8A776D] shrink-0" />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            placeholder="Enter a password"
                            className="w-full bg-transparent text-xs text-[#2D2421] font-medium outline-none placeholder-[#9E8D84]"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-[#8A776D] hover:text-[#4A3228]"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                        <p className="text-[11px] text-[#7A685F] mt-1.5">Use at least 8 characters</p>
                      </div>
                    </div>

                    {/* Bottom Action: login button & New here link */}
                    <div className="pt-4 pb-2">
                      <button
                        onClick={() => {
                          if (!loginContact.trim()) {
                            showToast('⚠️ Please enter your email address or phone number');
                            return;
                          }
                          if (!loginPassword.trim() || loginPassword.length < 6) {
                            showToast('⚠️ Please enter a valid password (at least 6 characters)');
                            return;
                          }
                          if (!artisanName) {
                            setArtisanName('Ramu Kumar');
                          }
                          showToast(`✅ Welcome back, ${artisanName || 'Ramu Kumar'}! Redirecting to Dashboard...`);
                          setActiveScreenIndex(9); // Direct to Artisan Home Dashboard Screen!
                        }}
                        className="w-full py-3.5 bg-[#E87338] hover:bg-[#D56228] text-white rounded-2xl font-bold text-sm shadow-md transition-all cursor-pointer mb-4 active:scale-98"
                      >
                        login
                      </button>

                      <div className="text-center text-xs text-[#2D2421]">
                        <span>New here , create account </span>
                        <button
                          onClick={() => setActiveScreenIndex(3)}
                          className="text-[#2563EB] font-bold underline cursor-pointer"
                        >
                          Here
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. SCREEN 4: VOICE BIO (Exact 1:1 Match to ar- Voice-First Artisan Introduction.png) */}
                {activeScreenIndex === 4 && (
                  <div className="flex-1 flex flex-col bg-[#FDFBF9] overflow-y-auto">
                    {/* Top Bar */}
                    <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                      <button onClick={() => setActiveScreenIndex(3)} className="p-1 text-[#221C19] hover:bg-[#F3E7DF] rounded-lg">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <div className="px-3 py-1 bg-[#FCEEE6] rounded-full flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#8C3A16]" />
                        <span className="text-xs font-bold text-[#8C3A16]">Step 2 of 5 • Artisan Setup</span>
                      </div>
                      <div className="px-2.5 py-1 bg-white border border-[#E5D5CB] rounded-full text-xs font-semibold text-[#4A372D] flex items-center gap-1">
                        <span>English</span>
                        <span className="text-[10px]">▼</span>
                      </div>
                    </div>

                    <div className="px-5 py-2 flex flex-col items-center text-center flex-1">
                      {/* Headings */}
                      <h1 className="text-2xl font-black text-[#1A1A1A] tracking-tight mb-1">
                        Tell us about yourself
                      </h1>
                      <p className="text-[13.5px] text-[#6B584E] leading-snug mb-3 max-w-[280px]">
                        Speak naturally. We will create your artisan profile for you.
                      </p>

                      {/* Audio Assistance Active Badge */}
                      <div className="px-3.5 py-1.5 bg-[#E8F5E9] border border-[#C8E6C9] rounded-full flex items-center gap-2 mb-6">
                        <Headphones className="w-4 h-4 text-[#2E7D32]" />
                        <span className="text-[11.5px] font-semibold text-[#2E7D32]">
                          Audio assistance active • Hindi/English/other supported
                        </span>
                      </div>

                      {/* Concentric Glowing Microphone Recording Button */}
                      <div className="relative mb-5 flex items-center justify-center">
                        {/* Outer Ring */}
                        <div
                          className={`w-48 h-48 rounded-full bg-[#FCEFE9] flex items-center justify-center transition-all ${
                            isRecording ? 'scale-105 animate-pulse' : ''
                          }`}
                        >
                          {/* Middle Ring */}
                          <div className="w-38 h-38 rounded-full bg-[#F8DDD2] flex items-center justify-center">
                            {/* Inner Mic Button */}
                            <button
                              onClick={() => {
                                setIsRecording(!isRecording);
                                setHasRecordedVoice(true);
                              }}
                              className="w-28 h-28 rounded-full bg-[#9C3C18] hover:bg-[#853213] text-white flex items-center justify-center shadow-md cursor-pointer transition-all active:scale-95"
                            >
                              <Mic className="w-10 h-10" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Tap to Speak Callout */}
                      <div className="flex items-center gap-1.5 text-[#9C3C18] font-bold text-sm mb-0.5">
                        <Volume2 className="w-4 h-4" />
                        <span>Tap the microphone and speak naturally.</span>
                      </div>
                      <p className="text-[12px] text-[#6B584E] mb-5">
                        Tell us your craft name, village, or years of work.
                      </p>

                      {/* Speak Your Following Details Card */}
                      <div className="w-full p-4 rounded-2xl bg-[#FFF9F5] border border-[#F4E5DB] text-left mb-4">
                        <div className="flex items-center gap-1.5 mb-3 text-[#8C3A16] font-bold text-[11px] uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>SPEAK YOUR FOLLOWING DETAILS</span>
                        </div>

                        {/* Prompt Chips */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {['Full Name', 'Full Address', 'Experience', 'Specialities', 'Products You are making'].map((chip) => (
                            <div
                              key={chip}
                              className="px-3 py-1.5 rounded-xl bg-white border border-[#EADFD6] text-[12px] italic text-[#4A372D] font-medium shadow-2xs"
                            >
                              {chip}
                            </div>
                          ))}
                        </div>

                        {/* Example Box */}
                        <div className="p-3 rounded-xl bg-white/80 border border-[#EADFD6] text-[12px] text-[#4A372D] italic leading-relaxed">
                          Example : “I make handmade bamboo baskets and have been doing this for many years in Barabanki, UP.” All About Your self
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="p-5 pt-2 border-t border-[#F0E6DE] bg-[#FDFBF9] space-y-2.5">
                      <button
                        onClick={() => setActiveScreenIndex(3)}
                        className="w-full py-3 bg-white border border-[#3D2E26] hover:bg-[#F9F5F1] text-[#221C19] rounded-2xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Add Details Manually</span>
                      </button>

                      <button
                        onClick={() => setActiveScreenIndex(5)}
                        className="w-full py-3.5 bg-[#E66B38] hover:bg-[#D55C2A] text-white rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        <span>Continue</span>
                      </button>

                      <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-[#5A483E]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
                        <span>Designed for speaking, seeing and tapping — zero typing required.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 7. SCREEN 5: CRAFTS (Exact 1:1 Match to ar- artisan Your Craft.png) */}
                {activeScreenIndex === 5 && (
                  <div className="flex-1 flex flex-col bg-[#FDFBF9] overflow-y-auto">
                    {/* Top Bar */}
                    <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                      <button onClick={() => setActiveScreenIndex(4)} className="p-1 text-[#221C19] hover:bg-[#F3E7DF] rounded-lg">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <div className="px-3 py-1 bg-[#FCEEE6] rounded-full flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#8C3A16]" />
                        <span className="text-xs font-bold text-[#8C3A16]">Step 3 of 5 • Artisan Craft</span>
                      </div>
                      <div className="px-2.5 py-1 bg-white border border-[#E5D5CB] rounded-full text-xs font-semibold text-[#4A372D] flex items-center gap-1">
                        <span>English</span>
                        <span className="text-[10px]">▼</span>
                      </div>
                    </div>

                    {/* Audio Assistance Banner */}
                    <div className="mx-5 my-1.5 px-3 py-1.5 rounded-xl bg-[#FFF3ED] border border-[#F8DACD] flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-[#8C3A16] shrink-0" />
                      <span className="text-[11.5px] font-semibold text-[#8C3A16]">
                        Audio assistance active • Tap any craft to hear details
                      </span>
                    </div>

                    <div className="px-5 py-2 flex flex-col text-left flex-1">
                      {/* Headings */}
                      <h1 className="text-xl font-black text-[#1A1A1A] tracking-tight mb-1">
                        What do you make?
                      </h1>
                      <p className="text-[13px] text-[#6B584E] leading-snug mb-3">
                        Choose your primary craft. You can select more than one or tell us with your voice.
                      </p>

                      {/* Tap Microphone Card */}
                      <div className="w-full p-3 rounded-2xl bg-[#FFF9F5] border border-[#F4E5DB] flex items-center gap-3 mb-4">
                        <button
                          onClick={() => {
                            setIsRecording(!isRecording);
                            showToast(isRecording ? 'Recording stopped' : 'Listening to your craft voice prompt...');
                          }}
                          className={`w-11 h-11 rounded-full flex items-center justify-center text-white shrink-0 cursor-pointer transition-all ${
                            isRecording ? 'bg-red-500 animate-pulse' : 'bg-[#8C3A16] hover:bg-[#722E11]'
                          }`}
                        >
                          <Mic className="w-5 h-5" />
                        </button>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[13px] font-bold text-[#221C19] leading-tight">
                            Tap microphone to speak your craft name
                          </h4>
                          <p className="text-[11.5px] text-[#7A685F] italic mt-0.5">
                            Say e.g. "I make terracotta pots and clay planters"
                          </p>
                        </div>
                      </div>

                      {/* 2-Column Visual Craft Cards Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        {[
                          {
                            id: 'bamboo',
                            title: 'Bamboo & Cane',
                            subtitle: 'Baskets, planters, lamps, mats',
                            imageGradient: 'from-[#8B5A2B] via-[#CD853F] to-[#D2B48C]',
                            craftIcon: '🧺',
                            iconBg: 'bg-[#5D7A38]',
                          },
                          {
                            id: 'pottery',
                            title: 'Pottery & Terracotta',
                            subtitle: 'Earthen pots, vases, tableware, diyas',
                            imageGradient: 'from-[#A0522D] via-[#CD5C5C] to-[#E9967A]',
                            craftIcon: '🏺',
                            iconBg: 'bg-[#BA5427]',
                          },
                          {
                            id: 'handloom',
                            title: 'Handloom & Textiles',
                            subtitle: 'Sarees, dupattas, stoles, home linen',
                            imageGradient: 'from-[#4682B4] via-[#5F9EA0] to-[#B0C4DE]',
                            craftIcon: '🧵',
                            iconBg: 'bg-[#386B8C]',
                          },
                          {
                            id: 'embroidery',
                            title: 'Embroidery & Zardozi',
                            subtitle: 'Chikan, kantha, mirror work, zari',
                            imageGradient: 'from-[#800020] via-[#C71585] to-[#DB7093]',
                            craftIcon: '🪡',
                            iconBg: 'bg-[#8C386B]',
                          },
                          {
                            id: 'woodcraft',
                            title: 'Wood Craft & Carving',
                            subtitle: 'Toys, wooden trays, wall panels, utensils',
                            imageGradient: 'from-[#5C4033] via-[#8B4513] to-[#A0522D]',
                            craftIcon: '🪵',
                            iconBg: 'bg-[#7A5138]',
                          },
                          {
                            id: 'metalcraft',
                            title: 'Metal Craft & Dhokra',
                            subtitle: 'Brass statues, bell metal, copperware',
                            imageGradient: 'from-[#B8860B] via-[#DAA520] to-[#FFD700]',
                            craftIcon: '🔔',
                            iconBg: 'bg-[#B58900]',
                          },
                          {
                            id: 'jewellery',
                            title: 'Handmade Jewellery',
                            subtitle: 'Beaded, terracotta, tribal silver, filigree',
                            imageGradient: 'from-[#708090] via-[#A9A9A9] to-[#D3D3D3]',
                            craftIcon: '📿',
                            iconBg: 'bg-[#C2410C]',
                          },
                          {
                            id: 'painting',
                            title: 'Traditional Painting',
                            subtitle: 'Madhubani, Warli, Pichwai, miniature',
                            imageGradient: 'from-[#2E8B57] via-[#3CB371] to-[#8FBC8F]',
                            craftIcon: '🎨',
                            iconBg: 'bg-[#0F766E]',
                          },
                          {
                            id: 'leather',
                            title: 'Leather Craft',
                            subtitle: 'Juttis, bags, journals, embossed goods',
                            imageGradient: 'from-[#8B4513] via-[#A0522D] to-[#CD853F]',
                            craftIcon: '👞',
                            iconBg: 'bg-[#78350F]',
                          },
                          {
                            id: 'stone',
                            title: 'Stone & Marble',
                            subtitle: 'Inlay work, jaali panels, sculptures',
                            imageGradient: 'from-[#696969] via-[#808080] to-[#C0C0C0]',
                            craftIcon: '🗿',
                            iconBg: 'bg-[#475569]',
                          },
                        ].map((craft) => {
                          const isSelected = selectedCrafts.includes(craft.title) || (craft.id === 'bamboo' && selectedCrafts.length === 0);
                          return (
                            <div
                              key={craft.id}
                              onClick={() => {
                                if (isSelected) {
                                  setSelectedCrafts(selectedCrafts.filter((c) => c !== craft.title));
                                } else {
                                  setSelectedCrafts([...selectedCrafts, craft.title]);
                                }
                              }}
                              className={`rounded-2xl border text-left overflow-hidden bg-white transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                  ? 'border-2 border-[#8C3A16] shadow-sm ring-1 ring-[#8C3A16]/20'
                                  : 'border-[#EADFD6] hover:border-[#CBB7AA]'
                              }`}
                            >
                              {/* Visual Craft Banner */}
                              <div className="relative h-28 w-full overflow-hidden">
                                <div className={`w-full h-full bg-gradient-to-tr ${craft.imageGradient} flex items-center justify-center relative`}>
                                  <div className="text-4xl filter drop-shadow-md select-none transform hover:scale-110 transition-transform">
                                    {craft.craftIcon}
                                  </div>
                                  {/* Pattern Texture Overlay */}
                                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                                </div>

                                {/* Speaker Audio Icon */}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    showToast(`Playing audio details for ${craft.title}...`);
                                  }}
                                  className="absolute bottom-2 left-2 w-6 h-6 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#4A372D] shadow-xs hover:bg-white"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>

                                {/* Selected Checkmark Badge */}
                                {isSelected && (
                                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shadow-xs border border-white">
                                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                                  </div>
                                )}
                              </div>

                              {/* Content Info */}
                              <div className="p-3 flex-1 flex flex-col justify-between">
                                <div>
                                  <h3 className="text-[13.5px] font-extrabold text-[#1A1A1A] leading-tight mb-1">
                                    {craft.title}
                                  </h3>
                                  <p className="text-[10.5px] text-[#7A685F] leading-tight line-clamp-2">
                                    {craft.subtitle}
                                  </p>
                                </div>
                                <div className="mt-2.5">
                                  <span
                                    className={`text-[11px] font-bold block ${
                                      isSelected ? 'text-[#8C3A16]' : 'text-[#8C7368]'
                                    }`}
                                  >
                                    {isSelected ? 'Selected' : 'Tap to choose'}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Full-width Other Unique Crafts Card */}
                      <div className="w-full p-3 rounded-2xl bg-white border border-[#EADFD6] flex items-center justify-between gap-3 shadow-2xs hover:border-[#CBB7AA] transition-all cursor-pointer mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-amber-700 via-orange-600 to-yellow-500 flex items-center justify-center text-2xl shadow-xs shrink-0">
                            🏮
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h3 className="text-sm font-extrabold text-[#1A1A1A]">
                                Other Unique Crafts
                              </h3>
                            </div>
                            <p className="text-[11px] text-[#7A685F] leading-tight mt-0.5">
                              Paper mache, glasswork, horn craft, lacquer
                            </p>
                            <span className="text-[11px] font-bold text-[#8C7368] block mt-1">
                              Tap to browse more
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            showToast('Playing audio description for Other Unique Crafts...');
                          }}
                          className="w-7 h-7 rounded-full bg-[#FAF3EE] flex items-center justify-center text-[#7A685F] hover:text-[#8C3A16]"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="p-5 pt-2 border-t border-[#F0E6DE] bg-[#FDFBF9]">
                      <button
                        onClick={() => setActiveScreenIndex(6)}
                        className="w-full py-3.5 bg-[#E66B38] hover:bg-[#D55C2A] text-white rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        <span>Continue</span>
                      </button>
                      <p className="text-center text-[11.5px] text-[#7A685F] mt-2">
                        You can change or add secondary craft skills anytime.
                      </p>
                    </div>
                  </div>
                )}

                {/* 8. SCREEN 6: PHOTO */}
                {activeScreenIndex === 6 && (
                  <div className="flex-1 flex flex-col p-5 overflow-y-auto">
                    <div className="flex items-center justify-between mb-4">
                      <button onClick={() => setActiveScreenIndex(5)} className="p-1 text-[#4A3228] hover:bg-[#F3E7DF] rounded-lg">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <span className="text-xs font-bold text-[#A84318]">Step 6 / 7</span>
                    </div>

                    <div className="text-center mb-5">
                      <h2 className="text-lg font-black text-[#2D2421]">कार्यशाला की फोटो</h2>
                      <p className="text-xs text-[#6B5A51]">Upload artisan profile or workshop picture</p>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="w-32 h-32 rounded-3xl bg-[#F3E7DF] border-2 border-dashed border-[#A84318] flex flex-col items-center justify-center p-4 text-[#A84318] mb-4">
                        <Camera className="w-10 h-10 mb-1" />
                        <span className="text-[10px] font-bold">Upload Photo</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveScreenIndex(7)}
                      className="w-full py-3 bg-[#A84318] text-white rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Preview Profile →</span>
                    </button>
                  </div>
                )}

                {/* 9. SCREEN 7: PROFILE PREVIEW (Exact 1:1 Match to ar-AI Profile Generated approval and create my account.png) */}
                {activeScreenIndex === 7 && (
                  <div className="flex-1 flex flex-col bg-[#FDFBF9] overflow-y-auto">
                    {/* Top Bar */}
                    <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                      <button onClick={() => setActiveScreenIndex(6)} className="p-1 text-[#221C19] hover:bg-[#F3E7DF] rounded-lg">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <div className="px-3 py-1 bg-[#E8F5E9] rounded-full flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                        <span className="text-xs font-bold text-[#2E7D32]">Step 5 of 5 • Artisan Setup</span>
                      </div>
                      <div className="px-2.5 py-1 bg-white border border-[#E5D5CB] rounded-full text-xs font-semibold text-[#4A372D] flex items-center gap-1">
                        <span>English</span>
                        <span className="text-[10px]">▼</span>
                      </div>
                    </div>

                    <div className="px-5 py-2 flex flex-col text-left flex-1">
                      {/* Voice-Crafted Badge */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FCEEE6] rounded-full w-fit mb-2">
                        <Users className="w-3.5 h-3.5 text-[#8C3A16]" />
                        <span className="text-[10.5px] font-bold text-[#8C3A16] uppercase tracking-wider">
                          VOICE-CRAFTED
                        </span>
                      </div>

                      {/* Headings */}
                      <h1 className="text-2xl font-black text-[#1A1A1A] tracking-tight mb-1">
                        Your Profile
                      </h1>
                      <p className="text-[13px] text-[#6B584E] leading-snug mb-4">
                        We generated this from your voice. Check if everything looks accurate.
                      </p>

                      {/* Voice Note Recorded Bar */}
                      <div className="w-full p-3 rounded-2xl bg-[#FDF2EC] border border-[#F3DFD5] flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                            className="w-10 h-10 rounded-full bg-[#9C3C18] text-white flex items-center justify-center shadow-xs cursor-pointer"
                          >
                            {isPlayingAudio ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                          </button>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-bold text-[#1A1A1A]">Voice Note Recorded</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                            </div>
                            <span className="text-[11px] text-[#7A685F]">0:18 • Original Audio Input</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5 text-[#A84318]">
                          <span className="w-1 h-3 bg-[#A84318] rounded-full animate-pulse" />
                          <span className="w-1 h-5 bg-[#A84318] rounded-full" />
                          <span className="w-1 h-2 bg-[#A84318] rounded-full" />
                          <span className="w-1 h-6 bg-[#A84318] rounded-full animate-pulse" />
                          <span className="w-1 h-4 bg-[#A84318] rounded-full" />
                        </div>
                      </div>

                      {/* Artisan Profile Card */}
                      <div className="w-full bg-white rounded-3xl p-4 border border-[#EADFD6] shadow-xs mb-3 space-y-3.5">
                        {/* Header: Avatar, Name, Verified, Location, Craft */}
                        <div className="flex items-start gap-3">
                          <div className="relative">
                            <div className="w-14 h-14 rounded-2xl bg-[#F4E5DC] border border-[#E5D5CB] flex items-center justify-center text-[#8C5338] font-bold text-xl overflow-hidden">
                              <Palette className="w-8 h-8 text-[#9C3C18]" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#2E7D32] rounded-full flex items-center justify-center text-white border-2 border-white">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <h3 className="text-base font-black text-[#1A1A1A] truncate">{artisanName}</h3>
                              <span className="px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-[10.5px] font-bold border border-[#C8E6C9]">
                                Verified
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-[11.5px] text-[#6B584E] mb-1.5">
                              <MapPin className="w-3 h-3 text-[#8C5338]" />
                              <span>Barabanki, Uttar Pradesh</span>
                            </div>
                            <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FCEEE6] rounded-full text-[11px] font-bold text-[#8C3A16]">
                              <span>🏺</span>
                              <span>Bamboo & Cane Craft</span>
                            </div>
                          </div>
                        </div>

                        {/* Experience Row */}
                        <div className="pt-2 border-t border-[#F0E5DE] flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#FAF0E8] flex items-center justify-center text-[#8C4421]">
                            <Medal className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[11px] text-[#7A685F] block">Experience</span>
                            <span className="text-sm font-extrabold text-[#221C19]">10+ Years</span>
                          </div>
                        </div>

                        {/* Key Specialties */}
                        <div>
                          <span className="text-[10.5px] font-bold text-[#5A483E] tracking-wider uppercase block mb-2">
                            KEY SPECIALTIES
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {[
                              { label: 'Fruit Baskets', icon: '🍃' },
                              { label: 'Decorative Planters', icon: '🪴' },
                              { label: 'Fine Lattice Weaving', icon: '🥢' },
                            ].map((spec) => (
                              <div
                                key={spec.label}
                                className="px-2.5 py-1 rounded-xl bg-[#FDF4EE] border border-[#EADCD2] text-[11.5px] font-bold text-[#4A3228] flex items-center gap-1"
                              >
                                <span>{spec.icon}</span>
                                <span>{spec.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bulk Production Ready Card */}
                        <div className="p-3 rounded-xl bg-[#FFF5EE] border border-[#F6E3D8] flex items-start gap-2.5">
                          <div className="p-1 rounded-lg bg-[#FBE7DB] text-[#C25828] mt-0.5">
                            <Package className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[#221C19] block mb-0.5">Bulk Production Ready</span>
                            <span className="text-[11px] text-[#6B584E] leading-tight block">
                              Capacity to supply 200–500 pieces monthly with regional cooperative support.
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* GI Directory Trust */}
                      <div className="flex items-center gap-1.5 text-[11.5px] text-[#5A483E] mb-2">
                        <ShieldCheck className="w-4 h-4 text-[#2E7D32] shrink-0" />
                        <span>Profile verified for the Open Craft Network & Government GI directory.</span>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="p-5 pt-2 border-t border-[#F0E6DE] bg-[#FDFBF9] space-y-2">
                      <button
                        onClick={() => {
                          showToast('🎉 Profile Created! Entering Artisan Home...');
                          setActiveScreenIndex(9); // Opens Home Screen directly!
                        }}
                        className="w-full py-3.5 bg-[#9C3C18] hover:bg-[#853213] text-white rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        <span>Create My Profile</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => setActiveScreenIndex(4)}
                        className="w-full py-3 bg-[#FBF0E9] border border-[#EADCD2] hover:bg-[#F3E7DF] text-[#4A372D] rounded-2xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        <Mic className="w-4 h-4 text-[#8C3A16]" />
                        <span>Edit with Voice</span>
                      </button>

                      <p className="text-center text-[11.5px] text-[#7A685F]">
                        You can update your craft details or add photos anytime.
                      </p>
                    </div>
                  </div>
                )}

                {/* 10. SCREEN 9: ARTISAN HOME DASHBOARD (Exact Match to Artisan Home section.png) */}
                {activeScreenIndex === 9 && (
                  <div className="flex-1 flex flex-col bg-[#FDFBF9] overflow-hidden relative">
                    {/* Top Bar */}
                    <div className="px-4 py-2.5 flex items-center justify-between border-b border-[#F0E6DE] bg-white/60">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#FFFBF9] border border-[#E5D5CB] flex items-center justify-center">
                          <span className="font-serif font-black text-[9px] text-[#7C3F24]">हुनर</span>
                        </div>
                        <span className="text-base font-extrabold text-[#7C3F24]">HunarSangam</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="px-2 py-0.5 bg-[#F3E7DF] border border-[#E5D5CB] rounded-full text-[11px] font-semibold text-[#4A372D] flex items-center gap-0.5">
                          <span>English</span>
                          <span className="text-[9px]">▼</span>
                        </div>

                        <div className="relative p-1.5 bg-[#FAF2EC] border border-[#E5D5CB] rounded-full text-[#4A372D]">
                          <Bell className="w-3.5 h-3.5" />
                          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#C53030]" />
                        </div>

                        <div className="relative w-7 h-7 rounded-full bg-[#EADFD6] border border-[#D5C4B8] flex items-center justify-center text-[#7C3F24]">
                          <User className="w-4 h-4" />
                          <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#2E7D32] ring-1 ring-white" />
                        </div>
                      </div>
                    </div>

                    {/* Scrollable Dashboard Body */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20">
                      {/* Good morning header */}
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h2 className="text-xl font-black text-[#221C19]">Good morning, {artisanName.split(' ')[0]}</h2>
                          <span className="text-lg">👋</span>
                        </div>
                        <p className="text-xs text-[#6B584E] font-medium">Ready to create something beautiful today?</p>
                      </div>

                      {/* AI Voice Command Bar */}
                      <div className="bg-[#FFFBF8] border border-[#EADFD6] rounded-2xl p-2 px-3 flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-2 text-xs text-[#7A685F]">
                          <Radio className="w-4 h-4 text-[#A84318] animate-pulse" />
                          <span>Tap to speak or ask Hunar Assistant...</span>
                        </div>
                        <button
                          onClick={() => showToast('🎙️ Voice Assistant listening...')}
                          className="w-8 h-8 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shrink-0 shadow-xs"
                        >
                          <Mic className="w-4 h-4" />
                        </button>
                      </div>

                      {/* 3 Metric Cards */}
                      <div className="grid grid-cols-3 gap-2">
                        {/* New Orders */}
                        <div className="bg-[#FBF4EE] border border-[#EADFD6] rounded-2xl p-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-[#4A372D] leading-tight">New<br />Orders</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C53030]" />
                          </div>
                          <span className="text-2xl font-black text-[#221C19] block mt-1">2</span>
                        </div>

                        {/* In Progress */}
                        <div className="bg-[#FBF4EE] border border-[#EADFD6] rounded-2xl p-2.5">
                          <span className="text-[11px] font-semibold text-[#4A372D] leading-tight block">In<br />Progress</span>
                          <span className="text-2xl font-black text-[#221C19] block mt-1">1</span>
                        </div>

                        {/* Completed */}
                        <div className="bg-[#FBF4EE] border border-[#EADFD6] rounded-2xl p-2.5">
                          <span className="text-[11px] font-semibold text-[#4A372D] leading-tight block">Completed</span>
                          <span className="text-2xl font-black text-[#221C19] block mt-1">28</span>
                        </div>
                      </div>

                      {/* Active Order Card (Needs Attention) */}
                      <div className="bg-[#FFFDFB] border border-[#EADFD6] rounded-2xl p-3.5 shadow-xs space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="bg-[#FDECE8] border border-[#F5C6BC] text-[#C53030] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" />
                            <span>Needs Attention • Due in 6 days</span>
                          </div>
                          <span className="text-[11px] font-semibold text-[#6B584E]">B2B Bulk</span>
                        </div>

                        <div>
                          <h3 className="text-sm font-extrabold text-[#221C19]">50 Handmade Bamboo Baskets</h3>
                          <div className="flex items-center gap-1 text-[11px] text-[#6B584E] mt-0.5">
                            <Building2 className="w-3.5 h-3.5" />
                            <span>FabIndia Sourcing Hub (B2B Buyer)</span>
                          </div>
                        </div>

                        {/* Progress */}
                        <div className="bg-[#FBF4EE] p-2.5 rounded-xl space-y-1.5">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-semibold text-[#4A372D]">Craft Production Progress</span>
                            <span className="font-bold text-[#A84318]">{bambooProgress} / 50 completed ({((bambooProgress / 50) * 100).toFixed(0)}%)</span>
                          </div>
                          <div className="w-full bg-[#E5D5CB] h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-[#8C3A16] h-full rounded-full transition-all duration-300"
                              style={{ width: `${(bambooProgress / 50) * 100}%` }}
                            />
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => setShowProgressModal(true)}
                            className="flex-1 py-2 border border-[#E5D5CB] bg-white rounded-xl text-xs font-bold text-[#4A372D] flex items-center justify-center gap-1.5 hover:bg-[#FAF5F0]"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                            <span>Update Progress</span>
                          </button>
                          <button
                            onClick={() => showToast('Opening Purchase Order #FB-89412 details...')}
                            className="flex-1 py-2 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1"
                          >
                            <span>View Order</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* My Products Section */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <h3 className="text-sm font-extrabold text-[#221C19]">My Products</h3>
                            <span className="text-xs font-semibold text-[#7A685F]">(6)</span>
                          </div>
                          <button
                            onClick={() => {
                              setActiveScreenIndex(11);
                              showToast('Starting Camera-First Product Capture Flow');
                            }}
                            className="text-xs font-bold text-[#A84318] flex items-center gap-0.5 hover:underline cursor-pointer"
                          >
                            <Plus className="w-3 h-3" /> Add Product
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {/* Product 1 */}
                          <div className="bg-white border border-[#EADFD6] rounded-2xl overflow-hidden shadow-xs">
                            <div className="h-24 bg-[#F5EBE1] relative flex items-center justify-center">
                              <ShoppingBag className="w-8 h-8 text-[#B85324]" />
                              <span className="absolute top-1.5 left-1.5 bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                                Published
                              </span>
                            </div>
                            <div className="p-2 space-y-1">
                              <h4 className="text-xs font-extrabold text-[#221C19] truncate">Woven Fruit Basket</h4>
                              <div className="text-[11px]">
                                <span className="font-extrabold text-[#A84318]">₹340</span>
                                <span className="text-[#7A685F]"> • 42 Orders</span>
                              </div>
                              <span className="inline-block text-[9.5px] font-semibold text-[#6B584E] bg-[#FBF4EE] px-1.5 py-0.5 rounded">
                                Wholesale MOQ: 25
                              </span>
                            </div>
                          </div>

                          {/* Product 2 */}
                          <div className="bg-white border border-[#EADFD6] rounded-2xl overflow-hidden shadow-xs">
                            <div className="h-24 bg-[#F5EBE1] relative flex items-center justify-center">
                              <Package className="w-8 h-8 text-[#B85324]" />
                              <span className="absolute top-1.5 left-1.5 bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                                Published
                              </span>
                            </div>
                            <div className="p-2 space-y-1">
                              <h4 className="text-xs font-extrabold text-[#221C19] truncate">Cane Indoor Planter</h4>
                              <div className="text-[11px]">
                                <span className="font-extrabold text-[#A84318]">₹520</span>
                                <span className="text-[#7A685F]"> • 18 Orders</span>
                              </div>
                              <span className="inline-block text-[9.5px] font-semibold text-[#6B584E] bg-[#FBF4EE] px-1.5 py-0.5 rounded">
                                Wholesale MOQ: 15
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Artisan Score & Reliability */}
                      <div className="bg-[#FDF6F0] border border-[#EADFD6] rounded-2xl p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#221C19]">
                            <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                            <span>Artisan Score &amp; Reliability</span>
                          </div>
                          <span className="text-[10px] font-bold bg-[#EAE3DC] text-[#5D483E] px-2 py-0.5 rounded-md">
                            Top Tier
                          </span>
                        </div>

                        <div className="grid grid-cols-3 divide-x divide-[#E5D5CB] pt-1 text-center">
                          <div>
                            <span className="text-sm font-extrabold text-[#221C19] block">96%</span>
                            <span className="text-[9.5px] text-[#7A685F]">On-Time Delivery</span>
                          </div>
                          <div>
                            <span className="text-sm font-extrabold text-[#221C19] block">★ 4.9</span>
                            <span className="text-[9.5px] text-[#7A685F]">34 reviews</span>
                          </div>
                          <div>
                            <span className="text-xs font-extrabold text-[#A84318] block">Artisan</span>
                            <span className="text-[9.5px] text-[#7A685F]">Barabanki Cluster</span>
                          </div>
                        </div>
                      </div>

                      {/* Opportunities for you */}
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-extrabold text-[#221C19]">🔥 Opportunities for you</h3>
                          <button
                            onClick={() => showToast('Opening all 12 B2B Leads...')}
                            className="text-xs font-bold text-[#8C3A16] hover:underline"
                          >
                            View All (12)&gt;
                          </button>
                        </div>

                        {/* Opportunity 1 */}
                        <div className="bg-white border border-[#EADFD6] rounded-2xl p-3 shadow-xs space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="bg-[#FFF3E0] border border-[#FFE0B2] text-[#E65100] text-[10px] font-bold px-2 py-0.5 rounded-md">
                              Bulk B2B Order
                            </span>
                            <span className="text-base font-black text-[#221C19]">₹45,000</span>
                          </div>

                          <div>
                            <h4 className="text-xs font-extrabold text-[#221C19]">Bulk Order: 100 Terracotta Planters</h4>
                            <p className="text-[11px] text-[#7A685F] flex items-center gap-1 mt-0.5">
                              <Store className="w-3 h-3" /> FabIndia Curated Home
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-1">
                            <span className="text-[10px] text-[#7A685F] flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> Estimated: 10–14 days
                            </span>
                            <button
                              onClick={() => showToast('Submitted proposal for 100 Terracotta Planters!')}
                              className="bg-[#8C3A16] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg"
                            >
                              View Opportunity
                            </button>
                          </div>
                        </div>

                        {/* Opportunity 2 */}
                        <div className="bg-white border border-[#EADFD6] rounded-2xl p-3 shadow-xs space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                              <Users className="w-3 h-3" /> Guild Collaboration
                            </span>
                            <span className="text-[10px] font-semibold text-[#C53030]">Deadline: 20 Oct</span>
                          </div>

                          <div>
                            <h4 className="text-xs font-extrabold text-[#221C19] leading-snug">
                              Collaboration Request:<br />Handcrafted Brass &amp; Clay Lamps
                            </h4>
                            <p className="text-[11px] text-[#6B584E] mt-0.5">
                              Looking for 1 Potter partner by Kishore Potter Guild
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-1">
                            <span className="text-[11px] font-semibold text-[#4A372D]">Shared Payout • 50/50</span>
                            <button
                              onClick={() => showToast('Joined Brass & Clay Lamp Collaboration!')}
                              className="bg-[#F3E7DF] text-[#8C3A16] text-[11px] font-bold px-3 py-1.5 rounded-lg"
                            >
                              Join Collaboration
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Mic Button */}
                    <button
                      onClick={() => showToast('🎙️ Listening to artisan voice command...')}
                      className="absolute right-4 bottom-16 w-12 h-12 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all z-20"
                    >
                      <Mic className="w-6 h-6" />
                    </button>

                    {/* Bottom Navigation Bar (5 tabs) */}
                    <div className="bg-white border-t border-[#EADFD6] py-1.5 px-3 flex items-center justify-around z-10">
                      {[
                        { label: 'Home', icon: Store, tabIdx: 0 },
                        { label: 'Products', icon: Palette, tabIdx: 1 },
                        { label: 'Orders', icon: FileText, tabIdx: 2 },
                        { label: 'Collaborate', icon: Users, tabIdx: 3 },
                        { label: 'Profile', icon: User, tabIdx: 4 },
                      ].map((tab) => {
                        const IconComp = tab.icon;
                        const isSel = homeBottomTab === tab.tabIdx;
                        return (
                          <button
                            key={tab.label}
                            onClick={() => {
                              setHomeBottomTab(tab.tabIdx);
                              if (tab.tabIdx === 1) {
                                setActiveScreenIndex(10);
                              } else if (tab.tabIdx === 4) {
                                setActiveScreenIndex(20);
                              } else {
                                showToast(`Switched to ${tab.label} tab`);
                              }
                            }}
                            className={`flex flex-col items-center px-2 py-1 rounded-xl transition-all ${
                              isSel ? 'bg-[#F8E5D8] text-[#8C3A16] font-extrabold' : 'text-[#7A685F]'
                            }`}
                          >
                            <IconComp className="w-4 h-4 mb-0.5" />
                            <span className="text-[9.5px]">{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 11. SCREEN 10: ARTISAN PRODUCT CATALOG (matching ar-Artisan Product Catalog.png) */}
                {activeScreenIndex === 10 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden relative">
                    {/* Top App Bar with Branding, Language, Notification & Avatar */}
                    <div className="px-3.5 pt-1.5 pb-2 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0 z-10">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-md bg-[#8C3A16] text-white flex items-center justify-center font-black text-[9px] shadow-xs">
                          हुनर
                        </div>
                        <span className="text-sm font-extrabold text-[#7C3F24] tracking-tight">HunarSangam</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Language Selector */}
                        <div className="flex items-center gap-1 bg-white border border-[#E5D5CB] rounded-full px-2 py-0.5 shadow-2xs">
                          <span className="text-[11px] font-bold text-[#4A3228]">English</span>
                          <ChevronsUpDown className="w-2.5 h-2.5 text-[#8A756C]" />
                        </div>

                        {/* Notification Bell */}
                        <div className="relative p-1 rounded-full bg-white border border-[#E5D5CB] text-[#4A3228]">
                          <Bell className="w-3.5 h-3.5" />
                          <span className="absolute 0 top-0.5 right-0.5 w-1.5 h-1.5 bg-rose-500 rounded-full" />
                        </div>

                        {/* User Avatar with Online Dot */}
                        <div className="relative w-6 h-6 rounded-full bg-[#E5D5CB] border border-[#8C3A16]/30 overflow-hidden flex items-center justify-center">
                          <span className="text-[10px] font-bold text-[#8C3A16]">RK</span>
                          <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-emerald-500 rounded-full ring-1 ring-white" />
                        </div>
                      </div>
                    </div>

                    {/* Scrollable Catalog Content */}
                    <div className="flex-1 overflow-y-auto p-3 space-y-3 pb-16">
                      {/* Cluster & Profile Overview Card */}
                      <div className="bg-white rounded-2xl p-3 border border-[#EADFD6] shadow-2xs">
                        <div className="flex items-center justify-between mb-1.5">
                          <h2 className="text-base font-extrabold text-[#2D2421]">My Products</h2>
                          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            Verified Artisan
                          </span>
                        </div>

                        <p className="text-[11px] font-semibold text-[#8C3A16] flex items-center gap-1 mb-1">
                          <CheckCircle2 className="w-3 h-3 text-[#8C3A16]" />
                          Assam Cane &amp; Bamboo Cluster
                        </p>

                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 mb-2.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Ramu Kumar • Workshop Live Status</span>
                        </div>

                        {/* 4 Metric Stats Grid (2x2) */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-[#FAF4F0] rounded-xl p-2 border border-[#EADFD6]/80 flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-[#F0DDD0] flex items-center justify-center text-[#8C3A16]">
                              <Package className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-black text-[#2D2421]">8 Crafts</p>
                              <p className="text-[9px] font-semibold text-[#7A685F]">Total Published</p>
                            </div>
                          </div>

                          <div className="bg-[#EDF7ED] rounded-xl p-2 border border-[#C8E6C9] flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-[#C8E6C9] flex items-center justify-center text-emerald-800">
                              <Store className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-black text-emerald-900">5 Crafts</p>
                              <p className="text-[9px] font-semibold text-emerald-700">ONDC Live</p>
                            </div>
                          </div>

                          <div className="bg-[#F6F8FA] rounded-xl p-2 border border-[#DFE3E8] flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-[#E1E6EB] flex items-center justify-center text-slate-700">
                              <Eye className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-black text-[#2D2421]">1,420</p>
                              <p className="text-[9px] font-semibold text-[#7A685F]">Buyer Views</p>
                            </div>
                          </div>

                          <div className="bg-[#FFF9E6] rounded-xl p-2 border border-[#FFE082] flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-[#FFE082]/70 flex items-center justify-center text-amber-900">
                              <Truck className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-black text-amber-950">18</p>
                              <p className="text-[9px] font-semibold text-amber-800">Bulk Inquiries</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Add Product Button (Voice / Tap) - matching ar--p1 */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(11);
                          showToast('Opening Product Photography camera...');
                        }}
                        className="w-full bg-linear-to-r from-[#FF5722] to-[#E64A19] hover:from-[#F4511E] hover:to-[#D84315] active:scale-[0.98] transition-all text-white rounded-full py-3 px-4 flex items-center justify-center gap-2 shadow-md"
                      >
                        <span className="text-xs font-black">Add products by clicking</span>
                        <div className="w-5 h-5 rounded-full bg-white text-[#E64A19] flex items-center justify-center">
                          <Mic className="w-3 h-3" />
                        </div>
                      </button>

                      {/* Search / Voice Bar */}
                      <div className="bg-white rounded-2xl p-1.5 border border-[#EADFD6] flex items-center gap-2 shadow-2xs">
                        <div className="w-7 h-7 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shrink-0">
                          <Mic className="w-3.5 h-3.5" />
                        </div>
                        <input
                          type="text"
                          placeholder="Tap to speak or search crafts..."
                          className="flex-1 bg-transparent text-[11px] text-[#2D2421] placeholder-[#9C897E] outline-none font-medium"
                        />
                        <button
                          onClick={() => showToast('Filtered products')}
                          className="p-1.5 rounded-xl hover:bg-[#F5ECE5] text-[#8C3A16]"
                        >
                          <SlidersHorizontal className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Filter Chips Horizontal Row */}
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
                        {[
                          'All (8)',
                          'Published (6)',
                          '🟢 ONDC Synced (5)',
                          'Drafts (2)',
                        ].map((chip, idx) => {
                          const isSel = selectedProductFilter === idx;
                          return (
                            <button
                              key={chip}
                              onClick={() => {
                                setSelectedProductFilter(idx);
                                showToast(`Filter applied: ${chip}`);
                              }}
                              className={`px-3 py-1 rounded-full text-[10.5px] font-bold whitespace-nowrap transition-all ${
                                isSel
                                  ? 'bg-[#8C3A16] text-white shadow-2xs'
                                  : 'bg-white text-[#7A685F] border border-[#EADFD6] hover:bg-[#F8EFE9]'
                              }`}
                            >
                              {chip}
                            </button>
                          );
                        })}
                      </div>

                      {/* Product Card 1: Woven Bamboo Fruit Basket */}
                      <div className="bg-white rounded-2xl border border-[#EADFD6] overflow-hidden shadow-2xs">
                        <div className="relative h-36 bg-linear-to-r from-[#8B5A2B] to-[#D2B48C] overflow-hidden flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                            alt="Bamboo Fruit Basket"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Active • ONDC Ready
                          </div>
                          <button
                            onClick={() => showToast('🔊 Playing audio description: "Handmade Bamboo Fruit Basket..."')}
                            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-xs text-white flex items-center justify-center hover:bg-black/80"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-semibold px-2 py-0.5 rounded-full">
                            Size: 12.4" × 6.2"
                          </div>
                        </div>

                        <div className="p-3">
                          <h3 className="text-xs font-black text-[#2D2421] leading-tight mb-0.5">
                            Handmade Woven Bamboo Fruit Basket
                          </h3>
                          <p className="text-[10px] text-[#8A756C] mb-2 font-medium">
                            GI Tag: Assam Cane &amp; Bamboo Work (GI-429)
                          </p>

                          <div className="flex items-baseline justify-between mb-2">
                            <div>
                              <span className="text-sm font-black text-[#8C3A16]">₹280</span>
                              <span className="text-[10px] text-[#7A685F] font-medium"> / piece</span>
                            </div>
                            <span className="text-[10px] font-bold text-[#6B5A51] bg-[#F4ECE5] px-2 py-0.5 rounded-md">
                              Wholesale MOQ: 20 pcs
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-[#7A685F] border-t border-[#F0E6DE] pt-2 mb-2.5">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3 text-[#8C3A16]" /> 480 Views
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3 text-amber-700" /> 8 Inquiries
                            </span>
                            <span className="flex items-center gap-1 text-emerald-800 font-bold">
                              <Package className="w-3 h-3" /> 140 in Stock
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => showToast('🎙️ Speak changes for "Handmade Woven Bamboo Fruit Basket"')}
                              className="flex-1 py-1.5 bg-[#FAF3EE] hover:bg-[#F2E5DC] text-[#8C3A16] rounded-xl text-[10.5px] font-extrabold flex items-center justify-center gap-1 border border-[#E8DDD5]"
                            >
                              <Mic className="w-3 h-3" /> Edit (Voice)
                            </button>
                            <button
                              onClick={() => showToast('Opening details for Fruit Basket')}
                              className="px-3 py-1.5 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-xl text-[10.5px] font-extrabold"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Product Card 2: Assam Golden Cane Planter Basket */}
                      <div className="bg-white rounded-2xl border border-[#EADFD6] overflow-hidden shadow-2xs">
                        <div className="relative h-36 bg-linear-to-r from-[#A0522D] to-[#E9967A] overflow-hidden flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=80"
                            alt="Cane Planter Basket"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Active • ONDC Ready
                          </div>
                          <button
                            onClick={() => showToast('🔊 Playing audio description: "Assam Golden Cane Planter Basket..."')}
                            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-xs text-white flex items-center justify-center hover:bg-black/80"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-semibold px-2 py-0.5 rounded-full">
                            Size: 14" × 10"
                          </div>
                        </div>

                        <div className="p-3">
                          <h3 className="text-xs font-black text-[#2D2421] leading-tight mb-0.5">
                            Assam Golden Cane Planter Basket
                          </h3>
                          <p className="text-[10px] text-[#8A756C] mb-2 font-medium">
                            Natural Cane Weave • Water Resistant Finish
                          </p>

                          <div className="flex items-baseline justify-between mb-2">
                            <div>
                              <span className="text-sm font-black text-[#8C3A16]">₹420</span>
                              <span className="text-[10px] text-[#7A685F] font-medium"> / piece</span>
                            </div>
                            <span className="text-[10px] font-bold text-[#6B5A51] bg-[#F4ECE5] px-2 py-0.5 rounded-md">
                              Wholesale MOQ: 15 pcs
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-[#7A685F] border-t border-[#F0E6DE] pt-2 mb-2.5">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3 text-[#8C3A16]" /> 310 Views
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3 text-amber-700" /> 4 Inquiries
                            </span>
                            <span className="flex items-center gap-1 text-emerald-800 font-bold">
                              <Package className="w-3 h-3" /> 65 in Stock
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => showToast('🎙️ Speak changes for "Assam Golden Cane Planter Basket"')}
                              className="flex-1 py-1.5 bg-[#FAF3EE] hover:bg-[#F2E5DC] text-[#8C3A16] rounded-xl text-[10.5px] font-extrabold flex items-center justify-center gap-1 border border-[#E8DDD5]"
                            >
                              <Mic className="w-3 h-3" /> Edit (Voice)
                            </button>
                            <button
                              onClick={() => showToast('Opening details for Planter Basket')}
                              className="px-3 py-1.5 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-xl text-[10.5px] font-extrabold"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Product Card 3: Hand-plaited Bamboo Storage Box */}
                      <div className="bg-white rounded-2xl border border-[#EADFD6] overflow-hidden shadow-2xs">
                        <div className="relative h-36 bg-linear-to-r from-[#5C4033] to-[#8B4513] overflow-hidden flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&auto=format&fit=crop&q=80"
                            alt="Bamboo Storage Box"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Active • HunarSangam Live
                          </div>
                          <button
                            onClick={() => showToast('🔊 Playing audio description: "Hand-plaited Bamboo Storage Box..."')}
                            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-xs text-white flex items-center justify-center hover:bg-black/80"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-semibold px-2 py-0.5 rounded-full">
                            Size: 10" × 8"
                          </div>
                        </div>

                        <div className="p-3">
                          <h3 className="text-xs font-black text-[#2D2421] leading-tight mb-0.5">
                            Hand-plaited Bamboo Storage Box with Lid
                          </h3>
                          <p className="text-[10px] text-[#8A756C] mb-2 font-medium">
                            Durable Storage • Naturally Treated Cane
                          </p>

                          <div className="flex items-baseline justify-between mb-2">
                            <div>
                              <span className="text-sm font-black text-[#8C3A16]">₹350</span>
                              <span className="text-[10px] text-[#7A685F] font-medium"> / piece</span>
                            </div>
                            <span className="text-[10px] font-bold text-[#6B5A51] bg-[#F4ECE5] px-2 py-0.5 rounded-md">
                              Wholesale MOQ: 25 pcs
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-[#7A685F] border-t border-[#F0E6DE] pt-2 mb-2.5">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3 text-[#8C3A16]" /> 290 Views
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3 text-amber-700" /> 3 Inquiries
                            </span>
                            <span className="flex items-center gap-1 text-emerald-800 font-bold">
                              <Package className="w-3 h-3" /> 90 in Stock
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => showToast('🎙️ Speak changes for "Bamboo Storage Box"')}
                              className="flex-1 py-1.5 bg-[#FAF3EE] hover:bg-[#F2E5DC] text-[#8C3A16] rounded-xl text-[10.5px] font-extrabold flex items-center justify-center gap-1 border border-[#E8DDD5]"
                            >
                              <Mic className="w-3 h-3" /> Edit (Voice)
                            </button>
                            <button
                              onClick={() => showToast('Opening details for Storage Box')}
                              className="px-3 py-1.5 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-xl text-[10.5px] font-extrabold"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Product Card 4: Miniature Bamboo Tea Coasters (Draft) */}
                      <div className="bg-white rounded-2xl border border-[#EADFD6] overflow-hidden shadow-2xs">
                        <div className="relative h-36 bg-linear-to-r from-[#708090] to-[#D3D3D3] overflow-hidden flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80"
                            alt="Bamboo Tea Coasters"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="absolute top-2 left-2 bg-neutral-800/80 backdrop-blur-xs text-amber-300 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" />
                            Draft (Need Photo Enhancer)
                          </div>
                          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-semibold px-2 py-0.5 rounded-full">
                            Size: 4" dia
                          </div>
                        </div>

                        <div className="p-3">
                          <h3 className="text-xs font-black text-[#2D2421] leading-tight mb-0.5">
                            Miniature Bamboo Tea Coaster Set (6 pcs)
                          </h3>
                          <p className="text-[10px] text-amber-800 font-medium mb-2">
                            Listing incomplete • Add clear white studio background
                          </p>

                          <div className="flex items-baseline justify-between mb-2">
                            <div>
                              <span className="text-sm font-black text-[#8C3A16]">₹180</span>
                              <span className="text-[10px] text-[#7A685F] font-medium"> / set</span>
                            </div>
                            <span className="text-[10px] font-bold text-[#6B5A51] bg-[#F4ECE5] px-2 py-0.5 rounded-md">
                              Wholesale MOQ: 50 sets
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => showToast('✨ AI Photo Background Remover applied!')}
                              className="flex-1 py-2 bg-[#E87338] hover:bg-[#D46026] text-white rounded-xl text-[10.5px] font-extrabold flex items-center justify-center gap-1.5 shadow-2xs"
                            >
                              <Sparkles className="w-3.5 h-3.5" /> Enhance Photo with AI
                            </button>
                            <button
                              onClick={() => showToast('🎙️ Speak changes for "Tea Coasters"')}
                              className="p-2 bg-[#FAF3EE] hover:bg-[#F2E5DC] text-[#8C3A16] rounded-xl text-[10.5px] font-extrabold border border-[#E8DDD5]"
                            >
                              <Mic className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Add Product Button */}
                    <button
                      onClick={() => {
                        setActiveScreenIndex(11);
                        showToast('Starting Camera-First Product Capture Flow');
                      }}
                      className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#8C3A16] hover:bg-[#783011] text-white px-4 py-2.5 rounded-full text-xs font-black shadow-lg flex items-center gap-2 z-20 active:scale-95 transition-all whitespace-nowrap"
                    >
                      <Mic className="w-4 h-4" />
                      <span>Add Product (Voice-First)</span>
                    </button>

                    {/* Bottom Navigation Bar (5 tabs) */}
                    <div className="bg-white border-t border-[#EADFD6] py-1.5 px-3 flex items-center justify-around z-10 shrink-0">
                      {[
                        { label: 'Home', icon: Store, tabIdx: 0, screenIdx: 9 },
                        { label: 'Products', icon: Palette, tabIdx: 1, screenIdx: 10 },
                        { label: 'Orders', icon: FileText, tabIdx: 2, screenIdx: 10 },
                        { label: 'Collaborate', icon: Users, tabIdx: 3, screenIdx: 10 },
                        { label: 'Profile', icon: User, tabIdx: 4, screenIdx: 20 },
                      ].map((tab) => {
                        const IconComp = tab.icon;
                        const isSel = tab.tabIdx === 1;
                        return (
                          <button
                            key={tab.label}
                            onClick={() => {
                              if (tab.tabIdx === 0) {
                                setActiveScreenIndex(9);
                                setHomeBottomTab(0);
                              } else if (tab.tabIdx === 4) {
                                setActiveScreenIndex(20);
                              } else {
                                showToast(`Switched to ${tab.label} tab`);
                              }
                            }}
                            className={`flex flex-col items-center px-2 py-1 rounded-xl transition-all ${
                              isSel ? 'bg-[#F8E5D8] text-[#8C3A16] font-extrabold' : 'text-[#7A685F]'
                            }`}
                          >
                            <IconComp className="w-4 h-4 mb-0.5" />
                            <span className="text-[9.5px]">{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 12. SCREEN 11: PRODUCT PHOTOGRAPHY / CAMERA OPEN (matching p2-camer open.png) */}
                {activeScreenIndex === 11 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header matching p2-camer open.png */}
                    <div className="px-4 py-3 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(10)}
                        className="p-1.5 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <div className="text-center">
                        <span className="text-[10px] font-black text-[#D97706] tracking-wider uppercase block">
                          STEP 2 OF 3
                        </span>
                        <h2 className="text-xs font-black text-[#2D2421]">Product Photography</h2>
                      </div>
                      <div className="w-6" />
                    </div>

                    <div className="flex-1 flex flex-col p-4 justify-between overflow-hidden">
                      {/* Viewfinder Canvas Area (Gray Placeholder with frame corners) */}
                      <div className="flex-1 rounded-3xl bg-[#D6D3D1] relative flex items-center justify-center overflow-hidden min-h-[160px] max-h-[260px] shadow-inner">
                        {/* Viewfinder brackets */}
                        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-white/70" />
                        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white/70" />
                        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-white/70" />
                        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-white/70" />

                        <div className="flex flex-col items-center gap-1 text-[#78716C]">
                          <Camera className="w-10 h-10 stroke-[1.5]" />
                          <span className="text-xs font-bold">Camera Feed Preview</span>
                        </div>
                      </div>

                      {/* Artisan Studio Tips Card (matching p2-camer open.png) */}
                      <div className="my-3 bg-[#FFF7ED] rounded-2xl p-3 border border-[#FFEDD5]">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="text-xs">💡</span>
                          <span className="text-[10.5px] font-black text-[#9A3412] tracking-wide">
                            ARTISAN STUDIO TIPS
                          </span>
                        </div>
                        <div className="h-px bg-[#FED7AA] w-full mb-2" />

                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-white rounded-xl p-2 border border-[#FED7AA] flex flex-col items-center text-center">
                            <span className="text-base mb-0.5">☀️</span>
                            <span className="text-[10px] font-black text-[#2D2421]">Soft Sun</span>
                            <span className="text-[8.5px] text-[#7A685F] leading-tight">No harsh flash glare</span>
                          </div>

                          <div className="bg-white rounded-xl p-2 border border-[#FED7AA] flex flex-col items-center text-center">
                            <span className="text-base mb-0.5">🖼️</span>
                            <span className="text-[10px] font-black text-[#2D2421]">Clean Base</span>
                            <span className="text-[8.5px] text-[#7A685F] leading-tight">Bare wood or cloth</span>
                          </div>

                          <div className="bg-white rounded-xl p-2 border border-[#FED7AA] flex flex-col items-center text-center">
                            <span className="text-base mb-0.5">🪙</span>
                            <span className="text-[10px] font-black text-[#2D2421]">₹10 Coin</span>
                            <span className="text-[8.5px] text-[#7A685F] leading-tight">Shows true height</span>
                          </div>
                        </div>
                      </div>

                      {/* Shutter Button (matching p2-camer open.png) */}
                      <div className="flex justify-center items-center pb-1">
                        <button
                          onClick={() => {
                            setActiveScreenIndex(13);
                            showToast('Photo captured with ₹10 coin! Analyzing dimensions...');
                          }}
                          className="w-18 h-18 rounded-full bg-[#F0DDD0] border-4 border-[#E2C2AE] flex items-center justify-center shadow-lg active:scale-95 transition-all hover:bg-[#E8D1C2]"
                        >
                          <div className="w-13 h-13 rounded-full bg-[#9A3412] hover:bg-[#852C0E] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                            Click
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 13. SCREEN 12: CAMERA OPEN / VIEWFINDER (matching p2-camer open.png) */}
                {activeScreenIndex === 12 && (
                  <div className="flex-1 flex flex-col h-full bg-black overflow-hidden relative text-white">
                    {/* Camera Feed Mock */}
                    <div className="absolute inset-0">
                      <img
                        src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                        alt="Viewfinder"
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>

                    {/* Top Overlay Controls */}
                    <div className="relative z-10 px-4 py-3 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent">
                      <button
                        onClick={() => setActiveScreenIndex(11)}
                        className="p-1.5 rounded-full bg-black/40 text-white"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <div className="bg-black/50 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-bold text-emerald-400 border border-emerald-500/40 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        AI Object &amp; Coin Scale Active
                      </div>
                      <button className="p-1.5 rounded-full bg-black/40 text-white">
                        <Sparkles className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Viewfinder Target Bounding Box */}
                    <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6">
                      <div className="relative w-56 h-56 border-2 border-dashed border-emerald-400 rounded-3xl flex items-center justify-center">
                        <div className="absolute top-2 left-2 bg-emerald-500 text-black text-[9px] font-black px-1.5 py-0.5 rounded-md">
                          Craft Detected (98%)
                        </div>
                        {/* Coin Lock Indicator */}
                        <div className="absolute bottom-3 right-3 border-2 border-amber-300 bg-amber-400/30 rounded-full px-2 py-0.5 text-[9px] font-bold text-amber-200">
                          ₹10 Scale Locked ✓
                        </div>
                      </div>
                      <p className="mt-4 text-[11px] font-bold text-white/90 bg-black/60 px-3 py-1 rounded-full">
                        ✨ Hold steady... Auto-measuring craft dimensions
                      </p>
                    </div>

                    {/* Bottom Shutter Controls */}
                    <div className="relative z-10 p-5 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-around">
                      <button
                        onClick={() => showToast('Grid mode toggled')}
                        className="text-xs font-semibold text-white/80"
                      >
                        Grid
                      </button>
                      <button
                        onClick={() => {
                          setActiveScreenIndex(13);
                          showToast('Photo captured! Analyzing dimensions...');
                        }}
                        className="w-16 h-16 rounded-full border-4 border-white bg-[#8C3A16] flex items-center justify-center shadow-lg active:scale-90 transition-all"
                      >
                        <Camera className="w-7 h-7 text-white" />
                      </button>
                      <button
                        onClick={() => showToast('Flash auto')}
                        className="text-xs font-semibold text-white/80"
                      >
                        Auto
                      </button>
                    </div>
                  </div>
                )}

                {/* 14. SCREEN 13: PHOTO & DIMENSION REVIEW (matching p4— photo and dimension review.png 100%) */}
                {activeScreenIndex === 13 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header matching p4— photo and dimension review.png */}
                    <div className="px-4 py-2.5 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(11)}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <div className="text-center">
                        <span className="text-[9.5px] font-black text-[#8C3A16] tracking-wider uppercase block">
                          STEP 2 OF 2 • DIMENSION TOOL
                        </span>
                        <h2 className="text-xs font-black text-[#2D2421]">₹10 Coin Size Detector</h2>
                      </div>
                      <button
                        onClick={() => showToast('मदद (Voice Guidance Activated)')}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FBF2EB] border border-[#EADFD6] text-[#8C3A16] text-[11px] font-bold shadow-2xs"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>मदद</span>
                      </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                      {/* Dual Photo Gallery matching screenshot */}
                      <div className="grid grid-cols-2 gap-2.5">
                        {/* Left: Top-Down with ₹10 Coin & AR Corner Brackets */}
                        <div className="relative h-40 rounded-2xl overflow-hidden border border-[#EADFD6] bg-[#FAF3ED]">
                          <img
                            src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                            alt="Coin Calibration"
                            className="w-full h-full object-cover"
                          />
                          {/* AR White Corner Brackets */}
                          <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-white rounded-tl-xs drop-shadow-md" />
                          <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-white rounded-tr-xs drop-shadow-md" />
                          <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-white rounded-bl-xs drop-shadow-md" />
                          <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-white rounded-br-xs drop-shadow-md" />

                          {/* ₹10 Coin Indicator Graphic */}
                          <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-[#D4AF37]/90 border-2 border-white flex items-center justify-center text-[8px] font-black text-[#5C4033] shadow-md">
                            ₹10
                          </div>
                        </div>

                        {/* Right: Studio Beauty Shot */}
                        <div className="relative h-40 rounded-2xl overflow-hidden border border-[#EADFD6] bg-[#FAF3ED]">
                          <img
                            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=80"
                            alt="Studio Perspective"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Retake Photo Button (Wide Pill Button matching screenshot) */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(11);
                          showToast('Opening camera to retake photo...');
                        }}
                        className="w-full py-2 bg-[#FBF2EB] hover:bg-[#F3E5DA] text-[#221C19] border border-[#EADFD6] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-2xs"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Retake Photo</span>
                      </button>

                      {/* Zero-Typing Voice Correction Card matching screenshot */}
                      <div className="bg-[#FDF6F0] rounded-2xl p-3 border border-[#EADFD6] flex items-center justify-between gap-2.5">
                        <div className="w-10 h-10 rounded-full bg-[#8C3A16] flex items-center justify-center text-white shrink-0 shadow-xs">
                          <Mic className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-black text-[#221C19]">Zero-Typing Voice Correction</h4>
                          <p className="text-[10.5px] text-[#7A685F] leading-snug">
                            Say: <span className="font-extrabold text-[#8C3A16]">"ऊंचाई 6 इंच करो"</span> or tap values to fine-tune.
                          </p>
                        </div>
                        <Ear className="w-5 h-5 text-[#8C3A16] shrink-0 opacity-80" />
                      </div>

                      {/* Computer Vision Output Card matching screenshot */}
                      <div className="bg-[#FFFDFB] rounded-2xl p-3.5 border border-[#EADFD6] space-y-3 shadow-2xs">
                        {/* Header Row */}
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[9.5px] font-black text-[#1E824C] tracking-wide uppercase block">
                              COMPUTER VISION OUTPUT
                            </span>
                            <h3 className="text-sm font-black text-[#221C19]">Detected Dimensions</h3>
                          </div>
                          <div className="bg-[#D4EFDF] text-[#1E824C] px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1">
                            <Check className="w-3 h-3 stroke-[3]" />
                            <span>Auto-Calculated</span>
                          </div>
                        </div>

                        {/* 3 Metric Boxes in Row: Diameter, Height, Est. Weight */}
                        <div className="grid grid-cols-3 gap-2">
                          {/* Box 1: Diameter */}
                          <div className="bg-[#FBF2EB] p-2 rounded-xl border border-[#EADFD6] flex flex-col justify-between">
                            <div className="flex items-center justify-between text-[#4A372D]">
                              <span className="text-[10px] font-bold">Diameter</span>
                              <MoveHorizontal className="w-3 h-3" />
                            </div>
                            <div className="my-1">
                              <span className="text-sm font-black text-[#221C19]">12.4</span>
                              <span className="text-[10px] font-bold text-[#7A685F]"> in</span>
                            </div>
                            <span className="text-[9.5px] text-[#7A685F]">31.5 cm</span>
                          </div>

                          {/* Box 2: Height */}
                          <div className="bg-[#FBF2EB] p-2 rounded-xl border border-[#EADFD6] flex flex-col justify-between">
                            <div className="flex items-center justify-between text-[#4A372D]">
                              <span className="text-[10px] font-bold">Height</span>
                              <MoveVertical className="w-3 h-3" />
                            </div>
                            <div className="my-1">
                              <span className="text-sm font-black text-[#221C19]">6.2</span>
                              <span className="text-[10px] font-bold text-[#7A685F]"> in</span>
                            </div>
                            <span className="text-[9.5px] text-[#7A685F]">15.7 cm</span>
                          </div>

                          {/* Box 3: Est. Weight */}
                          <div className="bg-[#FBF2EB] p-2 rounded-xl border border-[#EADFD6] flex flex-col justify-between">
                            <div className="flex items-center justify-between text-[#4A372D]">
                              <span className="text-[10px] font-bold">Est. Weight</span>
                              <Scale className="w-3 h-3" />
                            </div>
                            <div className="my-1">
                              <span className="text-sm font-black text-[#221C19]">~420</span>
                              <span className="text-[10px] font-bold text-[#7A685F]"> g</span>
                            </div>
                            <span className="text-[9.5px] font-bold text-[#1E824C]">Light Cane</span>
                          </div>
                        </div>

                        {/* Recommended Packaging Box Row matching screenshot */}
                        <div className="bg-[#FBF2EB] rounded-xl p-2.5 border border-[#EADFD6] flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-[#F3E3D6] flex items-center justify-center text-[#8C3A16] shrink-0">
                            <Package className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-bold text-[#4A372D]">Recommended Packaging Box</span>
                              <span className="bg-[#FFE5D6] text-[#8C3A16] text-[8px] font-black px-1.5 py-0.5 rounded-sm">
                                B2B Ready
                              </span>
                            </div>
                            <p className="text-[11px] font-black text-[#221C19]">14 × 14 × 8 in Corrugated Carton.</p>
                          </div>
                        </div>
                      </div>

                      {/* Accept Dimensions & Proceed CTA Button matching screenshot */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(14);
                          showToast('Dimensions accepted! Moving to Voice Description.');
                        }}
                        className="w-full py-3 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                      >
                        <span>Accept Dimensions &amp; Proceed</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Bottom Navigation Bar */}
                    <div className="bg-white border-t border-[#EADFD6] py-1.5 px-3 flex items-center justify-around z-10 shrink-0">
                      {[
                        { label: 'Home', icon: Store, tabIdx: 0, screenIdx: 9 },
                        { label: 'Products', icon: Palette, tabIdx: 1, screenIdx: 10 },
                        { label: 'Orders', icon: FileText, tabIdx: 2, screenIdx: 10 },
                        { label: 'Collaborate', icon: Users, tabIdx: 3, screenIdx: 10 },
                        { label: 'Profile', icon: User, tabIdx: 4, screenIdx: 7 },
                      ].map((tab) => {
                        const IconComp = tab.icon;
                        const isSel = tab.tabIdx === 1;
                        return (
                          <button
                            key={tab.label}
                            onClick={() => {
                              if (tab.tabIdx === 0) {
                                setActiveScreenIndex(9);
                              } else if (tab.tabIdx === 4) {
                                setActiveScreenIndex(7);
                              } else {
                                showToast(`Switched to ${tab.label} tab`);
                              }
                            }}
                            className={`flex flex-col items-center px-2 py-1 rounded-xl transition-all ${
                              isSel ? 'bg-[#F8E5D8] text-[#8C3A16] font-extrabold' : 'text-[#7A685F]'
                            }`}
                          >
                            <IconComp className="w-4 h-4 mb-0.5" />
                            <span className="text-[9.5px]">{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 15. SCREEN 14: CREATE PRODUCT VOICE INPUT (matching p5-desciption all about product with raw materila cost  voice serach.png 100%) */}
                {activeScreenIndex === 14 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header matching p5 */}
                    <div className="px-4 py-2.5 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(13)}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <div className="flex-1 ml-2">
                        <div className="flex items-center gap-1.5">
                          <h2 className="text-xs font-black text-[#221C19]">Create Product</h2>
                          <span className="bg-[#FFE8DC] text-[#8C3A16] text-[8.5px] font-black px-1.5 py-0.5 rounded-sm tracking-wide">
                            VOICE-FIRST
                          </span>
                        </div>
                        <span className="text-[10px] text-[#7A685F] font-medium block">
                          Step 1 of 2 • Voice Input
                        </span>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-[#FBF2EB] border border-[#EADFD6] text-[#221C19] text-[11px] font-bold flex items-center gap-1">
                        <span>English</span>
                        <span className="text-[8px]">▼</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                      {/* Card 1: Tell us about your product */}
                      <div className="bg-[#FDF6F0] rounded-2xl p-3 border border-[#EADFD6] flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-[#FFE8DC] flex items-center justify-center text-[#8C3A16] shrink-0 mt-0.5">
                          <Mic className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-xs font-black text-[#221C19]">Tell us about your product</h3>
                          <p className="text-[10.5px] text-[#7A685F] leading-snug mt-0.5">
                            Speak naturally in Hindi, Bengali, Tamil, English, or your local dialect. AI handles the cataloging.
                          </p>
                        </div>
                      </div>

                      {/* Card 2: EXAMPLE PROMPT */}
                      <div className="bg-[#FAF1EA] rounded-2xl p-3 border border-[#EADFD6] space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-full bg-[#F1DFD5] flex items-center justify-center text-[#8C3A16]">
                              <Volume2 className="w-3 h-3" />
                            </div>
                            <span className="text-[9.5px] font-black text-[#8C3A16] tracking-wider uppercase">
                              EXAMPLE PROMPT
                            </span>
                          </div>
                          <button
                            onClick={() => showToast('Playing example audio prompt...')}
                            className="text-[10px] font-bold text-[#8C3A16] hover:underline"
                          >
                            Tap to listen ▷
                          </button>
                        </div>
                        <p className="text-[11px] italic text-[#4A372D] leading-relaxed">
                          “I weave natural bamboo fruit baskets with double rim borders. Diameter 12 inches, wholesale price 250 rupees per piece.”
                        </p>
                      </div>

                      {/* Card 3: Big White Studio Recording Card */}
                      <div className="bg-[#FFFDFB] rounded-2xl p-4 border border-[#EADFD6] flex flex-col items-center space-y-3.5 shadow-2xs">
                        {/* Live Recording Status Pill */}
                        <div className="flex items-center gap-1.5 bg-[#FBF2EB] border border-[#F3D5C5] px-3 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                          <span className="text-[10.5px] font-black text-[#8C3A16]">Recording Live (0:12)</span>
                        </div>

                        {/* Concentric Circle Glowing Mic */}
                        <div className="relative my-2 flex items-center justify-center">
                          <div className="w-36 h-36 rounded-full bg-[#F7ECE4]/60 flex items-center justify-center animate-pulse">
                            <div className="w-28 h-28 rounded-full bg-[#F0DDD0] flex items-center justify-center">
                              <button
                                onClick={() => showToast('Microphone active. Speaking...')}
                                className="w-20 h-20 rounded-full bg-[#A84318] text-white flex items-center justify-center shadow-lg active:scale-95 transition-all"
                              >
                                <Mic className="w-9 h-9" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Sound Waveform Equalizer */}
                        <div className="flex items-center gap-1 h-6">
                          <div className="w-1 h-3 bg-[#8C3A16] rounded-full animate-pulse" />
                          <div className="w-1 h-5 bg-[#8C3A16] rounded-full animate-pulse" />
                          <div className="w-1 h-3.5 bg-[#8C3A16] rounded-full animate-pulse" />
                          <div className="w-1 h-6 bg-[#8C3A16] rounded-full animate-pulse" />
                          <div className="w-1 h-4 bg-[#8C3A16] rounded-full animate-pulse" />
                          <div className="w-1 h-5.5 bg-[#8C3A16] rounded-full animate-pulse" />
                          <div className="w-1 h-3 bg-[#8C3A16] rounded-full animate-pulse" />
                        </div>

                        {/* Real-time Transcription Box */}
                        <div className="w-full bg-[#FBF4EE] rounded-xl p-3 border border-[#EADFD6] space-y-1 text-left">
                          <div className="flex items-center gap-1.5 text-[#1E824C]">
                            <Radio className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-bold text-[#4A372D]">Real-time Transcription</span>
                          </div>
                          <p className="text-[11.5px] text-[#221C19] leading-snug">
                            “ ...natural bamboo fruit basket with double rim...{' '}
                            <span className="bg-[#FFE2D4] text-[#8C3A16] font-black px-1.5 py-0.5 rounded-sm">
                              250 rupees wholesale
                            </span>{' '}
                            ...”
                          </p>
                        </div>

                        {/* Done Recording CTA */}
                        <button
                          onClick={() => {
                            setActiveScreenIndex(15);
                            showToast('Voice description processed! Opening AI Draft Preview.');
                          }}
                          className="w-full py-3 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Done Recording</span>
                        </button>
                      </div>

                      {/* Footer Hint */}
                      <p className="text-center text-[10.5px] text-[#7A685F] font-medium">
                        💡 Zero typing needed • Speak in your natural rhythm
                      </p>
                    </div>

                    {/* Bottom Navigation Bar */}
                    <div className="bg-white border-t border-[#EADFD6] py-1.5 px-3 flex items-center justify-around z-10 shrink-0">
                      {[
                        { label: 'Home', icon: Store, tabIdx: 0, screenIdx: 9 },
                        { label: 'Products', icon: Palette, tabIdx: 1, screenIdx: 10 },
                        { label: 'Orders', icon: FileText, tabIdx: 2, screenIdx: 10 },
                        { label: 'Collaborate', icon: Users, tabIdx: 3, screenIdx: 10 },
                        { label: 'Profile', icon: User, tabIdx: 4, screenIdx: 7 },
                      ].map((tab) => {
                        const IconComp = tab.icon;
                        const isSel = tab.tabIdx === 1;
                        return (
                          <button
                            key={tab.label}
                            onClick={() => {
                              if (tab.tabIdx === 0) {
                                setActiveScreenIndex(9);
                              } else if (tab.tabIdx === 4) {
                                setActiveScreenIndex(7);
                              } else {
                                showToast(`Switched to ${tab.label} tab`);
                              }
                            }}
                            className={`flex flex-col items-center px-2 py-1 rounded-xl transition-all ${
                              isSel ? 'bg-[#F8E5D8] text-[#8C3A16] font-extrabold' : 'text-[#7A685F]'
                            }`}
                          >
                            <IconComp className="w-4 h-4 mb-0.5" />
                            <span className="text-[9.5px]">{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 16. SCREEN 15: AI DRAFT PREVIEW & REVIEW (matching p6-decsiption review.png 100%) */}
                {activeScreenIndex === 15 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header matching p6 */}
                    <div className="px-4 py-2.5 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(14)}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <div className="flex items-center gap-1.5">
                        <h2 className="text-xs font-black text-[#221C19]">Product Preview</h2>
                        <div className="bg-[#D4EFDF] text-[#1E824C] px-2 py-0.5 rounded-full text-[9.5px] font-extrabold flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>AI Generated • Verified</span>
                        </div>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-[#FBF2EB] border border-[#EADFD6] text-[#221C19] text-[11px] font-bold flex items-center gap-1">
                        <span>English</span>
                        <span className="text-[8px]">▼</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                      {/* Step Indicator with Dual Progress Bars */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10.5px] font-extrabold text-[#8C3A16]">
                          Step 2 of 2 • Review &amp; Confirm
                        </span>
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-1 bg-[#1E824C] rounded-full" />
                          <div className="w-5 h-1 bg-[#8C3A16] rounded-full" />
                        </div>
                      </div>

                      {/* Card 1: AI Craft Draft Ready */}
                      <div className="bg-[#FDF6F0] rounded-2xl p-3 border border-[#EADFD6] flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#FFE8DC] flex items-center justify-center text-[#8C3A16] shrink-0 mt-0.5">
                          <User className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-xs font-black text-[#221C19]">AI Craft Draft Ready</h3>
                          <p className="text-[10.5px] text-[#7A685F] leading-snug mt-0.5">
                            Here is what AI created from your voice note. Tap any item to edit with voice.
                          </p>
                        </div>
                      </div>

                      {/* Card 2: Input Voice Clip Player */}
                      <div className="bg-[#FAF1EA] rounded-2xl p-3 border border-[#EADFD6] space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-[#221C19]">
                            <Mic className="w-3.5 h-3.5 text-[#8C3A16]" />
                            <span className="text-[10.5px] font-extrabold">Input Voice Clip</span>
                          </div>
                          <button
                            onClick={() => {
                              setActiveScreenIndex(14);
                              showToast('Opening voice recorder to re-record...');
                            }}
                            className="flex items-center gap-1 text-[10.5px] font-bold text-[#8C3A16] hover:underline"
                          >
                            <RefreshCw className="w-3 h-3" />
                            <span>Re-record</span>
                          </button>
                        </div>
                        <div className="bg-white rounded-xl p-2 border border-[#EADFD6] flex items-center justify-between gap-2">
                          <button className="w-7 h-7 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shrink-0">
                            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          </button>
                          <div className="flex items-center gap-0.5 shrink-0">
                            <div className="w-0.5 h-3.5 bg-[#8C3A16] rounded-full" />
                            <div className="w-0.5 h-5 bg-[#8C3A16] rounded-full" />
                            <div className="w-0.5 h-2.5 bg-[#8C3A16] rounded-full" />
                            <div className="w-0.5 h-6 bg-[#8C3A16] rounded-full" />
                            <div className="w-0.5 h-4 bg-[#8C3A16] rounded-full" />
                            <div className="w-0.5 h-4.5 bg-[#8C3A16] rounded-full" />
                            <div className="w-0.5 h-3 bg-[#8C3A16] rounded-full" />
                            <div className="w-0.5 h-2 bg-[#8C3A16] rounded-full" />
                          </div>
                          <span className="text-[10px] italic text-[#4A372D] truncate flex-1">
                            "Handmade bamboo basket..."
                          </span>
                          <span className="text-[10px] font-bold text-[#221C19] shrink-0">0:14</span>
                        </div>
                      </div>

                      {/* Card 3: Product Card (Photo + Badges + Title & Description) */}
                      <div className="bg-[#FFFDFB] rounded-2xl border border-[#EADFD6] overflow-hidden space-y-3 shadow-2xs">
                        {/* Image Container with Badges */}
                        <div className="relative h-44 bg-[#FAF3ED]">
                          <img
                            src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                            alt="Bamboo Basket"
                            className="w-full h-full object-cover"
                          />
                          {/* Badges Top Left & Right */}
                          <div className="absolute top-2 left-2 bg-black/65 backdrop-blur-xs text-white px-2 py-0.5 rounded-lg text-[9px] font-bold flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                            <span>AI Cataloged</span>
                          </div>
                          <div className="absolute top-2 left-28 bg-[#D4EFDF] text-[#1E824C] px-2 py-0.5 rounded-lg text-[9px] font-black flex items-center gap-1">
                            <ShieldCheck className="w-2.5 h-2.5" />
                            <span>GI Cluster Verified</span>
                          </div>
                          {/* Change Photo Button */}
                          <button
                            onClick={() => {
                              setActiveScreenIndex(11);
                              showToast('Opening camera to change photo...');
                            }}
                            className="absolute bottom-2 right-2 bg-black/65 backdrop-blur-xs text-white px-2.5 py-1 rounded-xl text-[9.5px] font-bold flex items-center gap-1 hover:bg-black/80"
                          >
                            <Camera className="w-3 h-3" />
                            <span>Change Photo</span>
                          </button>
                        </div>

                        <div className="p-3 pt-0 space-y-3">
                          {/* Title with Voice Edit Mic */}
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-sm font-black text-[#221C19] leading-tight">
                              Handmade Woven Bamboo Fruit Basket
                            </h3>
                            <button
                              onClick={() => showToast('Say new product title...')}
                              className="w-7 h-7 rounded-full bg-[#FFE8DC] text-[#8C3A16] flex items-center justify-center shrink-0 hover:bg-[#F3D5C5]"
                            >
                              <Mic className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Description with Voice Edit Mic */}
                          <div className="bg-[#FBF4EE] rounded-xl p-2.5 border border-[#EADFD6] flex items-start gap-2">
                            <p className="text-[10.5px] text-[#4A372D] leading-relaxed flex-1">
                              Handcrafted from 100% natural treated Assam bamboo with traditional lattice weave, double rim reinforcement, and food-safe finish. Ideal for dining storage, eco-friendly gift hampers, and artisanal home decor.
                            </p>
                            <button
                              onClick={() => showToast('Say new description...')}
                              className="w-6 h-6 rounded-full bg-[#FFE8DC] text-[#8C3A16] flex items-center justify-center shrink-0 hover:bg-[#F3D5C5]"
                            >
                              <Mic className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Extracted Specifications Grid */}
                          <div className="space-y-2 pt-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-black text-[#221C19]">Extracted Specifications</span>
                              <button
                                onClick={() => showToast('Tap any tile to edit with voice')}
                                className="flex items-center gap-1 text-[10px] font-bold text-[#8C3A16]"
                              >
                                <Mic className="w-3 h-3" />
                                <span>Tap tile to speak</span>
                              </button>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              {/* Tile 1: Category */}
                              <div className="bg-[#FFFDFB] p-2.5 rounded-xl border border-[#EADFD6] flex flex-col justify-between">
                                <div className="flex items-center justify-between text-[#7A685F]">
                                  <span className="text-[10px] font-bold">Category</span>
                                  <Layers className="w-3 h-3" />
                                </div>
                                <span className="text-[11.5px] font-black text-[#221C19] my-1">
                                  Home &amp; Kitchen / Dining
                                </span>
                                <button
                                  onClick={() => showToast('Say new Category...')}
                                  className="flex items-center gap-1 text-[9.5px] font-bold text-[#8C3A16]"
                                >
                                  <Mic className="w-2.5 h-2.5" />
                                  <span>Tap to edit</span>
                                </button>
                              </div>

                              {/* Tile 2: Material */}
                              <div className="bg-[#FFFDFB] p-2.5 rounded-xl border border-[#EADFD6] flex flex-col justify-between">
                                <div className="flex items-center justify-between text-[#7A685F]">
                                  <span className="text-[10px] font-bold">Material</span>
                                  <Palette className="w-3 h-3" />
                                </div>
                                <span className="text-[11.5px] font-black text-[#221C19] my-1">
                                  100% Natural River Bamboo
                                </span>
                                <button
                                  onClick={() => showToast('Say new Material...')}
                                  className="flex items-center gap-1 text-[9.5px] font-bold text-[#8C3A16]"
                                >
                                  <Mic className="w-2.5 h-2.5" />
                                  <span>Tap to edit</span>
                                </button>
                              </div>

                              {/* Tile 3: Dimensions */}
                              <div className="bg-[#FFFDFB] p-2.5 rounded-xl border border-[#EADFD6] flex flex-col justify-between">
                                <div className="flex items-center justify-between text-[#7A685F]">
                                  <span className="text-[10px] font-bold">Dimensions</span>
                                  <SlidersHorizontal className="w-3 h-3" />
                                </div>
                                <div>
                                  <span className="text-[11.5px] font-black text-[#221C19] block">
                                    12" L × 12" W × 6" H
                                  </span>
                                  <span className="text-[9px] text-[#7A685F]">(Estimated via voice)</span>
                                </div>
                                <button
                                  onClick={() => showToast('Say new Dimensions...')}
                                  className="flex items-center gap-1 text-[9.5px] font-bold text-[#8C3A16] mt-1"
                                >
                                  <Mic className="w-2.5 h-2.5" />
                                  <span>Tap to edit</span>
                                </button>
                              </div>

                              {/* Tile 4: Finish & Color */}
                              <div className="bg-[#FFFDFB] p-2.5 rounded-xl border border-[#EADFD6] flex flex-col justify-between">
                                <div className="flex items-center justify-between text-[#7A685F]">
                                  <span className="text-[10px] font-bold">Finish &amp; Color</span>
                                  <Palette className="w-3 h-3" />
                                </div>
                                <span className="text-[11.5px] font-black text-[#221C19] my-1">
                                  Natural Golden Honey / Unvarnished
                                </span>
                                <button
                                  onClick={() => showToast('Say new Finish & Color...')}
                                  className="flex items-center gap-1 text-[9.5px] font-bold text-[#8C3A16]"
                                >
                                  <Mic className="w-2.5 h-2.5" />
                                  <span>Tap to edit</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Primary CTA: Looks Good — Continue → */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(16);
                          showToast('Catalog draft approved! Opening Fair Pricing Assistant.');
                        }}
                        className="w-full py-3 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                      >
                        <span>Looks Good — Continue</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      {/* Secondary CTA: Edit Whole Card With Voice */}
                      <button
                        onClick={() => showToast('Listening to full voice review...')}
                        className="w-full py-2.5 bg-[#FAF1EA] hover:bg-[#F3E3D6] text-[#8C3A16] border border-[#EADFD6] rounded-2xl text-xs font-black flex items-center justify-center gap-1.5 transition-all"
                      >
                        <Mic className="w-3.5 h-3.5" />
                        <span>Edit Whole Card With Voice</span>
                      </button>

                      {/* Footer text */}
                      <p className="text-center text-[10px] text-[#7A685F] font-medium">
                        Zero typing required • Instant B2B cataloging
                      </p>
                    </div>

                    {/* Bottom Navigation Bar */}
                    <div className="bg-white border-t border-[#EADFD6] py-1.5 px-3 flex items-center justify-around z-10 shrink-0">
                      {[
                        { label: 'Home', icon: Store, tabIdx: 0, screenIdx: 9 },
                        { label: 'Products', icon: Palette, tabIdx: 1, screenIdx: 10 },
                        { label: 'Orders', icon: FileText, tabIdx: 2, screenIdx: 10 },
                        { label: 'Collaborate', icon: Users, tabIdx: 3, screenIdx: 10 },
                        { label: 'Profile', icon: User, tabIdx: 4, screenIdx: 7 },
                      ].map((tab) => {
                        const IconComp = tab.icon;
                        const isSel = tab.tabIdx === 1;
                        return (
                          <button
                            key={tab.label}
                            onClick={() => {
                              if (tab.tabIdx === 0) {
                                setActiveScreenIndex(9);
                              } else if (tab.tabIdx === 4) {
                                setActiveScreenIndex(7);
                              } else {
                                showToast(`Switched to ${tab.label} tab`);
                              }
                            }}
                            className={`flex flex-col items-center px-2 py-1 rounded-xl transition-all ${
                              isSel ? 'bg-[#F8E5D8] text-[#8C3A16] font-extrabold' : 'text-[#7A685F]'
                            }`}
                          >
                            <IconComp className="w-4 h-4 mb-0.5" />
                            <span className="text-[9.5px]">{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 17. SCREEN 16: FAIR PRICING ASSISTANT (matching p7— Fair Pricing Assistant.png 100%) */}
                {activeScreenIndex === 16 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header */}
                    <div className="px-3.5 pt-2 pb-2.5 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(15)}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>

                      <div className="text-center">
                        <h2 className="text-sm font-black text-[#221C19] leading-tight">Know Your Fair Price</h2>
                        <span className="text-[10.5px] font-extrabold text-[#8C3A16] block">
                          Step 3 of 3 • Price Intelligence
                        </span>
                      </div>

                      {/* Listen Button */}
                      <button
                        onClick={() => showToast('Playing audio price guide...')}
                        className="flex items-center gap-1 bg-[#FAF1EA] border border-[#EADFD6] rounded-full px-2.5 py-1 text-[#8C3A16] hover:bg-[#F3E3D6] active:scale-95 transition-all shadow-2xs"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-[#8C3A16]" />
                        <span className="text-[11px] font-bold">Listen</span>
                      </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                      {/* Card 1: AI Cost & Wage Calculator Banner */}
                      <div className="bg-[#FFFDFB] rounded-2xl p-3 border border-[#EADFD6] space-y-1.5 shadow-2xs">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-xl bg-[#FAF1EA] text-[#8C3A16] flex items-center justify-center font-bold">
                              <Calculator className="w-4 h-4" />
                            </div>
                            <h3 className="text-xs font-black text-[#221C19]">AI Cost &amp; Wage Calculator</h3>
                          </div>
                          <span className="bg-[#E8F5E9] text-[#2E7D32] px-2 py-0.5 rounded-full text-[9.5px] font-black">
                            Active
                          </span>
                        </div>
                        <p className="text-[10.5px] text-[#5A483E] leading-snug">
                          Ensuring you never sell below fair living wage while staying competitive for bulk B2B buyers.
                        </p>
                      </div>

                      {/* Card 2: Product Reference Strip */}
                      <div className="bg-[#FFFDFB] rounded-2xl p-2.5 border border-[#EADFD6] flex items-center gap-2.5 shadow-2xs">
                        <img
                          src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                          alt="Product"
                          className="w-16 h-12 rounded-lg object-cover border border-[#EADFD6] shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-[9.5px] font-bold text-[#1E824C] flex items-center gap-0.5">
                            <Check className="w-3 h-3 text-[#1E824C]" />
                            <span>GI Certified • Assam Bamboo</span>
                          </span>
                          <p className="text-xs font-black text-[#221C19] truncate leading-tight mt-0.5">
                            Handmade Woven Bamboo Fr...
                          </p>
                          <p className="text-[9.5px] text-[#7A685F]">Cluster Code: ASM-KAM-42</p>
                        </div>
                      </div>

                      {/* Section Header: Interactive Cost Breakdown */}
                      <div className="flex items-center justify-between pt-0.5">
                        <div className="flex items-center gap-1.5">
                          <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C3A16]" />
                          <h3 className="text-xs font-black text-[#221C19]">Interactive Cost Breakdown</h3>
                        </div>
                        <span className="text-[10px] font-bold text-[#7A685F]">Tap card to edit</span>
                      </div>

                      {/* 4 Cost Breakdown Cards */}
                      <div className="space-y-2">
                        {/* 1. Raw Materials */}
                        <div
                          onClick={() => showToast('Editing Raw Materials cost...')}
                          className="bg-[#FFFDFB] rounded-2xl p-2.5 border border-[#EADFD6] flex items-center justify-between cursor-pointer hover:border-[#8C3A16] transition-all shadow-2xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#FAF1EA] text-[#8C3A16] flex items-center justify-center shrink-0">
                              <Package className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs font-black text-[#221C19]">Raw Materials</h4>
                              <p className="text-[10px] text-[#7A685F]">Treated Assam Cane ₹55 • Polish ₹30</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-black text-[#221C19]">₹85</span>
                            <span className="block text-[9.5px] font-bold text-[#8C3A16]">Adjust ✎</span>
                          </div>
                        </div>

                        {/* 2. Artisan Labor & Time (Green Benchmark Highlight) */}
                        <div
                          onClick={() => showToast('Artisan Labor benchmark rate')}
                          className="bg-[#FFFDFB] rounded-2xl p-2.5 border-1.5 border-[#1E824C] flex items-center justify-between cursor-pointer shadow-xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#E8F8F0] text-[#1E824C] flex items-center justify-center shrink-0">
                              <User className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h4 className="text-xs font-black text-[#221C19]">Artisan Labor &amp; Time</h4>
                                <span className="bg-[#E8F5E9] text-[#1E824C] px-1.5 py-0.2 rounded text-[8.5px] font-black">
                                  Benchmark
                                </span>
                              </div>
                              <p className="text-[10px] text-[#7A685F]">3.5 hours weaving @ ₹34/hr benchmark</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-black text-[#1E824C]">₹120</span>
                            <span className="block text-[9.5px] font-bold text-[#1E824C]">Fair rate</span>
                          </div>
                        </div>

                        {/* 3. Cluster Overhead */}
                        <div
                          onClick={() => showToast('Editing Cluster Overhead...')}
                          className="bg-[#FFFDFB] rounded-2xl p-2.5 border border-[#EADFD6] flex items-center justify-between cursor-pointer hover:border-[#8C3A16] transition-all shadow-2xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#FAF1EA] text-[#8C3A16] flex items-center justify-center shrink-0">
                              <Layers className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs font-black text-[#221C19]">Cluster Overhead</h4>
                              <p className="text-[10px] text-[#7A685F]">Tools, shared shed &amp; transport</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-black text-[#221C19]">₹25</span>
                            <span className="block text-[9.5px] font-bold text-[#8C3A16]">Adjust ✎</span>
                          </div>
                        </div>

                        {/* 4. Fair Profit (20%) */}
                        <div
                          onClick={() => showToast('Fair Profit is automated at 20%')}
                          className="bg-[#FFFDFB] rounded-2xl p-2.5 border border-[#EADFD6] flex items-center justify-between cursor-pointer shadow-2xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#FAF1EA] text-[#8C3A16] flex items-center justify-center shrink-0">
                              <TrendingUp className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h4 className="text-xs font-black text-[#221C19]">Fair Profit (20%)</h4>
                                <span className="bg-[#FAF1EA] text-[#8C3A16] px-1.5 py-0.2 rounded text-[8.5px] font-bold">
                                  Reinvest
                                </span>
                              </div>
                              <p className="text-[10px] text-[#7A685F]">Artisan growth &amp; tool maintenance</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-black text-[#8C3A16]">₹50</span>
                            <span className="block text-[9.5px] font-bold text-[#7A685F]">Automated</span>
                          </div>
                        </div>
                      </div>

                      {/* Voice Adjustment Bar */}
                      <div className="bg-[#FAF1EA] rounded-full p-1 pl-3.5 pr-1 border border-[#EADFD6] flex items-center justify-between gap-2 shadow-2xs">
                        <span className="text-[10.5px] font-bold text-[#5A483E] truncate">
                          Say "Increase labor to 150 rupees" or tap to...
                        </span>
                        <button
                          onClick={() => showToast('Listening: "Increase labor to..."')}
                          className="w-7 h-7 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shrink-0 shadow-xs active:scale-95 transition-all"
                        >
                          <Mic className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Total Production Cost & Recommended Base Price Card */}
                      <div className="bg-[#FFFDFB] rounded-2xl p-3 border border-[#EADFD6] space-y-2.5 shadow-2xs">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] font-bold text-[#7A685F] block">Total Production Cost</span>
                            <span className="text-base font-black text-[#221C19]">₹230</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10.5px] font-black text-[#8C3A16] block">
                              Recommended Base Price
                            </span>
                            <div>
                              <span className="text-xl font-black text-[#8C3A16]">₹280</span>
                              <span className="text-[10.5px] text-[#7A685F]"> / piece</span>
                            </div>
                          </div>
                        </div>

                        {/* Fair Wage Certified Badge */}
                        <div className="bg-[#EDF7ED] border border-[#C8E6C9] rounded-xl p-2.5 flex items-start gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#1E824C] shrink-0 mt-0.5" />
                          <div>
                            <p className="text-[10.5px] font-black text-[#1E824C] leading-tight">
                              Fair Wage Certified • ₹780/day artisan income
                            </p>
                            <p className="text-[9.5px] text-[#2E7D32] leading-tight mt-0.5">
                              Meets Indian Handicraft Living Standard Benchmark
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Market Benchmark Comparison Card */}
                      <div className="bg-[#FFFDFB] rounded-2xl p-3 border border-[#EADFD6] space-y-2.5 shadow-2xs">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-black text-[#221C19]">Market Benchmark Comparison</h3>
                          <Info className="w-3.5 h-3.5 text-[#7A685F]" />
                        </div>
                        <p className="text-[10px] text-[#7A685F] leading-tight">
                          Transparency check against local middlemen and urban commercial retail margins.
                        </p>

                        {/* Tri-color progress track */}
                        <div className="h-2 rounded-full overflow-hidden flex bg-[#EADFD6]">
                          <div className="w-1/4 bg-[#C0392B]" />
                          <div className="w-1/3 bg-[#1E824C]" />
                          <div className="flex-1 bg-[#D5C7BD]" />
                        </div>

                        {/* Row 1: Local Middleman Offer */}
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-[#C0392B]" />
                            <span className="text-[11px] font-bold text-[#221C19]">Local Middleman Offer</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-black text-[#C0392B]">₹160</span>
                            <span className="bg-[#FDEDEC] text-[#C0392B] px-1.5 py-0.2 rounded text-[8.5px] font-bold">
                              Exploitative
                            </span>
                          </div>
                        </div>

                        {/* Row 2: HunarSangam Living Wage (Green Highlight Card) */}
                        <div className="bg-[#E8F8F0] border border-[#A3E4D7] rounded-xl p-2.5 flex items-center justify-between">
                          <div className="flex items-start gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-[#1E824C] mt-1 shrink-0" />
                            <div>
                              <span className="text-[11px] font-black text-[#1E824C] block">
                                HunarSangam Living Wage
                              </span>
                              <span className="text-[9.5px] text-[#5A483E]">Direct artisan empowerment</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-[#1E824C]">₹250 – ₹280</span>
                            <div className="bg-[#2E7D32] text-white px-2 py-1 rounded-lg text-[8.5px] font-black text-center leading-tight">
                              Fair &amp;<br />Viable
                            </div>
                          </div>
                        </div>

                        {/* Row 3: Retail Metro Market Price */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-start gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-[#9E8E84] mt-1 shrink-0" />
                            <div>
                              <span className="text-[11px] font-bold text-[#221C19] block">
                                Retail Metro Market Price
                              </span>
                              <span className="text-[9.5px] text-[#7A685F]">Delhi, Mumbai lifestyle stores</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-black text-[#221C19] block">₹650 – ₹850</span>
                            <span className="text-[8.5px] font-bold text-[#1E824C]">Healthy B2B buyer margin</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action CTAs */}
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => showToast('Opening custom pricing slider...')}
                          className="px-4 py-2.5 bg-white border border-[#221C19] rounded-xl text-xs font-bold text-[#221C19] hover:bg-[#F3E7DF] active:scale-95 transition-all shadow-2xs"
                        >
                          Custom
                        </button>
                        <button
                          onClick={() => {
                            setActiveScreenIndex(17);
                            showToast('Fair price of ₹280 locked! Opening Production Capacity.');
                          }}
                          className="flex-1 py-2.5 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-all"
                        >
                          <span>Lock Fair Price (₹280) &amp; Proceed</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Footer note */}
                      <p className="text-center text-[9px] text-[#5A483E] font-medium flex items-center justify-center gap-1 pb-1">
                        <ShieldCheck className="w-3 h-3 text-[#1E824C]" />
                        <span>Verified against Ministry of Textiles &amp; Handicraft Fair Wage Index</span>
                      </p>
                    </div>

                    {/* Bottom Navigation Bar (5 tabs) */}
                    <div className="bg-white border-t border-[#EADFD6] py-1.5 px-3 flex items-center justify-around z-10 shrink-0">
                      {[
                        { label: 'Home', icon: Store, tabIdx: 0, screenIdx: 9 },
                        { label: 'Products', icon: Palette, tabIdx: 1, screenIdx: 10 },
                        { label: 'Orders', icon: FileText, tabIdx: 2, screenIdx: 10 },
                        { label: 'Collaborate', icon: Users, tabIdx: 3, screenIdx: 10 },
                        { label: 'Profile', icon: User, tabIdx: 4, screenIdx: 7 },
                      ].map((tab) => {
                        const IconComp = tab.icon;
                        const isSel = tab.tabIdx === 1;
                        return (
                          <button
                            key={tab.label}
                            onClick={() => {
                              if (tab.tabIdx === 0) {
                                setActiveScreenIndex(9);
                              } else if (tab.tabIdx === 4) {
                                setActiveScreenIndex(7);
                              } else {
                                showToast(`Switched to ${tab.label} tab`);
                              }
                            }}
                            className={`flex flex-col items-center px-2 py-1 rounded-xl transition-all ${
                              isSel ? 'bg-[#F8E5D8] text-[#8C3A16] font-extrabold' : 'text-[#7A685F]'
                            }`}
                          >
                            <IconComp className="w-4 h-4 mb-0.5" />
                            <span className="text-[9.5px]">{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 18. SCREEN 17: VOICE CAPACITY INTAKE (matching p8-voice based piese in day asking.png 100%) */}
                {activeScreenIndex === 17 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header matching p8 */}
                    <div className="px-3.5 pt-2 pb-2.5 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveScreenIndex(16)}
                          className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        <div>
                          <h2 className="text-sm font-black text-[#221C19] leading-tight">Bulk Record</h2>
                          <span className="text-[10.5px] font-semibold text-[#7A685F]">
                            Product: Assam Cane Basket
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 bg-[#FAF1EA] border border-[#EADFD6] rounded-full px-2.5 py-1 text-[#8C3A16] shadow-2xs">
                        <span className="text-[11px] font-bold">English ▾</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                      {/* Product Overview Card matching p8 */}
                      <div className="bg-[#FFFDFB] rounded-2xl p-2.5 border-1.5 border-[#E5D5CB] space-y-2 shadow-2xs">
                        <div className="flex items-start gap-2.5">
                          <div className="relative rounded-xl overflow-hidden shrink-0 w-16 h-16 bg-[#FAF3ED]">
                            <img
                              src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                              alt="Woven Bamboo Basket"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-1 left-1 bg-[#1E824C] text-white px-1.5 py-0.2 rounded text-[7.5px] font-black">
                              GI CRAFT
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="text-xs font-black text-[#221C19] truncate">Woven Bamboo Basket</h3>
                            <p className="text-[10px] text-[#7A685F]">Assam Golden Cane • Hand-plaited</p>
                            <div className="flex items-center gap-1.5 mt-1.5">
                              <span className="bg-[#FAF1EA] border border-[#E5D5CB] text-[#8C3A16] px-1.5 py-0.5 rounded-md text-[9.5px] font-black">
                                🏷️ ₹280/pc
                              </span>
                              <span className="bg-[#FAF1EA] border border-[#E5D5CB] text-[#4A372D] px-1.5 py-0.5 rounded-md text-[9.5px] font-bold">
                                📦 Min: 20 pcs
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-[#F0E6DE] pt-1.5 flex items-center justify-between text-[10px]">
                          <span className="text-[#5A483E] flex items-center gap-1">
                            <Volume2 className="w-3 h-3 text-[#8C3A16]" />
                            <span>Artisan audio note included (0:24)</span>
                          </span>
                          <span className="font-extrabold text-[#1E824C]">Ready for Bulk Quotations</span>
                        </div>
                      </div>

                      {/* Main Question Card matching p8 */}
                      <div className="bg-[#FFFDFB] rounded-2xl p-3 border border-[#EADFD6] shadow-2xs">
                        <div className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-[#8C3A16] shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-xs font-black text-[#221C19] leading-snug">
                              How many pieces you made in 1 day ( 8 hours work )
                            </p>
                            <div className="h-0.5 bg-[#EADFD6] w-full mt-2" />
                          </div>
                        </div>
                      </div>

                      {/* Try Saying Suggestions */}
                      <div className="space-y-1.5">
                        <span className="text-[10.5px] font-bold text-[#7A685F]">Try saying :</span>
                        <div
                          onClick={() => showToast('Selected: "10 pieces 1 day"')}
                          className="bg-[#FFFDFB] p-2.5 rounded-xl border border-[#EADFD6] flex items-center justify-between cursor-pointer hover:border-[#8C3A16] transition-all shadow-2xs"
                        >
                          <div className="flex items-center gap-2">
                            <Mic className="w-3.5 h-3.5 text-[#8C3A16]" />
                            <span className="text-xs font-semibold text-[#221C19]">Say: "10 pieces 1 day "</span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#7A685F] -rotate-45" />
                        </div>
                        <div
                          onClick={() => showToast('Selected: "10–20 pieces in 1 day"')}
                          className="bg-[#FFFDFB] p-2.5 rounded-xl border border-[#EADFD6] flex items-center justify-between cursor-pointer hover:border-[#8C3A16] transition-all shadow-2xs"
                        >
                          <div className="flex items-center gap-2">
                            <Mic className="w-3.5 h-3.5 text-[#8C3A16]" />
                            <span className="text-xs font-semibold text-[#221C19]">Say: "10–20 pieces in 1 day "</span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#7A685F] -rotate-45" />
                        </div>
                      </div>

                      {/* Concentric Live Voice Recording Studio Card matching p8 */}
                      <div className="bg-[#FFFDFB] rounded-3xl p-4 border border-[#EADFD6] text-center space-y-3.5 shadow-xs">
                        {/* Recording Live Badge */}
                        <div className="inline-flex items-center gap-1.5 bg-[#FFE8DC] px-3 py-1 rounded-full">
                          <span className="w-2 h-2 rounded-full bg-[#8C3A16] animate-ping" />
                          <span className="w-2 h-2 rounded-full bg-[#8C3A16]" />
                          <span className="text-[10px] font-black text-[#8C3A16]">Recording Live (0:12)</span>
                        </div>

                        {/* Glowing Concentric Circles Mic */}
                        <div className="flex items-center justify-center py-1">
                          <div className="w-28 h-28 rounded-full bg-[#FAF1EA] flex items-center justify-center">
                            <div className="w-22 h-22 rounded-full bg-[#F3E3D6] flex items-center justify-center">
                              <button
                                onClick={() => showToast('Recording toggled')}
                                className="w-16 h-16 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shadow-lg active:scale-95 transition-all"
                              >
                                <Mic className="w-7 h-7" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Equalizer waveform bars */}
                        <div className="flex items-center justify-center gap-1 h-6">
                          <div className="w-1 h-3 bg-[#8C3A16] rounded-full" />
                          <div className="w-1 h-5 bg-[#8C3A16] rounded-full" />
                          <div className="w-1 h-2 bg-[#8C3A16] rounded-full" />
                          <div className="w-1 h-6 bg-[#8C3A16] rounded-full" />
                          <div className="w-1 h-4 bg-[#8C3A16] rounded-full" />
                          <div className="w-1 h-5 bg-[#8C3A16] rounded-full" />
                          <div className="w-1 h-3 bg-[#8C3A16] rounded-full" />
                          <div className="w-1 h-2 bg-[#8C3A16] rounded-full" />
                        </div>

                        {/* Real-time Transcription Box */}
                        <div className="bg-[#FBF4EE] rounded-2xl p-3 border border-[#EADFD6] text-left space-y-1">
                          <div className="flex items-center gap-1.5 text-[#1E824C]">
                            <Volume2 className="w-3.5 h-3.5 text-[#1E824C]" />
                            <span className="text-[10px] font-black text-[#221C19]">Real-time Transcription</span>
                          </div>
                          <p className="text-xs font-semibold text-[#221C19] leading-snug">
                            “I made 15 pieces in day 1 work house of 8 house”
                          </p>
                        </div>

                        {/* Save and Submit Product Button */}
                        <button
                          onClick={() => {
                            setActiveScreenIndex(18);
                            showToast('Production capacity recorded! Opening 3D / AR Preview.');
                          }}
                          className="w-full py-3 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Save and Submit Product</span>
                        </button>
                      </div>
                    </div>

                    {/* Bottom Navigation Bar (5 tabs) */}
                    <div className="bg-white border-t border-[#EADFD6] py-1.5 px-3 flex items-center justify-around z-10 shrink-0">
                      {[
                        { label: 'Home', icon: Store, tabIdx: 0, screenIdx: 9 },
                        { label: 'Products', icon: Palette, tabIdx: 1, screenIdx: 10 },
                        { label: 'Orders', icon: FileText, tabIdx: 2, screenIdx: 10 },
                        { label: 'Collaborate', icon: Users, tabIdx: 3, screenIdx: 10 },
                        { label: 'Profile', icon: User, tabIdx: 4, screenIdx: 7 },
                      ].map((tab) => {
                        const IconComp = tab.icon;
                        const isSel = tab.tabIdx === 1;
                        return (
                          <button
                            key={tab.label}
                            onClick={() => {
                              if (tab.tabIdx === 0) {
                                setActiveScreenIndex(9);
                              } else if (tab.tabIdx === 4) {
                                setActiveScreenIndex(7);
                              } else {
                                showToast(`Switched to ${tab.label} tab`);
                              }
                            }}
                            className={`flex flex-col items-center px-2 py-1 rounded-xl transition-all ${
                              isSel ? 'bg-[#F8E5D8] text-[#8C3A16] font-extrabold' : 'text-[#7A685F]'
                            }`}
                          >
                            <IconComp className="w-4 h-4 mb-0.5" />
                            <span className="text-[9.5px]">{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 19. SCREEN 18: FINAL PRODUCT PREVIEW (Matching p9-final preview ar.png) */}
                {activeScreenIndex === 18 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(17)}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <h2 className="text-sm font-extrabold text-[#221C19]">Preview Product</h2>
                      <div className="bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                        <span>Active Listing</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5 pb-6">
                      {/* Product Catalog Card */}
                      <div className="bg-[#FFFDFB] rounded-2xl border border-[#EADFD6] overflow-hidden shadow-2xs">
                        {/* Photo with verified badges */}
                        <div className="relative h-44 w-full bg-[#F3E7DF] overflow-hidden flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                            alt="Handmade Woven Bamboo Fruit Basket"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            <span>Verified Dimensions</span>
                          </div>
                          <div className="absolute bottom-2.5 right-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                            <span className="w-3.5 h-3.5 rounded-full bg-amber-400 text-black text-[9px] font-black flex items-center justify-center">₹</span>
                            <span>Verified with ₹10 coin</span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-3.5 space-y-2.5">
                          <p className="text-[10px] font-extrabold tracking-wider text-[#A0522D] uppercase">
                            PRODUCT CATALOG SUMMARY
                          </p>
                          <h3 className="text-base font-extrabold text-[#221C19] leading-snug">
                            Handmade Woven Bamboo Fruit Basket
                          </h3>

                          {/* Specs Box */}
                          <div className="bg-[#FBF4EE] rounded-xl p-2.5 border border-[#EADFD6] space-y-1.5">
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-[#7A685F] font-medium">Wholesale Unit Price</span>
                              <span className="font-black text-[#8C3A16] text-sm">
                                ₹280 <span className="text-[11px] font-semibold text-[#221C19]">/ pc</span>
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-[#7A685F] font-medium">Specifications</span>
                              <span className="font-bold text-[#221C19] text-[11.5px]">
                                12.4" W × 6.2" H, Wt: 420g
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-[11px] pt-1 border-t border-[#EFE5DC]">
                              <span className="font-bold text-emerald-700 flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" /> Capacity: 15 pcs / day
                              </span>
                              <span className="font-medium text-[#7A685F] flex items-center gap-1">
                                <Clock className="w-3 h-3" /> Lead: 5 – 7 days
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Distribution Channels Activated Card */}
                      <div className="bg-[#FFFDFB] rounded-2xl border border-[#EADFD6] p-3.5 shadow-2xs space-y-2.5">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-black text-[#221C19]">Distribution Channels Activated</h3>
                          <span className="bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[10px] font-bold px-2 py-0.5 rounded-full">
                            3 Active
                          </span>
                        </div>

                        <div className="space-y-2.5 pt-1">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#FFE8DC] flex items-center justify-center text-[#A84318] shrink-0">
                              <Store className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-extrabold text-[#221C19]">HunarSangam Marketplace</p>
                              <p className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live • Instant Quotations enabled
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] shrink-0">
                              <Globe className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-extrabold text-[#221C19]">ONDC Handicraft Registry</p>
                              <p className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Synced • Pan-India open network
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#F5EBE1] flex items-center justify-center text-[#7C3F24] shrink-0">
                              <Share2 className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-extrabold text-[#221C19]">Direct WhatsApp Catalog</p>
                              <p className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Link ready to share with buyers
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product Description Box */}
                      <div className="bg-[#FFFDFB] rounded-2xl border border-[#EADFD6] p-3.5 shadow-2xs space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-black text-[#221C19]">Product Description</h3>
                          <button
                            onClick={() => showToast('Playing audio description: "Handcrafted from 100% natural treated Assam bamboo..."')}
                            className="w-6 h-6 rounded-full bg-[#FAF3EE] text-[#8C3A16] flex items-center justify-center hover:bg-[#F2E5DC]"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] text-[#5A463B] leading-relaxed">
                          Handcrafted from 100% natural treated Assam bamboo with traditional lattice weave, double rim reinforcement, and food-safe finish. Ideal for dining storage, eco-friendly gift hampers, and artisanal home decor.
                        </p>
                      </div>

                      {/* WhatsApp Share Preview Note */}
                      <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl p-2.5 px-3 flex items-center gap-2 text-[10.5px] text-emerald-800 italic">
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0 not-italic" />
                        <span className="truncate">Preview: "Namaste! View my new verified craft catalog on HunarSangam..."</span>
                      </div>

                      {/* Submit & Publish CTA */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(19);
                          showToast('🎉 Craft submitted & published on ONDC!');
                        }}
                        className="w-full py-3.5 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black shadow-md flex items-center justify-center gap-2 active:scale-98 transition-all"
                      >
                        <Upload className="w-4 h-4" />
                        <span>Submit &amp; publish product</span>
                      </button>
                    </div>

                    {/* Bottom Navigation Bar */}
                    <div className="bg-white border-t border-[#EADFD6] py-1.5 px-3 flex items-center justify-around z-10 shrink-0">
                      {[
                        { label: 'Home', icon: Store, tabIdx: 0, screenIdx: 9 },
                        { label: 'Products', icon: Palette, tabIdx: 1, screenIdx: 10 },
                        { label: 'Orders', icon: FileText, tabIdx: 2, screenIdx: 10 },
                        { label: 'Collaborate', icon: Users, tabIdx: 3, screenIdx: 10 },
                        { label: 'Profile', icon: User, tabIdx: 4, screenIdx: 20 },
                      ].map((tab) => {
                        const IconComp = tab.icon;
                        const isSel = tab.tabIdx === 1;
                        return (
                          <button
                            key={tab.label}
                            onClick={() => {
                              if (tab.tabIdx === 0) {
                                setActiveScreenIndex(9);
                                setHomeBottomTab(0);
                              } else if (tab.tabIdx === 1) {
                                setActiveScreenIndex(10);
                              } else if (tab.tabIdx === 4) {
                                setActiveScreenIndex(20);
                              } else {
                                showToast(`Switched to ${tab.label} tab`);
                              }
                            }}
                            className={`flex flex-col items-center px-2 py-1 rounded-xl transition-all ${
                              isSel ? 'bg-[#F8E5D8] text-[#8C3A16] font-extrabold' : 'text-[#7A685F]'
                            }`}
                          >
                            <IconComp className="w-4 h-4 mb-0.5" />
                            <span className="text-[9.5px]">{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 20. SCREEN 19: PRODUCT FINALIZED & ONDC READY CELEBRATION (matching p10 — Product Finalized & ONDC Ready.png) */}
                {activeScreenIndex === 19 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => {
                          setActiveScreenIndex(10);
                          showToast('Navigating back to Products Catalog');
                        }}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <h2 className="text-sm font-extrabold text-[#221C19]">Catalog Published!</h2>
                      <div className="bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                        <span>Active Listing</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5 pb-6">
                      {/* Top Success Banner */}
                      <div className="bg-[#E8F5E9] border border-[#C8E6C9] rounded-2xl p-4 text-center space-y-1.5 shadow-2xs">
                        <div className="w-11 h-11 rounded-full bg-[#2E7D32] text-white flex items-center justify-center mx-auto shadow-xs">
                          <Check className="w-6 h-6 stroke-[3]" />
                        </div>
                        <p className="text-[10px] font-black tracking-wider text-[#2E7D32] uppercase pt-1">
                          B2B READY • ONDC SYNCED
                        </p>
                        <h2 className="text-base font-black text-[#1B5E20] tracking-tight">
                          Your Craft is Live &amp; Verified!
                        </h2>
                        <p className="text-[11.5px] text-[#2E7D32] leading-snug">
                          Handmade Woven Bamboo Fruit Basket is now discoverable by verified B2B buyers across India.
                        </p>
                      </div>

                      {/* ONDC Network Ready Card */}
                      <div className="bg-[#FFFDFB] rounded-2xl border border-[#EADFD6] p-3.5 shadow-2xs space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#221C19]">
                            <Globe className="w-4 h-4 text-[#2E7D32]" />
                            <span>ONDC Network Ready</span>
                          </div>
                          <span className="bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-bold px-2 py-0.5 rounded-full">
                            Pan-India Reach
                          </span>
                        </div>

                        <div className="h-px bg-[#EADFD6] w-full" />

                        {/* GI Tagged Authenticity */}
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-[#8C3A16] shrink-0" />
                          <div>
                            <p className="text-[10px] font-bold text-[#7A685F]">GI Tagged Craft Authenticity</p>
                            <p className="text-[11.5px] font-black text-[#221C19]">
                              Assam Cane &amp; Bamboo Crafts (GI Reg #431)
                            </p>
                          </div>
                        </div>

                        <div className="h-px bg-[#EADFD6] w-full" />

                        {/* Digital Listing ID + QR Code */}
                        <div className="flex items-center justify-between pt-0.5">
                          <div>
                            <p className="text-[10px] text-[#7A685F] font-medium">Listing Digital ID</p>
                            <p className="text-sm font-black text-[#8C3A16]">#HS-BAM-8842</p>
                          </div>
                          <button
                            onClick={() => showToast('ONDC Verified QR Code generated!')}
                            className="px-2.5 py-1 bg-white border border-[#E5D5CB] hover:bg-[#FAF3EE] rounded-xl text-xs font-bold text-[#4A372D] flex items-center gap-1.5 shadow-2xs"
                          >
                            <QrCode className="w-3.5 h-3.5 text-[#4A372D]" />
                            <span>QR Code</span>
                          </button>
                        </div>
                      </div>

                      {/* Product Catalog Summary Card */}
                      <div className="bg-[#FFFDFB] rounded-2xl border border-[#EADFD6] overflow-hidden shadow-2xs">
                        <div className="relative h-40 w-full bg-[#F3E7DF] overflow-hidden flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                            alt="Handmade Woven Bamboo Fruit Basket"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-xs text-white text-[9.5px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            <span>Verified Dimensions</span>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-xs text-white text-[9.5px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-3 h-3 rounded-full bg-amber-400 text-black text-[8px] font-black flex items-center justify-center">₹</span>
                            <span>Verified with ₹10 coin</span>
                          </div>
                        </div>

                        <div className="p-3 space-y-2">
                          <h3 className="text-sm font-extrabold text-[#221C19]">
                            Handmade Woven Bamboo Fruit Basket
                          </h3>

                          <div className="flex justify-between items-baseline text-xs">
                            <span className="font-black text-[#8C3A16] text-sm">
                              ₹280 <span className="text-[10.5px] font-semibold text-[#221C19]">/ pc</span>
                            </span>
                            <span className="font-semibold text-[#4A372D] text-[11px]">
                              12.4" W × 6.2" H, Wt: 420g
                            </span>
                          </div>

                          <div className="flex justify-between items-center text-[10.5px] pt-1 border-t border-[#EFE5DC]">
                            <span className="font-bold text-emerald-700">
                              📈 Capacity: 15 pcs / day
                            </span>
                            <span className="font-medium text-[#7A685F]">
                              ⏱️ Lead: 5 – 7 days
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Distribution Channels Activated Card (with Green Checkmark circles) */}
                      <div className="bg-[#FFFDFB] rounded-2xl border border-[#EADFD6] p-3.5 shadow-2xs space-y-2.5">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-black text-[#221C19]">Distribution Channels Activated</h3>
                          <span className="bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[10px] font-bold px-2 py-0.5 rounded-full">
                            3 Active
                          </span>
                        </div>

                        <div className="space-y-2 pt-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-[#FFE8DC] flex items-center justify-center text-[#A84318] shrink-0">
                                <Store className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <p className="text-[11.5px] font-extrabold text-[#221C19]">HunarSangam Marketplace</p>
                                <p className="text-[9.5px] text-emerald-700 font-semibold">Live • Instant Quotations enabled</p>
                              </div>
                            </div>
                            <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] shrink-0">
                                <Globe className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <p className="text-[11.5px] font-extrabold text-[#221C19]">ONDC Handicraft Registry</p>
                                <p className="text-[9.5px] text-emerald-700 font-semibold">Synced • Pan-India open network</p>
                              </div>
                            </div>
                            <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-[#F5EBE1] flex items-center justify-center text-[#7C3F24] shrink-0">
                                <Share2 className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <p className="text-[11.5px] font-extrabold text-[#221C19]">Direct WhatsApp Catalog</p>
                                <p className="text-[9.5px] text-emerald-700 font-semibold">Link ready to share with buyers</p>
                              </div>
                            </div>
                            <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* WhatsApp Direct Share Button */}
                      <button
                        onClick={() => showToast('💬 WhatsApp Catalog Card copied & ready to share!')}
                        className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Share Catalog Card on WhatsApp</span>
                      </button>

                      {/* Action Buttons */}
                      <div className="space-y-2 pt-1">
                        <button
                          onClick={() => {
                            setActiveScreenIndex(9);
                            setHomeBottomTab(0);
                            showToast('Returned to Artisan Dashboard');
                          }}
                          className="w-full py-3.5 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black shadow-md flex items-center justify-center gap-1.5 active:scale-98 transition-all"
                        >
                          <span>Go to Artisan Dashboard</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => {
                            setActiveScreenIndex(11);
                            showToast('Opening Voice-First Product Capture Flow');
                          }}
                          className="w-full py-2.5 bg-[#FBF4EE] hover:bg-[#F2E5DC] text-[#8C3A16] border border-[#EADFD6] rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 active:scale-98 transition-all"
                        >
                          <Mic className="w-3.5 h-3.5" />
                          <span>+ Add Another Craft (Voice)</span>
                        </button>
                      </div>
                    </div>

                    {/* Bottom Navigation Bar */}
                    <div className="bg-white border-t border-[#EADFD6] py-1.5 px-3 flex items-center justify-around z-10 shrink-0">
                      {[
                        { label: 'Home', icon: Store, tabIdx: 0, screenIdx: 9 },
                        { label: 'Products', icon: Palette, tabIdx: 1, screenIdx: 10 },
                        { label: 'Orders', icon: FileText, tabIdx: 2, screenIdx: 10 },
                        { label: 'Collaborate', icon: Users, tabIdx: 3, screenIdx: 10 },
                        { label: 'Profile', icon: User, tabIdx: 4, screenIdx: 20 },
                      ].map((tab) => {
                        const IconComp = tab.icon;
                        const isSel = tab.tabIdx === 1;
                        return (
                          <button
                            key={tab.label}
                            onClick={() => {
                              if (tab.tabIdx === 0) {
                                setActiveScreenIndex(9);
                                setHomeBottomTab(0);
                              } else if (tab.tabIdx === 1) {
                                setActiveScreenIndex(10);
                              } else if (tab.tabIdx === 4) {
                                setActiveScreenIndex(20);
                              } else {
                                showToast(`Switched to ${tab.label} tab`);
                              }
                            }}
                            className={`flex flex-col items-center px-2 py-1 rounded-xl transition-all ${
                              isSel ? 'bg-[#F8E5D8] text-[#8C3A16] font-extrabold' : 'text-[#7A685F]'
                            }`}
                          >
                            <IconComp className="w-4 h-4 mb-0.5" />
                            <span className="text-[9.5px]">{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 21. SCREEN 20: DIGITAL VISITING CARD & ARTISAN PROFILE SECTION (100% matching profile section - Digital Visiting Card.png) */}
                {activeScreenIndex === 20 && (
                  <div className="flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Top App Bar */}
                    <div className="bg-[#FFFDFB] border-b border-[#EADFD6] px-4 py-2.5 flex items-center justify-between z-10 shrink-0">
                      <div className="flex items-center gap-2.5">
                        <button
                          onClick={() => setActiveScreenIndex(9)}
                          className="p-1 rounded-full text-[#221C19] hover:bg-[#F3E7DF] active:scale-95 transition-all"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div>
                          <h2 className="text-sm font-black text-[#221C19] leading-tight">Digital Visiting Card</h2>
                          <div className="flex items-center gap-1 text-[10.5px] text-[#2E7D32] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                            <span>Official GI Identity</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Audio Listen Pill */}
                        <button
                          onClick={() => {
                            setIsPlayingAudio(!isPlayingAudio);
                            showToast(
                              isPlayingAudio
                                ? 'Audio stopped'
                                : '🎙️ Playing audio artisan passport introduction in English'
                            );
                          }}
                          className="px-2.5 py-1 bg-[#FDF2EB] border border-[#F3DFD5] text-[#8C3A16] rounded-full flex items-center gap-1.5 text-xs font-bold shadow-2xs hover:bg-[#F8E5D8] active:scale-95 transition-all"
                        >
                          <Volume2 className="w-3.5 h-3.5 text-[#8C3A16]" />
                          <span className="flex items-center gap-0.5 text-[#8C3A16]">
                            <span className="w-0.5 h-2 bg-[#8C3A16] rounded-full animate-pulse" />
                            <span className="w-0.5 h-3 bg-[#8C3A16] rounded-full animate-pulse delay-75" />
                            <span className="w-0.5 h-1.5 bg-[#8C3A16] rounded-full animate-pulse delay-150" />
                            <span className="w-0.5 h-2.5 bg-[#8C3A16] rounded-full" />
                          </span>
                          <span>Listen</span>
                        </button>

                        {/* Language Dropdown */}
                        <button
                          onClick={() => showToast('Language: English (Tap to change)')}
                          className="flex items-center gap-0.5 text-xs font-bold text-[#4A3228] hover:text-[#8C3A16] px-1 py-0.5"
                        >
                          <span>English</span>
                          <span className="text-[9px]">▾</span>
                        </button>
                      </div>
                    </div>

                    {/* Scrollable Passport Content */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                      {/* Verified Artisan Identity B2B Banner */}
                      <div className="bg-[#FFF6F0] border border-[#FBE0D2] rounded-2xl p-3.5 flex items-start gap-3 shadow-2xs">
                        <div className="w-9 h-9 rounded-xl bg-[#F9EDE6] text-[#A84318] flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-5 h-5 text-[#A84318]" />
                        </div>
                        <div>
                          <h3 className="text-xs font-black text-[#221C19] leading-snug">
                            Your Verified Artisan Identity for B2B Buyers
                          </h3>
                          <p className="text-[11px] text-[#6B584E] leading-relaxed mt-1">
                            Share via WhatsApp, print at craft melas, or show your QR passport directly at domestic and
                            export exhibitions.
                          </p>
                        </div>
                      </div>

                      {/* Add Your Craft Story by Voice CTA */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(21);
                          showToast('🎙️ Opened My Craft Story screen');
                        }}
                        className="w-full py-3 px-4 bg-[#8C140E] hover:bg-[#78100B] text-white rounded-2xl flex items-center justify-center gap-2.5 shadow-md active:scale-98 transition-all"
                      >
                        <div className="w-7 h-7 rounded-full bg-[#FDF0EB] text-[#8C140E] flex items-center justify-center shrink-0 shadow-2xs">
                          <Mic className="w-4 h-4 text-[#8C140E]" />
                        </div>
                        <span className="text-xs font-black tracking-wide">Add your craft story by voice</span>
                      </button>

                      {/* Central Digital Visiting Card (Artisan Passport) */}
                      <div className="bg-[#FFFDFB] rounded-3xl border border-[#E8DDD5] overflow-hidden shadow-xs">
                        {/* Brown Header Bar */}
                        <div className="h-1.5 bg-[#8C4421] w-full" />

                        <div className="p-4 space-y-3.5">
                          {/* Top Brand & GI Badge */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="text-base font-black text-[#8C3A16] tracking-tight">HunarSangam</span>
                              <span className="text-[9.5px] font-bold text-[#7A5A4A] bg-[#F7EFE9] px-2 py-0.5 rounded-md">
                                Artisan
                              </span>
                            </div>
                            <div className="bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[10.5px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
                              <span>GI Reg #431 – Assam Cane</span>
                            </div>
                          </div>

                          {/* Artisan Avatar & Info */}
                          <div className="flex items-center gap-3">
                            <div className="relative shrink-0">
                              <img
                                src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&auto=format&fit=crop&q=80"
                                alt="Ramu Kumar"
                                className="w-14 h-14 rounded-2xl object-cover border border-[#E8DDD5]"
                                onError={(e) => {
                                  (e.target as HTMLElement).style.display = 'none';
                                }}
                              />
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#2E7D32] rounded-full flex items-center justify-center text-white ring-2 ring-white">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <h3 className="text-sm font-black text-[#221C19]">Ramu Kumar</h3>
                                <span className="bg-[#FDF2EB] text-[#A84318] border border-[#F5D8CA] text-[9.5px] font-black px-1.5 py-0.5 rounded-md">
                                  GI Certified
                                </span>
                              </div>
                              <p className="text-[11px] font-medium text-[#6B584E] mt-0.5">
                                Master Craftsman • 3rd Gen Weaver
                              </p>
                              <p className="text-[10.5px] text-[#7A685F] flex items-center gap-1 mt-0.5">
                                <MapPin className="w-3 h-3 text-[#8C3A16]" />
                                <span>Assam &amp; Barabanki Weavers Guild</span>
                              </p>
                            </div>
                          </div>

                          {/* Merit & Wage Badges */}
                          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                            <span className="bg-[#FDF4EE] border border-[#F0DFD3] text-[#7A4A28] text-[9.5px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                              <span>🏆</span> National Merit Awardee 2019
                            </span>
                            <span className="bg-[#E8F5E9] border border-[#C8E6C9] text-[#2E7D32] text-[9.5px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                              <span>🌱</span> Fair Wage Certified
                            </span>
                          </div>

                          {/* QR Code Container */}
                          <div className="border border-dashed border-[#DCCEC4] rounded-2xl p-4 bg-white text-center space-y-3">
                            <div className="w-36 h-36 mx-auto bg-white p-2 rounded-xl flex items-center justify-center relative shadow-2xs">
                              <svg viewBox="0 0 100 100" className="w-full h-full">
                                <rect width="100" height="100" fill="white" />
                                {/* Top-Left Finder */}
                                <rect x="6" y="6" width="26" height="26" rx="4" fill="#8C3A16" />
                                <rect x="11" y="11" width="16" height="16" rx="2" fill="white" />
                                <rect x="15" y="15" width="8" height="8" rx="1" fill="#221C19" />
                                {/* Top-Right Finder */}
                                <rect x="68" y="6" width="26" height="26" rx="4" fill="#8C3A16" />
                                <rect x="73" y="11" width="16" height="16" rx="2" fill="white" />
                                <rect x="77" y="15" width="8" height="8" rx="1" fill="#221C19" />
                                {/* Bottom-Left Finder */}
                                <rect x="6" y="68" width="26" height="26" rx="4" fill="#8C3A16" />
                                <rect x="11" y="73" width="16" height="16" rx="2" fill="white" />
                                <rect x="15" y="77" width="8" height="8" rx="1" fill="#221C19" />
                                {/* Decorative Data Dots */}
                                <rect x="36" y="8" width="8" height="6" rx="1" fill="#221C19" />
                                <rect x="48" y="8" width="14" height="6" rx="1" fill="#8C3A16" />
                                <rect x="36" y="18" width="12" height="6" rx="1" fill="#221C19" />
                                <rect x="52" y="18" width="10" height="10" rx="1" fill="#221C19" />
                                <rect x="8" y="36" width="10" height="6" rx="1" fill="#221C19" />
                                <rect x="22" y="36" width="10" height="10" rx="1" fill="#8C3A16" />
                                <rect x="8" y="48" width="12" height="12" rx="1" fill="#221C19" />
                                <rect x="68" y="36" width="12" height="8" rx="1" fill="#221C19" />
                                <rect x="84" y="36" width="10" height="12" rx="1" fill="#8C3A16" />
                                <rect x="72" y="48" width="10" height="10" rx="1" fill="#221C19" />
                                <rect x="36" y="68" width="14" height="8" rx="1" fill="#8C3A16" />
                                <rect x="54" y="68" width="8" height="12" rx="1" fill="#221C19" />
                                <rect x="36" y="80" width="10" height="14" rx="1" fill="#221C19" />
                                <rect x="50" y="84" width="14" height="10" rx="1" fill="#8C3A16" />
                                <rect x="68" y="68" width="26" height="26" rx="4" fill="#221C19" />
                                <rect x="74" y="74" width="14" height="14" rx="2" fill="white" />
                                <rect x="78" y="78" width="6" height="6" rx="1" fill="#8C3A16" />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-[#8C3A16] text-white flex items-center justify-center text-xs shadow-md ring-2 ring-white font-bold">
                                  🌿
                                </div>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <p className="text-xs font-black text-[#221C19] leading-tight">
                                Scan to view live catalog, audio story &amp; verified bulk pricing
                              </p>
                              <p className="text-[10px] text-[#7A685F]">
                                Instant B2B Buyer direct connect via HunarSangam
                              </p>
                            </div>
                          </div>

                          {/* 3 Metrics Bar */}
                          <div className="bg-[#FDF5EE] rounded-2xl p-2.5 grid grid-cols-3 divide-x divide-[#EADFD6] text-center">
                            <div>
                              <p className="text-xs font-black text-[#8C3A16]">8 Types</p>
                              <p className="text-[9.5px] text-[#7A685F] font-medium">Verified Crafts</p>
                            </div>
                            <div>
                              <p className="text-xs font-black text-[#221C19]">250 pcs/mo</p>
                              <p className="text-[9.5px] text-[#7A685F] font-medium">Bulk Capacity</p>
                            </div>
                            <div>
                              <p className="text-xs font-black text-[#2E7D32]">100%</p>
                              <p className="text-[9.5px] text-[#7A685F] font-medium">On-Time Dispatch</p>
                            </div>
                          </div>

                          {/* Card ID & GI Tag */}
                          <div className="flex items-center justify-between text-[10px] pt-1 border-t border-[#F0E6DE]">
                            <span className="font-mono font-bold text-[#6B584E]">🪪 ID: HS-IND-AS-0431-RK</span>
                            <span className="font-bold text-[#2E7D32] flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5" /> Govt. GI Verified
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* QUICK SHARING Section */}
                      <div className="space-y-2.5">
                        <p className="text-[10.5px] font-black tracking-wider text-[#6B584E] uppercase">
                          QUICK SHARING
                        </p>

                        {/* WhatsApp Button */}
                        <button
                          onClick={() => showToast('📲 Opening WhatsApp with Digital Visiting Card preview...')}
                          className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-xs active:scale-98 transition-all"
                        >
                          <Send className="w-4 h-4 fill-white rotate-45 -mt-0.5" />
                          <span>Share on WhatsApp</span>
                        </button>

                        {/* PDF / Copy Link */}
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => showToast('📄 Downloading high-res PDF card for printing...')}
                            className="py-2.5 bg-[#FFF5EE] border border-[#EADFD6] hover:bg-[#FBEBE0] text-[#4A3228] font-bold text-[11px] rounded-2xl flex items-center justify-center gap-1.5 shadow-2xs active:scale-98 transition-all"
                          >
                            <Download className="w-3.5 h-3.5 text-[#8C3A16]" />
                            <span>Download PDF / Print</span>
                          </button>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText('https://hunarsangam.in/artisan/ramu-kumar-gi431');
                              showToast('🔗 Profile link copied: hunarsangam.in/artisan/ramu-kumar-gi431');
                            }}
                            className="py-2.5 bg-[#FFF5EE] border border-[#EADFD6] hover:bg-[#FBEBE0] text-[#4A3228] font-bold text-[11px] rounded-2xl flex items-center justify-center gap-1.5 shadow-2xs active:scale-98 transition-all"
                          >
                            <Link className="w-3.5 h-3.5 text-[#8C3A16]" />
                            <span>Copy Profile Link</span>
                          </button>
                        </div>

                        {/* Add to Wallet */}
                        <button
                          onClick={() => showToast('🪪 Added Artisan Passport to Apple / Google Wallet!')}
                          className="w-full py-2.5 bg-white border border-[#EADFD6] hover:bg-[#FAF3EE] text-[#4A3228] font-bold text-xs rounded-2xl flex items-center justify-center gap-2 shadow-2xs active:scale-98 transition-all"
                        >
                          <Wallet className="w-3.5 h-3.5 text-[#8C3A16]" />
                          <span>Add to Apple / Google Wallet</span>
                        </button>
                      </div>

                      {/* Visiting Card Formats Section */}
                      <div className="space-y-2.5 pt-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-black text-[#221C19]">Visiting Card Formats</h3>
                          <span className="text-[10.5px] font-bold text-[#8C3A16]">3 Templates Ready</span>
                        </div>

                        {/* Option 1: Digital Phone Card */}
                        <button
                          onClick={() => setSelectedCardTemplate('phone')}
                          className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                            selectedCardTemplate === 'phone'
                              ? 'bg-[#FFFBF8] border-[#8C3A16] ring-1 ring-[#8C3A16]'
                              : 'bg-white border-[#EADFD6]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                                selectedCardTemplate === 'phone'
                                  ? 'bg-[#8C3A16] text-white'
                                  : 'bg-[#FDF4EE] text-[#8C3A16]'
                              }`}
                            >
                              <Smartphone className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs font-black text-[#221C19]">Digital Phone Card</h4>
                              <p className="text-[10.5px] text-[#7A685F]">
                                Optimized for WhatsApp status &amp; direct phone scans
                              </p>
                            </div>
                          </div>
                          {selectedCardTemplate === 'phone' && (
                            <div className="w-5 h-5 rounded-full bg-[#8C3A16] text-white flex items-center justify-center">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </button>

                        {/* Option 2: Printable Stall Standee */}
                        <button
                          onClick={() => setSelectedCardTemplate('standee')}
                          className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                            selectedCardTemplate === 'standee'
                              ? 'bg-[#FFFBF8] border-[#8C3A16] ring-1 ring-[#8C3A16]'
                              : 'bg-white border-[#EADFD6]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                                selectedCardTemplate === 'standee'
                                  ? 'bg-[#8C3A16] text-white'
                                  : 'bg-[#FDF4EE] text-[#8C3A16]'
                              }`}
                            >
                              <Store className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs font-black text-[#221C19]">Printable Stall Standee (A4 QR)</h4>
                              <p className="text-[10.5px] text-[#7A685F]">
                                For Shilp Melas, Dastkar exhibitions &amp; trade desks
                              </p>
                            </div>
                          </div>
                          {selectedCardTemplate === 'standee' ? (
                            <div className="w-5 h-5 rounded-full bg-[#8C3A16] text-white flex items-center justify-center">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          ) : (
                            <span className="text-[10px] font-bold text-[#8C3A16] bg-[#FDF4EE] px-2 py-0.5 rounded-md">
                              Print A4
                            </span>
                          )}
                        </button>

                        {/* Option 3: Packaging Hang Tag */}
                        <button
                          onClick={() => setSelectedCardTemplate('hangtag')}
                          className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                            selectedCardTemplate === 'hangtag'
                              ? 'bg-[#FFFBF8] border-[#8C3A16] ring-1 ring-[#8C3A16]'
                              : 'bg-white border-[#EADFD6]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                                selectedCardTemplate === 'hangtag'
                                  ? 'bg-[#8C3A16] text-white'
                                  : 'bg-[#FDF4EE] text-[#8C3A16]'
                              }`}
                            >
                              <Tag className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs font-black text-[#221C19]">Packaging Hang Tag (Mini QR)</h4>
                              <p className="text-[10.5px] text-[#7A685F]">
                                Attach with dispatched cane &amp; bamboo handicraft lots
                              </p>
                            </div>
                          </div>
                          {selectedCardTemplate === 'hangtag' ? (
                            <div className="w-5 h-5 rounded-full bg-[#8C3A16] text-white flex items-center justify-center">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          ) : (
                            <span className="text-[10px] font-bold text-[#8C3A16] bg-[#FDF4EE] px-2 py-0.5 rounded-md">
                              Batch (50)
                            </span>
                          )}
                        </button>
                      </div>

                      {/* Share Digital Card Now Primary Button */}
                      <button
                        onClick={() => showToast('🚀 Sharing Digital Visiting Card via Native Share Drawer...')}
                        className="w-full py-3.5 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black shadow-md flex items-center justify-center gap-2 active:scale-98 transition-all"
                      >
                        <Share2 className="w-4 h-4" />
                        <span>Share Digital Card Now</span>
                      </button>
                    </div>

                    {/* Bottom Navigation Bar (5 tabs matching Home & Products sections) */}
                    <div className="bg-white border-t border-[#EADFD6] py-1.5 px-3 flex items-center justify-around z-10 shrink-0">
                      {[
                        { label: 'Home', icon: Store, tabIdx: 0, screenIdx: 9 },
                        { label: 'Products', icon: Palette, tabIdx: 1, screenIdx: 10 },
                        { label: 'Orders', icon: FileText, tabIdx: 2, screenIdx: 10 },
                        { label: 'Collaborate', icon: Users, tabIdx: 3, screenIdx: 10 },
                        { label: 'Profile', icon: User, tabIdx: 4, screenIdx: 20 },
                      ].map((tab) => {
                        const IconComp = tab.icon;
                        const isSel = tab.tabIdx === 4;
                        return (
                          <button
                            key={tab.label}
                            onClick={() => {
                              if (tab.tabIdx === 0) {
                                setActiveScreenIndex(9);
                                setHomeBottomTab(0);
                              } else if (tab.tabIdx === 1) {
                                setActiveScreenIndex(10);
                              } else if (tab.tabIdx === 4) {
                                setActiveScreenIndex(20);
                              } else {
                                showToast(`Switched to ${tab.label} tab`);
                              }
                            }}
                            className={`flex flex-col items-center px-2 py-1 rounded-xl transition-all ${
                              isSel ? 'bg-[#F8E5D8] text-[#8C3A16] font-extrabold' : 'text-[#7A685F]'
                            }`}
                          >
                            <IconComp className="w-4 h-4 mb-0.5" />
                            <span className="text-[9.5px]">{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 22. SCREEN 21: MY CRAFT STORY (100% matching — Digital Craft Story add from profile section.png) */}
                {activeScreenIndex === 21 && (
                  <div className="flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Top App Bar */}
                    <div className="bg-[#FFFDFB] border-b border-[#EADFD6] px-4 py-2.5 flex items-center justify-between z-10 shrink-0">
                      <div className="flex items-center gap-2.5">
                        <button
                          onClick={() => setActiveScreenIndex(20)}
                          className="p-1 rounded-full text-[#221C19] hover:bg-[#F3E7DF] active:scale-95 transition-all"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </button>
                        <h2 className="text-base font-black text-[#221C19] leading-tight">My Craft Story</h2>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Audio Guide Pill */}
                        <button
                          onClick={() => {
                            setIsCraftStoryAudioGuidePlaying(!isCraftStoryAudioGuidePlaying);
                            showToast(
                              isCraftStoryAudioGuidePlaying
                                ? 'Audio Guide stopped'
                                : '🎙️ Playing Audio Guide: How to record your artisan heritage craft story'
                            );
                          }}
                          className="px-2.5 py-1 bg-[#FDF2EB] border border-[#F3DFD5] text-[#8C3A16] rounded-full flex items-center gap-1.5 text-xs font-bold shadow-2xs hover:bg-[#F8E5D8] active:scale-95 transition-all"
                        >
                          <Volume2 className="w-3.5 h-3.5 text-[#8C3A16]" />
                          <div className="text-left leading-none">
                            <span className="text-[9.5px] block font-bold text-[#8C3A16]">Audio</span>
                            <span className="text-[9px] block font-bold text-[#8C3A16]">Guide</span>
                          </div>
                        </button>

                        {/* Language Dropdown */}
                        <button
                          onClick={() => showToast('Language: English (Tap to change)')}
                          className="flex items-center gap-0.5 text-xs font-bold text-[#4A3228] hover:text-[#8C3A16] px-1 py-0.5"
                        >
                          <span>English</span>
                          <span className="text-[9px]">▾</span>
                        </button>
                      </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                      {/* Artisan Profile Header Card */}
                      <div className="bg-[#FFFDFB] rounded-3xl border border-[#EADFD6] p-3.5 space-y-3 shadow-2xs">
                        <div className="flex items-center gap-3">
                          <div className="relative shrink-0">
                            <img
                              src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&auto=format&fit=crop&q=80"
                              alt="Ramu Kumar"
                              className="w-14 h-14 rounded-2xl object-cover border border-[#E8DDD5]"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#8C2E18] rounded-full flex items-center justify-center text-white ring-2 ring-white">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-black text-[#221C19] leading-tight">Ramu Kumar</h3>
                            <p className="text-xs font-bold text-[#8C2E18] mt-0.5">
                              National Merit Handicraft Awardee
                            </p>
                            <p className="text-[11px] text-[#6B584E] flex items-center gap-1 mt-0.5 font-medium truncate">
                              <MapPin className="w-3 h-3 text-[#8C3A16] shrink-0" />
                              <span>Bamboo &amp; Cane Plaiting • Assam &amp; Barabanki</span>
                            </p>
                          </div>
                        </div>

                        {/* Badges Row */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                          <span className="bg-[#E8F5E9] border border-[#C8E6C9] text-[#2E7D32] text-[10.5px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <Check className="w-3 h-3 stroke-[2.5]" /> GI Registered #431
                          </span>
                          <span className="bg-[#F7EFE9] border border-[#E8DDD5] text-[#4A3228] text-[10.5px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <span>🎖️</span> Master Craftsman
                          </span>
                          <span className="bg-[#FDF2EB] border border-[#F5D8CA] text-[#8C3A16] text-[10.5px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <span>🌱</span> 3rd Gen Weaver
                          </span>
                        </div>
                      </div>

                      {/* Tell Your Story in Your Voice Card */}
                      <div className="bg-[#FFF8F5] border border-[#F6E1D7] rounded-3xl p-4 space-y-3.5 shadow-2xs">
                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-[#FCEFE8] text-[#8C2E18] flex items-center justify-center shrink-0 mt-0.5">
                            <Mic className="w-4 h-4 text-[#8C2E18]" />
                          </div>
                          <div>
                            <h3 className="text-sm font-black text-[#221C19] leading-tight">
                              Tell Your Story in Your Voice
                            </h3>
                            <p className="text-[10.5px] font-bold text-[#8C2E18] mt-0.5">
                              Zero Typing Needed • Native Dialects Supported
                            </p>
                          </div>
                        </div>

                        <p className="text-[11px] text-[#6B584E] leading-relaxed">
                          Speak naturally in Hindi, Assamese, or your mother tongue. Describe your family roots, cane
                          seasoning secrets, and cluster weavers. AI translates and refines it for global B2B buyers.
                        </p>

                        {/* Prompt Suggestion Box */}
                        <div className="bg-[#FFF0E7] border border-[#FCDCCE] rounded-xl p-2 flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#8C2E18] text-white flex items-center justify-center shrink-0">
                            <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                          </div>
                          <p className="text-[11px] text-[#6B584E] italic truncate">
                            Prompt: &quot;I learned cane weaving from my father...&quot;
                          </p>
                        </div>

                        {/* Big Central Record Button */}
                        <div className="flex flex-col items-center justify-center py-1">
                          <button
                            onClick={() => {
                              setIsCraftStoryRecording(!isCraftStoryRecording);
                              showToast(
                                isCraftStoryRecording
                                  ? '✅ Recording saved & AI structured your story'
                                  : '🎙️ Recording voice note in Hindi/Assamese... Speak freely'
                              );
                            }}
                            className="w-16 h-16 rounded-full bg-[#FCE2D5] flex items-center justify-center active:scale-95 transition-all shadow-inner relative group"
                          >
                            <div className="w-12 h-12 rounded-full bg-[#8C2E18] hover:bg-[#782310] text-white flex items-center justify-center shadow-md transition-all">
                              {isCraftStoryRecording ? (
                                <span className="w-4 h-4 bg-white rounded-xs animate-pulse" />
                              ) : (
                                <Mic className="w-5 h-5 text-white" />
                              )}
                            </div>
                            {isCraftStoryRecording && (
                              <span className="absolute -inset-1 rounded-full border-2 border-[#8C2E18] animate-ping opacity-50" />
                            )}
                          </button>
                          <p className="text-xs font-black text-[#221C19] mt-2">Tap to Record New Note</p>
                          <p className="text-[10px] text-[#7A685F] font-medium">Recommended: 1 to 2 minutes</p>
                        </div>

                        {/* Active Voice Note Player Bar */}
                        <div className="bg-white border border-[#EBDCD2] rounded-2xl p-3 space-y-2 shadow-2xs">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
                              <span className="text-xs font-black text-[#221C19]">Artisan Voice Note (0:48)</span>
                            </div>
                            <span className="text-[10.5px] font-medium text-[#7A685F]">Recorded Today</span>
                          </div>

                          <div className="flex items-center gap-2 pt-0.5">
                            <button
                              onClick={() => {
                                setIsPlayingCraftVoiceNote(!isPlayingCraftVoiceNote);
                                showToast(
                                  isPlayingCraftVoiceNote
                                    ? 'Audio paused'
                                    : '▶️ Playing original artisan audio recording'
                                );
                              }}
                              className="w-7 h-7 rounded-full bg-[#8C2E18] text-white flex items-center justify-center shrink-0 hover:bg-[#782310] active:scale-95 shadow-2xs"
                            >
                              {isPlayingCraftVoiceNote ? (
                                <Pause className="w-3.5 h-3.5 fill-white" />
                              ) : (
                                <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
                              )}
                            </button>

                            {/* Waveform Bars */}
                            <div className="flex-1 flex items-center justify-between gap-1 px-1 h-6">
                              {[
                                8, 14, 20, 12, 18, 24, 16, 10, 22, 18, 12, 20, 16, 10, 18, 14, 8, 16, 12, 6,
                              ].map((h, i) => {
                                const isHighlighted = isPlayingCraftVoiceNote ? i < 12 : i % 3 === 0;
                                return (
                                  <div
                                    key={i}
                                    style={{ height: `${h}px` }}
                                    className={`w-1 rounded-full transition-all ${
                                      isHighlighted ? 'bg-[#A84318]' : 'bg-[#F5C7B2]'
                                    }`}
                                  />
                                );
                              })}
                            </div>

                            <button
                              onClick={() => showToast('🎙️ Ready to re-record voice note')}
                              className="p-1 rounded-full text-[#7A685F] hover:text-[#8C2E18] active:scale-90 transition-all"
                            >
                              <RotateCcw className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* AI-Crafted Buyer Story Section */}
                      <div className="bg-[#FFFDFB] rounded-3xl border border-[#EADFD6] p-4 space-y-3.5 shadow-2xs">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-black text-[#221C19]">AI-Crafted Buyer Story</h3>
                          <div className="bg-[#FDF2EB] text-[#8C3A16] border border-[#F5D8CA] text-[9.5px] font-black px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#8C3A16]" />
                            <span>Voice-Preserved</span>
                          </div>
                        </div>

                        <p className="text-[11px] text-[#6B584E] leading-relaxed">
                          Summarized and structured automatically for international buyers, retail brands, and craft
                          exhibitions.
                        </p>

                        {/* Subsection 1 */}
                        <div className="bg-[#FFF8F4] border-l-4 border-l-[#8C2E18] border border-[#F2DFD4] rounded-2xl p-3.5 space-y-1.5 shadow-2xs">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#8C2E18] text-xs">📜</span>
                            <h4 className="text-xs font-black text-[#221C19]">
                              3 Generations of Sustainable Cane Weaving
                            </h4>
                          </div>
                          <p className="text-[11px] text-[#523E34] leading-relaxed">
                            Rooted in the rich artisan traditions of Northeast India, our family has practiced
                            sustainable bamboo plaiting for over 45 years. Passed down through three generations in
                            Assam and Barabanki, every warp and weft honors timeless tribal interlocking practices.
                          </p>
                        </div>

                        {/* Subsection 2 */}
                        <div className="bg-[#F8FAF7] border-l-4 border-l-[#2E7D32] border border-[#E0EBE1] rounded-2xl p-3.5 space-y-1.5 shadow-2xs">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#2E7D32] text-xs">🌱</span>
                            <h4 className="text-xs font-black text-[#221C19]">Zero-Chemical, Food-Safe Craft</h4>
                          </div>
                          <p className="text-[11px] text-[#523E34] leading-relaxed">
                            Each piece is hand-harvested from mature riverbed bamboo, seasoned in natural pit smoke, and
                            treated with an organic mustard-seed oil finish. Designed for conscious contemporary
                            spaces—entirely biodegradable, food-safe, and chemical-free.
                          </p>
                        </div>

                        {/* Subsection 3 */}
                        <div className="bg-[#FAF7F5] border-l-4 border-l-[#7A4A28] border border-[#EFE5DC] rounded-2xl p-3.5 space-y-1.5 shadow-2xs">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#7A4A28] text-xs">👥</span>
                            <h4 className="text-xs font-black text-[#221C19]">Empowering 14 Cluster Weavers</h4>
                          </div>
                          <p className="text-[11px] text-[#523E34] leading-relaxed">
                            Today Ramu leads a decentralized guild of 14 rural artisans, including 9 women master
                            weavers. This collective fulfills export-grade wholesale contracts while funding apprentice
                            workshops for young village artisans.
                          </p>
                        </div>

                        {/* Tap to edit with voice */}
                        <button
                          onClick={() => showToast('🎙️ Voice Assistant ready: Speak to edit or add details...')}
                          className="w-full py-2.5 px-3 bg-[#FFF8F5] border border-[#E2D2C7] rounded-xl text-[#8C2E18] text-xs font-black flex items-center justify-center gap-1.5 hover:bg-[#FDF0E9] active:scale-98 transition-all"
                        >
                          <Mic className="w-3.5 h-3.5 text-[#8C2E18]" />
                          <span>Tap to edit or add details with voice</span>
                        </button>
                      </div>

                      {/* Where Your Story Appears Card */}
                      <div className="bg-[#FFFDFB] rounded-3xl border border-[#EADFD6] p-4 space-y-3 shadow-2xs">
                        <div className="flex items-center gap-2">
                          <Store className="w-4 h-4 text-[#8C2E18]" />
                          <h3 className="text-xs font-black text-[#221C19]">Where Your Story Appears</h3>
                        </div>

                        <div className="space-y-2">
                          {/* Item 1 */}
                          <div className="p-2.5 bg-[#FFFBF8] rounded-2xl border border-[#F0E4DA] flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-[#FDECE2] text-[#8C2E18] flex items-center justify-center shrink-0">
                              <FileText className="w-4 h-4 text-[#8C2E18]" />
                            </div>
                            <div>
                              <p className="text-xs font-black text-[#221C19]">Attached to B2B Quotations</p>
                              <p className="text-[10px] text-[#6B584E]">Improves wholesale order acceptance by 68%</p>
                            </div>
                          </div>

                          {/* Item 2 */}
                          <div className="p-2.5 bg-[#FFFBF8] rounded-2xl border border-[#F0E4DA] flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center shrink-0">
                              <Tag className="w-4 h-4 text-[#2E7D32]" />
                            </div>
                            <div>
                              <p className="text-xs font-black text-[#221C19]">ONDC &amp; Shilp Samagam Tags</p>
                              <p className="text-[10px] text-[#6B584E]">Printed on certified GI craft labels</p>
                            </div>
                          </div>

                          {/* Item 3 */}
                          <div className="p-2.5 bg-[#FFFBF8] rounded-2xl border border-[#F0E4DA] flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-[#FDF0E5] text-[#A84318] flex items-center justify-center shrink-0">
                              <QrCode className="w-4 h-4 text-[#A84318]" />
                            </div>
                            <div>
                              <p className="text-xs font-black text-[#221C19]">Digital Visiting Card (Screen 20)</p>
                              <p className="text-[10px] text-[#6B584E]">
                                Instant QR code for buyer WhatsApp &amp; trade fairs
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="bg-[#FFFDFB] border-t border-[#EADFD6] p-3 space-y-2 z-10 shrink-0">
                      {/* Save & Publish */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(20);
                          showToast('🎉 Craft Story saved and published to your Digital Visiting Card & B2B profile!');
                        }}
                        className="w-full py-3.5 bg-[#8C2E18] hover:bg-[#782310] text-white rounded-2xl text-xs font-black shadow-md flex items-center justify-center gap-2 active:scale-98 transition-all"
                      >
                        <span>Save &amp; Publish Craft Story</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      {/* Secondary buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => showToast('🎙️ Re-recording voice story... Speak naturally')}
                          className="py-2.5 bg-[#FFF5EE] border border-[#EADFD6] hover:bg-[#FBEBE0] text-[#4A3228] font-bold text-[11px] rounded-2xl flex items-center justify-center gap-1.5 shadow-2xs active:scale-98 transition-all"
                        >
                          <Mic className="w-3.5 h-3.5 text-[#8C2E18]" />
                          <span>Re-Tell With Voice</span>
                        </button>
                        <button
                          onClick={() => {
                            setActiveScreenIndex(20);
                            showToast('👀 Showing how buyers see your verified craft story on your profile card');
                          }}
                          className="py-2.5 bg-[#FFF5EE] border border-[#EADFD6] hover:bg-[#FBEBE0] text-[#4A3228] font-bold text-[11px] rounded-2xl flex items-center justify-center gap-1.5 shadow-2xs active:scale-98 transition-all"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#8C2E18]" />
                          <span>Preview Buyer View</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* UPDATE PROGRESS MODAL DIALOG */}
                {showProgressModal && (
                  <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-5 border border-[#E8DDD5] shadow-2xl w-full max-w-[300px]">
                      <h3 className="text-base font-extrabold text-[#2D2421] mb-2">Update Craft Progress</h3>
                      <p className="text-xs text-[#7A685F] mb-4">
                        50 Handmade Bamboo Baskets for FabIndia Sourcing Hub
                      </p>

                      <div className="space-y-3 mb-5">
                        <div className="flex justify-between text-xs font-bold text-[#A84318]">
                          <span>Completed Units:</span>
                          <span>{bambooProgress} / 50</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="50"
                          value={bambooProgress}
                          onChange={(e) => setBambooProgress(Number(e.target.value))}
                          className="w-full accent-[#8C3A16]"
                        />
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => setShowProgressModal(false)}
                          className="flex-1 py-2 bg-[#F4EDE7] rounded-xl text-xs font-bold text-[#6B584E]"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            setShowProgressModal(false);
                            showToast(`Updated progress to ${bambooProgress}/50 completed!`);
                          }}
                          className="flex-1 py-2 bg-[#8C3A16] text-white rounded-xl text-xs font-bold"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Controls Info */}
            <p className="text-xs text-[#8A756C] mt-3 text-center">
              💡 <b>Tip:</b> Click <b>"🔑 Login Screen"</b> or <b>"🏠 Artisan Home"</b> in the top stepper to inspect the exact screens matching your screenshots!
            </p>
          </div>
        ) : (
          /* CODE INSPECTOR VIEW */
          <div className="w-full max-w-4xl bg-[#1E1E1E] rounded-2xl shadow-xl border border-[#333] overflow-hidden flex flex-col h-[740px]">
            {/* File Switcher */}
            <div className="bg-[#252526] px-4 py-2 flex items-center justify-between border-b border-[#333] overflow-x-auto">
              <div className="flex items-center gap-1.5">
                {Object.keys(DART_FILES).map((fileName) => (
                  <button
                    key={fileName}
                    onClick={() => setSelectedFile(fileName)}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                      selectedFile === fileName
                        ? 'bg-[#1E1E1E] text-white font-semibold border-t-2 border-[#D9794E]'
                        : 'text-neutral-400 hover:text-neutral-200 hover:bg-[#2D2D2D]'
                    }`}
                  >
                    {fileName}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleCopy(DART_FILES[selectedFile].content, selectedFile)}
                className="flex items-center gap-1.5 px-3 py-1 bg-[#333] hover:bg-[#444] text-neutral-200 rounded-md text-xs font-medium transition-all shrink-0"
              >
                {copiedKey === selectedFile ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy File</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-[#181818] px-4 py-1.5 text-[11px] font-mono text-neutral-400 border-b border-[#282828] flex items-center justify-between">
              <span>{DART_FILES[selectedFile].path}</span>
              <span className="text-[10px] text-neutral-500 uppercase">{DART_FILES[selectedFile].language}</span>
            </div>

            <div className="flex-1 p-4 overflow-auto font-mono text-xs text-neutral-300 leading-relaxed bg-[#1E1E1E]">
              <pre className="whitespace-pre">
                <code>{DART_FILES[selectedFile].content}</code>
              </pre>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
