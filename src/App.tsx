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
} from 'lucide-react';

const DART_FILES: Record<string, { path: string; language: string; content: string }> = {
  'artisan_products_screen.dart': {
    path: 'lib/screens/artisan_products_screen.dart',
    language: 'dart',
    content: `// lib/screens/artisan_products_screen.dart
import 'package:flutter/material.dart';
import '../models/onboarding_state.dart';

class ArtisanProductItem {
  final String id;
  final String title;
  final String subtitle;
  final String statusBadge;
  final bool isOndcReady;
  final bool isDraft;
  final String size;
  final int price;
  final String unit;
  final int moq;
  final String moqUnit;
  final int views;
  final int inquiries;
  final int inStock;
  final String imageUrl;
  final String craftEmoji;
  final List<Color> gradientColors;

  const ArtisanProductItem({
    required this.id,
    required this.title,
    required this.subtitle,
    required this.statusBadge,
    this.isOndcReady = true,
    this.isDraft = false,
    required this.size,
    required this.price,
    this.unit = 'piece',
    required this.moq,
    this.moqUnit = 'pcs',
    required this.views,
    required this.inquiries,
    required this.inStock,
    required this.imageUrl,
    required this.craftEmoji,
    required this.gradientColors,
  });
}

class ArtisanProductsScreen extends StatefulWidget {
  final OnboardingState? state;
  final Function(int)? onNavigateTab;

  const ArtisanProductsScreen({
    Key? key,
    this.state,
    this.onNavigateTab,
  }) : super(key: key);

  @override
  State<ArtisanProductsScreen> createState() => _ArtisanProductsScreenState();
}

class _ArtisanProductsScreenState extends State<ArtisanProductsScreen> {
  int _selectedFilterIndex = 0;
  String _selectedLanguage = 'English';
  int _currentNavIndex = 1; // Products tab active

  final List<String> _filters = [
    'All (8)',
    'Published (6)',
    '🟢 ONDC Synced (5)',
    'Drafts (2)',
  ];

  final List<ArtisanProductItem> _products = const [
    ArtisanProductItem(
      id: 'prod_1',
      title: 'Handmade Woven Bamboo Fruit Basket',
      subtitle: 'GI Tag: Assam Cane & Bamboo Work (GI-429)',
      statusBadge: 'Active • ONDC Ready',
      isOndcReady: true,
      size: '12.4" × 6.2"',
      price: 280,
      unit: 'piece',
      moq: 20,
      moqUnit: 'pcs',
      views: 480,
      inquiries: 8,
      inStock: 140,
      imageUrl: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80',
      craftEmoji: '🧺',
      gradientColors: [Color(0xFF8B5A2B), Color(0xFFD2B48C)],
    ),
    ArtisanProductItem(
      id: 'prod_2',
      title: 'Assam Golden Cane Planter Basket',
      subtitle: 'Natural Cane Weave • Water Resistant Finish',
      statusBadge: 'Active • ONDC Ready',
      isOndcReady: true,
      size: '14" × 10"',
      price: 420,
      unit: 'piece',
      moq: 15,
      moqUnit: 'pcs',
      views: 310,
      inquiries: 4,
      inStock: 65,
      imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=80',
      craftEmoji: '🪴',
      gradientColors: [Color(0xFFA0522D), Color(0xFFE9967A)],
    ),
    ArtisanProductItem(
      id: 'prod_3',
      title: 'Hand-plaited Bamboo Storage Box with Lid',
      subtitle: 'Durable Storage • Naturally Treated Cane',
      statusBadge: 'Active • HunarSangam Live',
      isOndcReady: false,
      size: '10" × 8"',
      price: 350,
      unit: 'piece',
      moq: 25,
      moqUnit: 'pcs',
      views: 290,
      inquiries: 3,
      inStock: 90,
      imageUrl: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&auto=format&fit=crop&q=80',
      craftEmoji: '📦',
      gradientColors: [Color(0xFF5C4033), Color(0xFF8B4513)],
    ),
    ArtisanProductItem(
      id: 'prod_4',
      title: 'Miniature Bamboo Tea Coaster Set (6 pcs)',
      subtitle: 'Listing incomplete • Add clear white studio background',
      statusBadge: 'Draft (Need Photo Enhancer)',
      isOndcReady: false,
      isDraft: true,
      size: '4" dia',
      price: 180,
      unit: 'set',
      moq: 50,
      moqUnit: 'sets',
      views: 0,
      inquiries: 0,
      inStock: 200,
      imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
      craftEmoji: '🪵',
      gradientColors: [Color(0xFF708090), Color(0xFFD3D3D3)],
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Cluster & Profile Overview Card
              _buildClusterHeaderCard(),
              const SizedBox(height: 14.0),
              _buildAddProductButton(),
              const SizedBox(height: 10.0),
              _buildSearchVoiceBar(),
              const SizedBox(height: 12.0),
              _buildFilterChipsRow(),
              const SizedBox(height: 16.0),
              ..._products.map((item) => _buildProductCard(item)).toList(),
            ],
          ),
        ),
      ),
    );
  }
}`,
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

  // 2-Second Timer State for Splash Screen
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);
  const [timeLeftMs, setTimeLeftMs] = useState<number>(2000);
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

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Splash 2-second timer effect
  useEffect(() => {
    if (activeScreenIndex === 0 && isTimerActive) {
      setTimeLeftMs(2000);
      const interval = 50;
      let remaining = 2000;

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
    setTimeLeftMs(2000);
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
    { idx: 18, label: '👓 18. 3D & AR Preview' },
    { idx: 19, label: '🎉 19. ONDC Finalized' },
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
                      if (pill.idx === 0) setTimeLeftMs(2000);
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

                {/* 1. SCREEN 0: SPLASH */}
                {activeScreenIndex === 0 && (
                  <div className="flex-1 flex flex-col bg-[#FBF2EE] relative overflow-hidden">
                    {isTimerActive && (
                      <div className="w-full bg-[#EADFD6] h-1.5 relative overflow-hidden">
                        <div
                          className="h-full bg-[#A84318] transition-all duration-75 ease-linear"
                          style={{ width: `${((2000 - timeLeftMs) / 2000) * 100}%` }}
                        />
                      </div>
                    )}

                    <div className="px-5 pt-2 flex items-center justify-between z-10">
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F3E7DF] border border-[#E5D5CB] rounded-full shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                        <span className="text-[10px] font-bold tracking-wider text-[#4A3B32]">SIH INITIATIVE</span>
                      </div>
                      <span className="text-xs font-semibold text-[#8C3A16] flex items-center gap-1">
                        <Timer className="w-3.5 h-3.5" /> {(timeLeftMs / 1000).toFixed(1)}s
                      </span>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center px-6 text-center z-10">
                      <div className="relative w-30 h-30 bg-[#FFFBF9] rounded-[28px] border-[3.5px] border-[#B85324] shadow-lg flex flex-col items-center justify-center p-3 mb-4">
                        <span className="font-serif font-black text-base text-[#7C3F24]">हुनर संगम</span>
                        <span className="text-[7px] font-bold text-[#8C5338] tracking-widest mt-1">कला • शिल्प • एकता</span>
                      </div>

                      <h2 className="text-2xl font-black text-[#7C3F24] mb-1">HunarSangam</h2>
                      <p className="text-sm font-bold text-[#2D2421] mb-2 max-w-[240px] leading-snug">
                        Where Artisans Connect, Collaborate &amp; Grow
                      </p>

                      <div className="flex items-center gap-2 text-xs font-semibold text-[#7B665C] mb-6">
                        <span>Connect</span>
                        <span className="w-1 h-1 rounded-full bg-[#B85324]" />
                        <span>Collaborate</span>
                        <span className="w-1 h-1 rounded-full bg-[#B85324]" />
                        <span>Create</span>
                      </div>

                      <button
                        onClick={() => setActiveScreenIndex(1)}
                        className="w-full py-3 bg-[#A84318] hover:bg-[#923712] text-white rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 mb-3 cursor-pointer"
                      >
                        <span>Get Started • शुरू करें</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-[#5A483E]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
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
                                setHomeBottomTab(0);
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

                {/* 14. SCREEN 13: PHOTO & DIMENSION REVIEW (matching photo and dimension review.png) */}
                {activeScreenIndex === 13 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(12)}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <h2 className="text-xs font-black text-[#2D2421]">Step 2 of 5: Dimensions &amp; Scale</h2>
                      <div className="w-4" />
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                      {/* Success extraction badge */}
                      <div className="bg-[#EDF7ED] border border-[#C8E6C9] rounded-2xl p-3 flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                        <div>
                          <p className="text-xs font-black text-emerald-900">99.2% Dimension Accuracy</p>
                          <p className="text-[10px] text-emerald-700 font-semibold">Extracted against ₹10 reference coin</p>
                        </div>
                      </div>

                      {/* Dimension Display Cards */}
                      <div className="bg-white rounded-2xl p-3.5 border border-[#EADFD6] space-y-3 shadow-2xs">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-extrabold text-[#2D2421]">Auto-Extracted Dimensions:</h3>
                          <div className="flex bg-[#F4ECE5] p-0.5 rounded-lg text-[10px] font-bold">
                            <button
                              onClick={() => setDimensionUnit('inches')}
                              className={`px-2 py-0.5 rounded-md ${dimensionUnit === 'inches' ? 'bg-[#8C3A16] text-white' : 'text-[#7A685F]'}`}
                            >
                              Inches
                            </button>
                            <button
                              onClick={() => setDimensionUnit('cm')}
                              className={`px-2 py-0.5 rounded-md ${dimensionUnit === 'cm' ? 'bg-[#8C3A16] text-white' : 'text-[#7A685F]'}`}
                            >
                              cm
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-[#FAF4F0] p-2.5 rounded-xl border border-[#EADFD6]">
                            <p className="text-[10px] text-[#7A685F] font-semibold">Length / Top Width</p>
                            <p className="text-sm font-black text-[#8C3A16]">{dimensionUnit === 'inches' ? '12.4 in' : '31.5 cm'}</p>
                          </div>
                          <div className="bg-[#FAF4F0] p-2.5 rounded-xl border border-[#EADFD6]">
                            <p className="text-[10px] text-[#7A685F] font-semibold">Height</p>
                            <p className="text-sm font-black text-[#8C3A16]">{dimensionUnit === 'inches' ? '6.2 in' : '15.7 cm'}</p>
                          </div>
                          <div className="bg-[#FAF4F0] p-2.5 rounded-xl border border-[#EADFD6]">
                            <p className="text-[10px] text-[#7A685F] font-semibold">Base Diameter</p>
                            <p className="text-sm font-black text-[#8C3A16]">{dimensionUnit === 'inches' ? '8.0 in' : '20.3 cm'}</p>
                          </div>
                          <div className="bg-[#FAF4F0] p-2.5 rounded-xl border border-[#EADFD6]">
                            <p className="text-[10px] text-[#7A685F] font-semibold">Estimated Weight</p>
                            <p className="text-sm font-black text-[#2D2421]">~240 grams</p>
                          </div>
                        </div>

                        <div className="bg-[#F0FDF4] p-2 rounded-xl border border-[#DCFCE7] text-[10.5px] font-semibold text-emerald-800 flex items-center gap-1.5">
                          <Package className="w-3.5 h-3.5" />
                          <span>ONDC Shipping Category: <b>Small Volumetric Standard Box</b></span>
                        </div>
                      </div>

                      {/* Confirm & Next CTA */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(14);
                          showToast('Dimensions confirmed!');
                        }}
                        className="w-full py-3 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                      >
                        <span>Confirm Dimensions &amp; Voice Describe</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* 15. SCREEN 14: RAW MATERIAL & VOICE INTAKE (matching p5-desciption all about product with raw materila cost  voice serach.png) */}
                {activeScreenIndex === 14 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(13)}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <h2 className="text-xs font-black text-[#2D2421]">Step 3 of 5: Voice &amp; Raw Material</h2>
                      <div className="w-4" />
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                      {/* Voice Intake Banner */}
                      <div className="bg-[#FAF5F0] rounded-2xl p-3 border border-[#E5D5CB]">
                        <div className="flex items-center gap-2 text-xs font-extrabold text-[#8C3A16] mb-1.5">
                          <Mic className="w-4 h-4 animate-pulse" />
                          <span>Voice Story Transcription</span>
                        </div>
                        <div className="bg-white rounded-xl p-2.5 border border-[#EADFD6] text-[11px] text-[#4A372D] font-medium leading-relaxed italic">
                          "मैंने असमिया भोला बैम्बू और जाटी बैम्बू से यह फ्रूट बास्केट बनाई है। इसमें 2 बैम्बू पोल्स लगे, फिनिशिंग में नेचुरल वॉर्निश की 2 कोटिंग है।"
                        </div>
                      </div>

                      {/* AI Extracted Raw Material Cost Breakdown */}
                      <div className="bg-white rounded-2xl p-3.5 border border-[#EADFD6] space-y-2.5 shadow-2xs">
                        <h3 className="text-xs font-extrabold text-[#2D2421]">Extracted Raw Material Cost:</h3>
                        <div className="space-y-1.5 text-xs text-[#4A372D]">
                          <div className="flex justify-between">
                            <span className="text-[11px]">Assam Jati Bamboo Pole (2 pcs)</span>
                            <span className="font-bold">₹80.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[11px]">Cane Plaiting Strips (1 bundle)</span>
                            <span className="font-bold">₹30.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[11px]">Herbal Eco-Varnish Polish</span>
                            <span className="font-bold">₹15.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[11px]">Sandpaper &amp; Tools Depreciation</span>
                            <span className="font-bold">₹10.00</span>
                          </div>
                          <div className="border-t border-[#F0E6DE] pt-1.5 flex justify-between font-black text-[#8C3A16]">
                            <span>Total Raw Material Cost:</span>
                            <span>₹{rawMaterialCost}.00</span>
                          </div>
                        </div>

                        <div className="bg-[#E0F2FE] p-2 rounded-xl border border-[#BAE6FD] text-[10.5px] font-bold text-[#0369A1] flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Crafting Time: <b>3.5 hours</b> per unit by master artisan</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(15);
                          showToast('Generating AI Description & GI-Tag...');
                        }}
                        className="w-full py-3 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                      >
                        <span>Generate Smart Description &amp; GI-Tag</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* 16. SCREEN 15: AI DESCRIPTION REVIEW & GI-TAG (matching p6-decsiption review.png) */}
                {activeScreenIndex === 15 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(14)}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <h2 className="text-xs font-black text-[#2D2421]">Step 4 of 5: AI Description &amp; GI Tag</h2>
                      <div className="w-4" />
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                      {/* Product Verified Header */}
                      <div className="bg-white rounded-2xl p-3.5 border border-[#EADFD6] space-y-2 shadow-2xs">
                        <h3 className="text-xs font-black text-[#2D2421]">
                          Authentic Handcrafted Assam Cane &amp; Bamboo Fruit Basket
                        </h3>

                        {/* GI & Eco Badges */}
                        <div className="flex flex-wrap gap-1.5">
                          <span className="text-[9.5px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                            GI-429 Verified
                          </span>
                          <span className="text-[9.5px] font-bold text-[#8C3A16] bg-[#FAF3EE] border border-[#EADFD6] px-2 py-0.5 rounded-md">
                            100% Biodegradable
                          </span>
                          <span className="text-[9.5px] font-bold text-blue-800 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                            Food Safe
                          </span>
                        </div>

                        {/* Language Tabs for Description */}
                        <div className="flex border-b border-[#F0E6DE] pt-2">
                          {[
                            { id: 'en', label: 'English' },
                            { id: 'hi', label: 'हिन्दी' },
                            { id: 'as', label: 'অসমীয়া' },
                          ].map((t) => (
                            <button
                              key={t.id}
                              onClick={() => setActiveLangTab(t.id as any)}
                              className={`px-3 py-1 text-[10.5px] font-bold transition-all border-b-2 ${
                                activeLangTab === t.id
                                  ? 'border-[#8C3A16] text-[#8C3A16]'
                                  : 'border-transparent text-[#7A685F]'
                              }`}
                            >
                              {t.label}
                            </button>
                          ))}
                        </div>

                        <p className="text-[11px] text-[#4A372D] leading-relaxed pt-1">
                          {activeLangTab === 'en' &&
                            'Handwoven by master artisan Ramu Kumar in Assam cluster. Made from seasoned mature Jati bamboo with natural water-resistant polish. Traditional lattice weave pattern ensures high durability, strength, and ventilation for storing fruits and table decor.'}
                          {activeLangTab === 'hi' &&
                            'असम क्लस्टर में उस्ताद कारीगर रामू कुमार द्वारा हाथ से बुनी गई प्रामाणिक बास्केट। पके हुए जाटी बांस से बनी, जिसमें प्राकृतिक जल-रोधी फिनिश है। फल रखने और मेज की सजावट के लिए अत्यधिक टिकाऊ।'}
                          {activeLangTab === 'as' &&
                            'অসমৰ বিশিষ্ট শিল্পী ৰামু কুমাৰৰ দ্বাৰা হস্তনিৰ্মিত বাঁহৰ ফলৰ পাচি। পকা জাতি বাঁহেৰে নিৰ্মিত আৰু প্ৰাকৃতিক পানী প্ৰতিৰোধী।' }
                        </p>
                      </div>

                      {/* AI Search Keywords */}
                      <div className="bg-white rounded-2xl p-3 border border-[#EADFD6] space-y-1.5">
                        <h4 className="text-[11px] font-extrabold text-[#2D2421]">ONDC Search Keywords:</h4>
                        <div className="flex flex-wrap gap-1">
                          {['#bamboobasket', '#handicrafts', '#GIcrafted', '#ecofriendly', '#ONDCkitchen'].map((kw) => (
                            <span key={kw} className="text-[10px] font-bold text-[#8C3A16] bg-[#FAF4F0] px-2 py-0.5 rounded-md border border-[#EADFD6]">
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(16);
                          showToast('Opening Fair Pricing Assistant...');
                        }}
                        className="w-full py-3 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                      >
                        <span>Proceed to Fair Pricing Assistant</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* 17. SCREEN 16: FAIR PRICING ASSISTANT (matching Fair Pricing Assistant.png) */}
                {activeScreenIndex === 16 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(15)}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <h2 className="text-xs font-black text-[#2D2421]">Step 5 of 5: Fair Pricing Assistant</h2>
                      <div className="w-4" />
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                      {/* Formula Banner */}
                      <div className="bg-[#EDF7ED] border border-[#C8E6C9] rounded-2xl p-3 text-[11px] font-semibold text-emerald-900 leading-tight">
                        💡 <b>HunarSangam Fair Pricing Formula</b> ensures you earn fair master artisan wages (₹{(artisanLaborHours * hourlyWageRate).toFixed(0)}) + full material cost recovery.
                      </div>

                      {/* Cost Breakdown Card */}
                      <div className="bg-white rounded-2xl p-3.5 border border-[#EADFD6] space-y-2 shadow-2xs">
                        <h3 className="text-xs font-extrabold text-[#2D2421]">Base Production Cost:</h3>
                        <div className="space-y-1 text-xs text-[#4A372D]">
                          <div className="flex justify-between">
                            <span className="text-[11px]">Raw Material Cost</span>
                            <span className="font-bold">₹{rawMaterialCost}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[11px]">Artisan Labor (3.5h @ ₹45/h)</span>
                            <span className="font-bold">₹{(artisanLaborHours * hourlyWageRate).toFixed(0)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[11px]">Overhead &amp; Eco-Packaging</span>
                            <span className="font-bold">₹{overheadCost.toFixed(0)}</span>
                          </div>
                          <div className="border-t border-[#F0E6DE] pt-1.5 flex justify-between font-black text-[#8C3A16]">
                            <span>Minimum Cost to Make:</span>
                            <span>₹{(rawMaterialCost + artisanLaborHours * hourlyWageRate + overheadCost).toFixed(0)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Recommended Pricing Tiers */}
                      <div className="space-y-2">
                        <div className="bg-white rounded-2xl p-3 border-2 border-[#8C3A16] flex items-center justify-between shadow-xs">
                          <div>
                            <p className="text-xs font-black text-[#2D2421]">Retail / ONDC Direct Buyer</p>
                            <p className="text-[10px] font-bold text-emerald-700">Artisan Profit Margin: 45%</p>
                          </div>
                          <div className="text-right">
                            <p className="text-base font-black text-[#8C3A16]">₹{retailPrice}</p>
                            <p className="text-[9px] text-[#7A685F]">per piece</p>
                          </div>
                        </div>

                        <div className="bg-white rounded-2xl p-3 border border-[#EADFD6] flex items-center justify-between">
                          <div>
                            <p className="text-xs font-black text-[#2D2421]">Wholesale Bulk (MOQ: {wholesaleMoq} pcs)</p>
                            <p className="text-[10px] font-bold text-blue-700">Artisan Profit Margin: 25%</p>
                          </div>
                          <div className="text-right">
                            <p className="text-base font-black text-[#2D2421]">₹{wholesalePrice}</p>
                            <p className="text-[9px] text-[#7A685F]">per piece</p>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(17);
                          showToast('Pricing saved! Setting capacity...');
                        }}
                        className="w-full py-3 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                      >
                        <span>Set Production Capacity &amp; Lead Time</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* 18. SCREEN 17: VOICE CAPACITY INTAKE (matching p8-voice based piese in day asking.png) */}
                {activeScreenIndex === 17 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(16)}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <h2 className="text-xs font-black text-[#2D2421]">Production Capacity</h2>
                      <div className="w-4" />
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                      {/* Voice Bubble Question */}
                      <div className="bg-[#FAF5F0] rounded-2xl p-3 border border-[#E5D5CB] flex items-start gap-2.5">
                        <Mic className="w-5 h-5 text-[#8C3A16] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-black text-[#8C3A16]">
                            "Ramu ji, how many pieces can your workshop make in a day or week?"
                          </p>
                          <p className="text-[10px] text-[#6B5A51] mt-1 italic">
                            Transcribed: "हम दिन में 5 बास्केट बना सकते हैं, और हफ्ते में 30 बास्केट तक तैयार हो सकती हैं।"
                          </p>
                        </div>
                      </div>

                      {/* Capacity Cards */}
                      <div className="bg-white rounded-2xl p-3.5 border border-[#EADFD6] space-y-2.5 shadow-2xs">
                        <div className="flex justify-between items-center bg-[#FAF4F0] p-2.5 rounded-xl border border-[#EADFD6]">
                          <span className="text-xs font-bold text-[#2D2421]">Daily Production Rate</span>
                          <span className="text-xs font-black text-[#8C3A16]">{dailyCapacity} units / day</span>
                        </div>
                        <div className="flex justify-between items-center bg-[#FAF4F0] p-2.5 rounded-xl border border-[#EADFD6]">
                          <span className="text-xs font-bold text-[#2D2421]">Weekly Workshop Output</span>
                          <span className="text-xs font-black text-[#8C3A16]">{weeklyCapacity} units / week</span>
                        </div>
                        <div className="flex justify-between items-center bg-[#FAF4F0] p-2.5 rounded-xl border border-[#EADFD6]">
                          <span className="text-xs font-bold text-[#2D2421]">Ready Stock on Hand</span>
                          <span className="text-xs font-black text-emerald-800">{readyStock} units</span>
                        </div>
                        <div className="flex justify-between items-center bg-[#FAF4F0] p-2.5 rounded-xl border border-[#EADFD6]">
                          <span className="text-xs font-bold text-[#2D2421]">ONDC Logistics Pickup</span>
                          <span className="text-xs font-black text-[#2D2421]">Majuli (785104) ✓</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(18);
                          showToast('Generating 3D / AR Preview...');
                        }}
                        className="w-full py-3 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                      >
                        <span>Preview Product in 3D / AR</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* 19. SCREEN 18: FINAL 3D & AR PREVIEW (matching p9-final preview ar.png) */}
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
                      <h2 className="text-xs font-black text-[#2D2421]">Final 3D &amp; AR Buyer Preview</h2>
                      <div className="w-4" />
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                      {/* 3D AR Viewer Card */}
                      <div className="relative h-48 rounded-3xl overflow-hidden bg-neutral-900 border border-[#EADFD6] flex items-center justify-center shadow-md">
                        <img
                          src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                          alt="3D AR Basket"
                          className={`w-full h-full object-cover transition-transform duration-700 ${isArActive ? 'scale-110 rotate-12' : ''}`}
                        />
                        <div className="absolute inset-0 bg-black/30" />

                        <button
                          onClick={() => {
                            setIsArActive(!isArActive);
                            showToast(isArActive ? 'Standard View' : '360° AR Rotate View activated');
                          }}
                          className="absolute bottom-3 bg-[#8C3A16] hover:bg-[#783011] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{isArActive ? 'Reset View' : '360° Rotate in AR Room'}</span>
                        </button>
                      </div>

                      {/* Verified Listing Details */}
                      <div className="bg-white rounded-2xl p-3.5 border border-[#EADFD6] space-y-2 shadow-2xs">
                        <h3 className="text-xs font-black text-[#2D2421]">Handmade Woven Bamboo Fruit Basket</h3>
                        <p className="text-[11px] text-[#8C3A16] font-bold">GI Tag: Assam Cane &amp; Bamboo (GI-429)</p>

                        <div className="flex items-center justify-between pt-1">
                          <div>
                            <span className="text-sm font-black text-[#8C3A16]">₹399</span>
                            <span className="text-[10px] text-[#7A685F]"> (Retail)</span>
                          </div>
                          <span className="text-[10px] font-bold text-[#6B5A51] bg-[#F4ECE5] px-2 py-0.5 rounded-md">
                            Wholesale: ₹280 (MOQ: 20 pcs)
                          </span>
                        </div>

                        <p className="text-[10px] text-[#7A685F] border-t border-[#F0E6DE] pt-2">
                          🚚 Express ONDC Logistics enabled • 3-5 days delivery across India
                        </p>
                      </div>

                      {/* Publish CTA */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(19);
                          showToast('🎉 Successfully Published to ONDC Network!');
                        }}
                        className="w-full py-3 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Publish &amp; Sync to ONDC Network 🚀</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 20. SCREEN 19: PRODUCT FINALIZED & ONDC READY CELEBRATION (matching p10   Product Finalized & ONDC Ready.png) */}
                {activeScreenIndex === 19 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden p-5 justify-between">
                    <div className="pt-6 text-center space-y-3">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-md">
                        <CheckCircle2 className="w-9 h-9 text-emerald-700" />
                      </div>
                      <h2 className="text-base font-black text-[#2D2421]">Product Finalized &amp; ONDC Ready! 🎉</h2>
                      <p className="text-xs text-[#6B5A51] leading-relaxed max-w-[260px] mx-auto">
                        Your craft is now live across Open Network buyer apps (Paytm, Mystore, Pincode, Craftsvilla).
                      </p>

                      <div className="bg-white rounded-2xl p-3 border border-[#EADFD6] text-left space-y-1.5 shadow-2xs">
                        <p className="text-[11px] font-black text-[#8C3A16]">ONDC Product ID: ONDC-HNRSNG-ASM-429-01</p>
                        <p className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-700" /> WhatsApp Orders &amp; Buyer Inquiries Enabled
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pb-2">
                      <button
                        onClick={() => showToast('WhatsApp Catalog QR & Link copied!')}
                        className="w-full py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl text-xs font-extrabold flex items-center justify-center gap-2 shadow-xs"
                      >
                        <MessageSquare className="w-4 h-4" /> Share WhatsApp Catalog Link
                      </button>
                      <button
                        onClick={() => {
                          setActiveScreenIndex(10);
                          showToast('Returned to My Products Catalog');
                        }}
                        className="w-full py-3 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black shadow-md"
                      >
                        Return to My Products Catalog
                      </button>
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
