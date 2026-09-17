// lib/screens/artisan_products_screen.dart
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

/// The main Artisan Products & ONDC Flow Screen
/// Supports complete sequence:
/// Step 0: ar--p1 (Artisan Product Catalog)
/// Step 1: p2 (Product Photography Camera View)
/// Step 2: p3 (₹10 Coin Size Detector AR View)
/// Step 3: p4 (Photo & Dimension Review)
/// Step 4: p5 (Create Product Voice-First)
/// Step 5: p6 (Product Preview & AI Draft Review)
/// Step 6: p7 (Know Your Fair Price / Fair Pricing Assistant)
/// Step 7: p8 (Bulk Record & Capacity Intake)
/// Step 8: p9 (Preview Product & Distribution Channels)
/// Step 9: p10 (Catalog Published & ONDC Ready)
class ArtisanProductsScreen extends StatefulWidget {
  final OnboardingState? state;
  final Function(int)? onNavigateTab;
  final int initialFlowStep;

  const ArtisanProductsScreen({
    Key? key,
    this.state,
    this.onNavigateTab,
    this.initialFlowStep = 0,
  }) : super(key: key);

  @override
  State<ArtisanProductsScreen> createState() => _ArtisanProductsScreenState();
}

class _ArtisanProductsScreenState extends State<ArtisanProductsScreen> {
  int _selectedFilterIndex = 0;
  String _selectedLanguage = 'English';
  int _currentNavIndex = 1; // Products tab active

  // Flow State: 0 to 9 representing exact flow ar--p1 to p10
  late int _flowStep;

  // Pricing Model State
  double _rawMaterialCost = 85.0;
  double _artisanLaborCost = 120.0;
  double _clusterOverhead = 25.0;
  double _fairProfit = 50.0;
  int _recommendedBasePrice = 280;
  int _wholesaleMoq = 20;

  // Capacity State
  int _dailyCapacity = 15;
  String _leadTime = '5 - 7 days';

  // Dimensions State
  String _dimensionUnit = 'in'; // 'in' or 'cm'
  double _diameterIn = 12.4;
  double _heightIn = 6.2;
  int _estWeightGrams = 420;

  // Audio / Recording UI state
  bool _isPlayingAudio = false;
  bool _isRecording = true;

  final List<String> _filters = [
    'All (8)',
    'Published (6)',
    '• ONDC Synced (5)',
    'Drafts (2)',
  ];

  final List<ArtisanProductItem> _products = const [
    ArtisanProductItem(
      id: 'prod_1',
      title: 'Handmade Woven Bamboo Fruit Basket',
      subtitle: 'GI Tag: Assam Cane & Bamboo Work (GI-429)',
      statusBadge: '• Active • ONDC Ready',
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
      gradientColors: [Color(0xFF8C3A16), Color(0xFFD97706)],
    ),
    ArtisanProductItem(
      id: 'prod_2',
      title: 'Assam Golden Cane Planter Basket',
      subtitle: 'Natural Cane Weave • Water Resistant Finish',
      statusBadge: '• Active • ONDC Ready',
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
      gradientColors: [Color(0xFF2E7D32), Color(0xFF66BB6A)],
    ),
    ArtisanProductItem(
      id: 'prod_3',
      title: 'Hand-plaited Bamboo Storage Box with Lid',
      subtitle: 'Durable Storage • Naturally Treated Cane',
      statusBadge: '• Active • HunarSangam Live',
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
      statusBadge: '• Draft (Need Photo Enhancer)',
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
  void initState() {
    super.initState();
    _flowStep = widget.initialFlowStep;
  }

  void _nextStep() {
    setState(() {
      if (_flowStep < 9) {
        _flowStep++;
      }
    });
  }

  void _prevStep() {
    setState(() {
      if (_flowStep > 0) {
        _flowStep--;
      }
    });
  }

  void _goToCatalog() {
    setState(() {
      _flowStep = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: _buildCurrentFlowStep(),
      ),
      bottomNavigationBar: _buildBottomNavigation(),
    );
  }

  Widget _buildCurrentFlowStep() {
    switch (_flowStep) {
      case 0:
        return _buildScreenArP1Catalog();
      case 1:
        return _buildScreenP2Photography();
      case 2:
        return _buildScreenP3CoinDetector();
      case 3:
        return _buildScreenP4DimensionReview();
      case 4:
        return _buildScreenP5VoiceFirstCreate();
      case 5:
        return _buildScreenP6AiDraftPreview();
      case 6:
        return _buildScreenP7FairPricing();
      case 7:
        return _buildScreenP8BulkRecord();
      case 8:
        return _buildScreenP9FinalPreview();
      case 9:
        return _buildScreenP10CatalogPublished();
      default:
        return _buildScreenArP1Catalog();
    }
  }

  // =========================================================================
  // SCREEN 1: ar--p1 - Artisan Product Catalog
  // =========================================================================
  Widget _buildScreenArP1Catalog() {
    return Stack(
      children: [
        SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Top Bar with Logo, Language dropdown, Notification, Profile
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    children: [
                      Container(
                        width: 34,
                        height: 34,
                        decoration: BoxDecoration(
                          color: const Color(0xFF8C3A16),
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: const Center(
                          child: Text(
                            'HS',
                            style: TextStyle(
                              color: Colors.white,
                              fontWeight: FontWeight.bold,
                              fontSize: 14,
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(width: 8),
                      const Text(
                        'HunarSangam',
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                          color: Color(0xFF2D2421),
                        ),
                      ),
                    ],
                  ),
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                        decoration: BoxDecoration(
                          color: const Color(0xFFFAF4F0),
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(color: const Color(0xFFEADFD6)),
                        ),
                        child: const Text(
                          'English ▾',
                          style: TextStyle(
                            fontSize: 12,
                            fontWeight: FontWeight.w600,
                            color: Color(0xFF4A372D),
                          ),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Stack(
                        children: [
                          const Icon(Icons.notifications_none, color: Color(0xFF4A372D), size: 24),
                          Positioned(
                            right: 0,
                            top: 0,
                            child: Container(
                              width: 8,
                              height: 8,
                              decoration: const BoxDecoration(
                                color: Color(0xFFDC2626),
                                shape: BoxShape.circle,
                              ),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(width: 8),
                      Stack(
                        children: [
                          const CircleAvatar(
                            radius: 14,
                            backgroundImage: NetworkImage('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'),
                          ),
                          Positioned(
                            right: 0,
                            bottom: 0,
                            child: Container(
                              width: 7,
                              height: 7,
                              decoration: BoxDecoration(
                                color: const Color(0xFF16A34A),
                                shape: BoxShape.circle,
                                border: Border.all(color: Colors.white, width: 1),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
              const SizedBox(height: 14),

              // Header Card: My Products & Cluster Status
              Container(
                padding: const EdgeInsets.all(14),
                decoration: BoxDecoration(
                  color: const Color(0xFFFFF9F5),
                  borderRadius: BorderRadius.circular(18),
                  border: Border.all(color: const Color(0xFFF0E4DC)),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'My Products',
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.w900,
                        color: Color(0xFF2D2421),
                      ),
                    ),
                    const SizedBox(height: 3),
                    Row(
                      children: const [
                        Icon(Icons.check_circle, size: 14, color: Color(0xFF16A34A)),
                        SizedBox(width: 4),
                        Text(
                          'Assam Cane & Bamboo Cluster',
                          style: TextStyle(
                            fontSize: 12,
                            fontWeight: FontWeight.w600,
                            color: Color(0xFF7A685F),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 8),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Row(
                          children: [
                            Container(
                              width: 8,
                              height: 8,
                              decoration: const BoxDecoration(
                                color: Color(0xFF16A34A),
                                shape: BoxShape.circle,
                              ),
                            ),
                            const SizedBox(width: 6),
                            const Text(
                              'Ramu Kumar • Workshop Live Status',
                              style: TextStyle(
                                fontSize: 11,
                                fontWeight: FontWeight.w600,
                                color: Color(0xFF4A372D),
                              ),
                            ),
                          ],
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                          decoration: BoxDecoration(
                            color: const Color(0xFFDCFCE7),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: const Text(
                            'Verified Artisan',
                            style: TextStyle(
                              fontSize: 10,
                              fontWeight: FontWeight.bold,
                              color: Color(0xFF15803D),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 12),

              // 4 Metric Overview Grid Cards (2x2)
              GridView.count(
                crossAxisCount: 2,
                crossAxisSpacing: 10,
                mainAxisSpacing: 10,
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                childAspectRatio: 2.2,
                children: [
                  _buildMetricCard(Icons.storefront_outlined, '8 Crafts', 'Total Published', const Color(0xFFFFF7ED), const Color(0xFFEA580C)),
                  _buildMetricCard(Icons.verified_outlined, '5 Crafts', 'ONDC Live', const Color(0xFFF0FDF4), const Color(0xFF16A34A)),
                  _buildMetricCard(Icons.visibility_outlined, '1,420', 'Buyer Views', const Color(0xFFF8FAFC), const Color(0xFF0284C7)),
                  _buildMetricCard(Icons.local_shipping_outlined, '18', 'Bulk Inquiries', const Color(0xFFFEF2F2), const Color(0xFFDC2626)),
                ],
              ),
              const SizedBox(height: 14),

              // Primary Orange Button: "Add products by clicking 🎙️"
              GestureDetector(
                onTap: () {
                  setState(() {
                    _flowStep = 1; // Navigates to Step 2: Product Photography
                  });
                },
                child: Container(
                  width: double.infinity,
                  padding: const EdgeInsets.symmetric(vertical: 14),
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      colors: [Color(0xFFFF5722), Color(0xFFE64A19)],
                    ),
                    borderRadius: BorderRadius.circular(28),
                    boxShadow: [
                      BoxShadow(
                        color: const Color(0xFFFF5722).withOpacity(0.35),
                        blurRadius: 10,
                        offset: const Offset(0, 4),
                      ),
                    ],
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text(
                        'Add products by clicking',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 15,
                          fontWeight: FontWeight.w900,
                        ),
                      ),
                      const SizedBox(width: 8),
                      Container(
                        padding: const EdgeInsets.all(4),
                        decoration: const BoxDecoration(
                          color: Colors.white,
                          shape: BoxShape.circle,
                        ),
                        child: const Icon(
                          Icons.mic,
                          color: Color(0xFFE64A19),
                          size: 16,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 12),

              // Voice Search Bar
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                decoration: BoxDecoration(
                  color: const Color(0xFFF5EBE4),
                  borderRadius: BorderRadius.circular(24),
                  border: Border.all(color: const Color(0xFFE5D7CE)),
                ),
                child: Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.all(4),
                      decoration: const BoxDecoration(
                        color: Color(0xFF8C3A16),
                        shape: BoxShape.circle,
                      ),
                      child: const Icon(Icons.mic, color: Colors.white, size: 14),
                    ),
                    const SizedBox(width: 10),
                    const Expanded(
                      child: Text(
                        'Tap to speak or search crafts...',
                        style: TextStyle(
                          fontSize: 12.5,
                          fontWeight: FontWeight.w600,
                          color: Color(0xFF6B5A51),
                        ),
                      ),
                    ),
                    const Icon(Icons.tune, color: Color(0xFF6B5A51), size: 18),
                  ],
                ),
              ),
              const SizedBox(height: 12),

              // Filter Chips Row
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: _filters.asMap().entries.map((entry) {
                    final isSelected = _selectedFilterIndex == entry.key;
                    return Padding(
                      padding: const EdgeInsets.only(right: 8.0),
                      child: ChoiceChip(
                        label: Text(
                          entry.value,
                          style: TextStyle(
                            fontSize: 11.5,
                            fontWeight: FontWeight.bold,
                            color: isSelected ? Colors.white : const Color(0xFF5C4033),
                          ),
                        ),
                        selected: isSelected,
                        selectedColor: const Color(0xFF8C3A16),
                        backgroundColor: const Color(0xFFFAF3EE),
                        onSelected: (selected) {
                          if (selected) {
                            setState(() => _selectedFilterIndex = entry.key);
                          }
                        },
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(16),
                          side: BorderSide(
                            color: isSelected ? const Color(0xFF8C3A16) : const Color(0xFFE8DDD5),
                          ),
                        ),
                      ),
                    );
                  }).toList(),
                ),
              ),
              const SizedBox(height: 14),

              // Product List Cards (4 cards)
              ..._products.map((item) => _buildCatalogProductCard(item)).toList(),
              const SizedBox(height: 80),
            ],
          ),
        ),

        // Floating Voice Action Button
        Positioned(
          right: 16,
          bottom: 16,
          child: GestureDetector(
            onTap: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('🎙️ Listening to voice craft command...')),
              );
            },
            child: Container(
              width: 50,
              height: 50,
              decoration: BoxDecoration(
                color: const Color(0xFF8C3A16),
                shape: BoxShape.circle,
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.2),
                    blurRadius: 8,
                    offset: const Offset(0, 4),
                  ),
                ],
              ),
              child: const Icon(Icons.mic, color: Colors.white, size: 24),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildMetricCard(IconData icon, String value, String label, Color bg, Color iconColor) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: iconColor.withOpacity(0.15)),
      ),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(6),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(10),
            ),
            child: Icon(icon, color: iconColor, size: 18),
          ),
          const SizedBox(width: 8),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  value,
                  style: TextStyle(
                    fontSize: 13.5,
                    fontWeight: FontWeight.w900,
                    color: const Color(0xFF2D2421),
                  ),
                ),
                Text(
                  label,
                  style: const TextStyle(
                    fontSize: 10,
                    fontWeight: FontWeight.w600,
                    color: Color(0xFF7A685F),
                  ),
                  overflow: TextOverflow.ellipsis,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildCatalogProductCard(ArtisanProductItem item) {
    return Container(
      margin: const EdgeInsets.only(bottom: 14),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: const Color(0xFFEADFD6)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.03),
            blurRadius: 8,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Photo with badge and audio icon
          Stack(
            children: [
              ClipRRect(
                borderRadius: const BorderRadius.vertical(top: Radius.circular(20)),
                child: Image.network(
                  item.imageUrl,
                  height: 140,
                  width: double.infinity,
                  fit: BoxFit.cover,
                ),
              ),
              Positioned(
                top: 10,
                left: 10,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: item.isDraft ? Colors.white.withOpacity(0.9) : const Color(0xFF15803D),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Text(
                    item.statusBadge,
                    style: TextStyle(
                      color: item.isDraft ? const Color(0xFFB45309) : Colors.white,
                      fontSize: 10,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ),
              Positioned(
                top: 10,
                right: 10,
                child: Container(
                  padding: const EdgeInsets.all(5),
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.9),
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(Icons.volume_up, size: 14, color: Color(0xFF8C3A16)),
                ),
              ),
              Positioned(
                bottom: 8,
                left: 10,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                  decoration: BoxDecoration(
                    color: Colors.black.withOpacity(0.7),
                    borderRadius: BorderRadius.circular(6),
                  ),
                  child: Text(
                    'Size: ${item.size}',
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 9.5,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),
            ],
          ),

          // Details Section
          Padding(
            padding: const EdgeInsets.all(12.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  item.title,
                  style: const TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w900,
                    color: Color(0xFF2D2421),
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  item.subtitle,
                  style: const TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.w500,
                    color: Color(0xFF7A685F),
                  ),
                ),
                const SizedBox(height: 8),

                // Pricing Row
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.baseline,
                      textBaseline: TextBaseline.alphabetic,
                      children: [
                        Text(
                          '₹${item.price}',
                          style: const TextStyle(
                            fontSize: 17,
                            fontWeight: FontWeight.w900,
                            color: Color(0xFF8C3A16),
                          ),
                        ),
                        Text(
                          ' /${item.unit}',
                          style: const TextStyle(
                            fontSize: 11,
                            fontWeight: FontWeight.w600,
                            color: Color(0xFF7A685F),
                          ),
                        ),
                      ],
                    ),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                      decoration: BoxDecoration(
                        color: const Color(0xFFF4ECE5),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: Text(
                        'Wholesale MOQ: ${item.moq} ${item.moqUnit}',
                        style: const TextStyle(
                          fontSize: 10,
                          fontWeight: FontWeight.bold,
                          color: Color(0xFF6B5A51),
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 8),

                // Stats row
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: [
                        const Icon(Icons.visibility_outlined, size: 13, color: Color(0xFF7A685F)),
                        const SizedBox(width: 3),
                        Text('${item.views} Views', style: const TextStyle(fontSize: 10.5, color: Color(0xFF7A685F))),
                      ],
                    ),
                    Row(
                      children: [
                        const Icon(Icons.chat_bubble_outline, size: 13, color: Color(0xFF7A685F)),
                        const SizedBox(width: 3),
                        Text('${item.inquiries} Bulk Inquiries', style: const TextStyle(fontSize: 10.5, color: Color(0xFF7A685F))),
                      ],
                    ),
                    Row(
                      children: [
                        const Icon(Icons.inventory_2_outlined, size: 13, color: Color(0xFF15803D)),
                        const SizedBox(width: 3),
                        Text('${item.inStock} in Stock', style: const TextStyle(fontSize: 10.5, color: Color(0xFF15803D), fontWeight: FontWeight.bold)),
                      ],
                    ),
                  ],
                ),
                const SizedBox(height: 10),

                // Action Buttons
                if (item.isDraft)
                  GestureDetector(
                    onTap: () {
                      setState(() {
                        _flowStep = 1; // Starts capture flow
                      });
                    },
                    child: Container(
                      width: double.infinity,
                      padding: const EdgeInsets.symmetric(vertical: 9),
                      decoration: BoxDecoration(
                        gradient: const LinearGradient(
                          colors: [Color(0xFFEA580C), Color(0xFFC2410C)],
                        ),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: const [
                          Icon(Icons.auto_fix_high, size: 14, color: Colors.white),
                          SizedBox(width: 6),
                          Text(
                            'Enhance Photo with AI & Publish',
                            style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.bold),
                          ),
                          SizedBox(width: 4),
                          Icon(Icons.mic, size: 14, color: Colors.white),
                        ],
                      ),
                    ),
                  )
                else
                  Row(
                    children: [
                      Expanded(
                        child: OutlinedButton.icon(
                          onPressed: () {
                            setState(() {
                              _flowStep = 4; // Voice edit
                            });
                          },
                          icon: const Icon(Icons.mic, size: 13, color: Color(0xFF8C3A16)),
                          label: const Text('Edit (Voice 🎙️)', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF8C3A16))),
                          style: OutlinedButton.styleFrom(
                            side: const BorderSide(color: Color(0xFFE5D5CB)),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                            padding: const EdgeInsets.symmetric(vertical: 6),
                          ),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Expanded(
                        child: ElevatedButton(
                          onPressed: () {
                            setState(() {
                              _flowStep = 8; // Preview product
                            });
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor: const Color(0xFFFAF3EE),
                            foregroundColor: const Color(0xFF4A372D),
                            elevation: 0,
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                            padding: const EdgeInsets.symmetric(vertical: 6),
                          ),
                          child: const Text('View Details', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold)),
                        ),
                      ),
                    ],
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  // =========================================================================
  // SCREEN 2: p2 - Product Photography
  // =========================================================================
  Widget _buildScreenP2Photography() {
    return Column(
      children: [
        // Top Header
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
          child: Row(
            children: [
              IconButton(
                icon: const Icon(Icons.arrow_back, color: Color(0xFF2D2421)),
                onPressed: _prevStep,
              ),
              Expanded(
                child: Column(
                  children: const [
                    Text(
                      'STEP 2 OF 3',
                      style: TextStyle(
                        fontSize: 10,
                        fontWeight: FontWeight.w900,
                        color: Color(0xFFB45309),
                        letterSpacing: 1.0,
                      ),
                    ),
                    Text(
                      'Product Photography',
                      style: TextStyle(
                        fontSize: 15,
                        fontWeight: FontWeight.w900,
                        color: Color(0xFF2D2421),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 48), // Balance spacing
            ],
          ),
        ),

        // Camera Viewport Area (Gray placeholder with viewfinder frame)
        Expanded(
          child: Container(
            margin: const EdgeInsets.symmetric(horizontal: 16),
            decoration: BoxDecoration(
              color: const Color(0xFFD6D3D1),
              borderRadius: BorderRadius.circular(24),
            ),
            child: Stack(
              children: [
                Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      Icon(Icons.camera_alt_outlined, size: 52, color: Color(0xFF78716C)),
                      SizedBox(height: 8),
                      Text(
                        'Camera Viewfinder',
                        style: TextStyle(
                          fontSize: 13,
                          fontWeight: FontWeight.bold,
                          color: Color(0xFF78716C),
                        ),
                      ),
                    ],
                  ),
                ),
                // Corner framing brackets
                Positioned(
                  top: 20,
                  left: 20,
                  child: Container(
                    width: 24,
                    height: 24,
                    decoration: const BoxDecoration(
                      border: Border(
                        top: BorderSide(color: Colors.white70, width: 3),
                        left: BorderSide(color: Colors.white70, width: 3),
                      ),
                    ),
                  ),
                ),
                Positioned(
                  top: 20,
                  right: 20,
                  child: Container(
                    width: 24,
                    height: 24,
                    decoration: const BoxDecoration(
                      border: Border(
                        top: BorderSide(color: Colors.white70, width: 3),
                        right: BorderSide(color: Colors.white70, width: 3),
                      ),
                    ),
                  ),
                ),
                Positioned(
                  bottom: 20,
                  left: 20,
                  child: Container(
                    width: 24,
                    height: 24,
                    decoration: const BoxDecoration(
                      border: Border(
                        bottom: BorderSide(color: Colors.white70, width: 3),
                        left: BorderSide(color: Colors.white70, width: 3),
                      ),
                    ),
                  ),
                ),
                Positioned(
                  bottom: 20,
                  right: 20,
                  child: Container(
                    width: 24,
                    height: 24,
                    decoration: const BoxDecoration(
                      border: Border(
                        bottom: BorderSide(color: Colors.white70, width: 3),
                        right: BorderSide(color: Colors.white70, width: 3),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(height: 14),

        // Artisan Studio Tips Card
        Container(
          margin: const EdgeInsets.symmetric(horizontal: 16),
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: const Color(0xFFFFF7ED),
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: const Color(0xFFFFEDD5)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: const [
                  Icon(Icons.lightbulb_outline, size: 16, color: Color(0xFF9A3412)),
                  SizedBox(width: 6),
                  Text(
                    'ARTISAN STUDIO TIPS',
                    style: TextStyle(
                      fontSize: 11,
                      fontWeight: FontWeight.w900,
                      color: Color(0xFF9A3412),
                      letterSpacing: 0.5,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 6),
              const Divider(color: Color(0xFFFED7AA), height: 1),
              const SizedBox(height: 8),
              Row(
                children: [
                  _buildStudioTipCard(Icons.wb_sunny_outlined, 'Soft Sun', 'No harsh flash glare'),
                  const SizedBox(width: 8),
                  _buildStudioTipCard(Icons.crop_original_outlined, 'Clean Base', 'Bare wood or cloth'),
                  const SizedBox(width: 8),
                  _buildStudioTipCard(Icons.monetization_on_outlined, '₹10 Coin', 'Shows true height'),
                ],
              ),
            ],
          ),
        ),
        const SizedBox(height: 18),

        // Camera Shutter Button (Brown Click circle)
        GestureDetector(
          onTap: () {
            setState(() {
              _flowStep = 2; // Navigates to p3 (Coin Size Detector)
            });
          },
          child: Container(
            width: 72,
            height: 72,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: const Color(0xFFF0DDD0),
              border: Border.all(color: const Color(0xFFE2C2AE), width: 3),
            ),
            child: Center(
              child: Container(
                width: 54,
                height: 54,
                decoration: const BoxDecoration(
                  shape: BoxShape.circle,
                  color: Color(0xFF9A3412),
                ),
                child: const Center(
                  child: Text(
                    'Click',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 12,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        const SizedBox(height: 18),
      ],
    );
  }

  Widget _buildStudioTipCard(IconData icon, String title, String subtitle) {
    return Expanded(
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 4),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: const Color(0xFFFED7AA)),
        ),
        child: Column(
          children: [
            Icon(icon, size: 18, color: const Color(0xFF9A3412)),
            const SizedBox(height: 4),
            Text(
              title,
              style: const TextStyle(fontSize: 10.5, fontWeight: FontWeight.bold, color: Color(0xFF2D2421)),
            ),
            const SizedBox(height: 2),
            Text(
              subtitle,
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 8.5, color: Color(0xFF7A685F)),
            ),
          ],
        ),
      ),
    );
  }

  // =========================================================================
  // SCREEN 3: p3 - Camera-First Add Photo with ₹10 Coin
  // =========================================================================
  Widget _buildScreenP3CoinDetector() {
    return Column(
      children: [
        // Top Header
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
          child: Row(
            children: [
              IconButton(
                icon: const Icon(Icons.arrow_back, color: Color(0xFF2D2421)),
                onPressed: _prevStep,
              ),
              Expanded(
                child: Column(
                  children: const [
                    Text(
                      'STEP 1 OF 2',
                      style: TextStyle(
                        fontSize: 10,
                        fontWeight: FontWeight.w900,
                        color: Color(0xFFB45309),
                        letterSpacing: 1.0,
                      ),
                    ),
                    Text(
                      'Product Photography',
                      style: TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.bold,
                        color: Color(0xFF7A685F),
                      ),
                    ),
                    Text(
                      '₹10 Coin Size Detector',
                      style: TextStyle(
                        fontSize: 17,
                        fontWeight: FontWeight.w900,
                        color: Color(0xFF2D2421),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 48),
            ],
          ),
        ),

        // Live AR Viewport with basket, measurement lines and locked coin
        Expanded(
          child: Container(
            margin: const EdgeInsets.symmetric(horizontal: 16),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(24),
              image: const DecorationImage(
                image: NetworkImage('https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80'),
                fit: BoxFit.cover,
              ),
            ),
            child: Stack(
              children: [
                // Top Live badge
                Positioned(
                  top: 14,
                  left: 14,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(
                      color: Colors.black.withOpacity(0.65),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Row(
                      children: const [
                        Icon(Icons.videocam, size: 12, color: Colors.white),
                        SizedBox(width: 4),
                        Text(
                          'Live 60fps',
                          style: TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.bold),
                        ),
                      ],
                    ),
                  ),
                ),

                // Corner framing brackets
                Positioned(
                  top: 14,
                  right: 14,
                  child: Container(
                    width: 22,
                    height: 22,
                    decoration: const BoxDecoration(
                      border: Border(
                        top: BorderSide(color: Colors.white, width: 2.5),
                        right: BorderSide(color: Colors.white, width: 2.5),
                      ),
                    ),
                  ),
                ),
                Positioned(
                  bottom: 14,
                  left: 14,
                  child: Container(
                    width: 22,
                    height: 22,
                    decoration: const BoxDecoration(
                      border: Border(
                        bottom: BorderSide(color: Colors.white, width: 2.5),
                        left: BorderSide(color: Colors.white, width: 2.5),
                      ),
                    ),
                  ),
                ),
                Positioned(
                  bottom: 14,
                  right: 14,
                  child: Container(
                    width: 22,
                    height: 22,
                    decoration: const BoxDecoration(
                      border: Border(
                        bottom: BorderSide(color: Colors.white, width: 2.5),
                        right: BorderSide(color: Colors.white, width: 2.5),
                      ),
                    ),
                  ),
                ),

                // Top measurement indicator
                Positioned(
                  top: 55,
                  left: 45,
                  right: 45,
                  child: Column(
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                        decoration: BoxDecoration(
                          color: Colors.black.withOpacity(0.75),
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: const Color(0xFF86EFAC).withOpacity(0.5)),
                        ),
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: const [
                            Icon(Icons.straighten, size: 11, color: Color(0xFF86EFAC)),
                            SizedBox(width: 4),
                            Text(
                              'Top: 12.4 in (31.5 cm)',
                              style: TextStyle(color: Color(0xFF86EFAC), fontSize: 10, fontWeight: FontWeight.bold),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(height: 2),
                      Row(
                        children: [
                          Container(width: 6, height: 6, decoration: const BoxDecoration(color: Color(0xFF86EFAC), shape: BoxShape.circle)),
                          Expanded(child: Container(height: 1.5, color: const Color(0xFF86EFAC))),
                          Container(width: 6, height: 6, decoration: const BoxDecoration(color: Color(0xFF86EFAC), shape: BoxShape.circle)),
                        ],
                      ),
                    ],
                  ),
                ),

                // Height measurement tag & vertical connecting line
                Positioned(
                  top: 80,
                  bottom: 120,
                  right: 90,
                  child: Container(
                    width: 1.5,
                    color: const Color(0xFF86EFAC).withOpacity(0.7),
                  ),
                ),
                Positioned(
                  top: 105,
                  right: 16,
                  child: Container(
                    padding: const EdgeInsets.all(8),
                    decoration: BoxDecoration(
                      color: Colors.black.withOpacity(0.8),
                      borderRadius: BorderRadius.circular(10),
                      border: Border.all(color: Colors.white12),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const [
                        Text('Height', style: TextStyle(color: Color(0xFF86EFAC), fontSize: 9.5, fontWeight: FontWeight.bold)),
                        Text('6.2 in (15.7 cm)', style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.bold)),
                        Text('±0.1 cm', style: TextStyle(color: Colors.white70, fontSize: 8.5)),
                      ],
                    ),
                  ),
                ),

                // Base measurement indicator
                Positioned(
                  bottom: 95,
                  left: 70,
                  right: 70,
                  child: Column(
                    children: [
                      Row(
                        children: [
                          Container(width: 5, height: 5, decoration: const BoxDecoration(color: Color(0xFF86EFAC), shape: BoxShape.circle)),
                          Expanded(child: Container(height: 1.5, color: const Color(0xFF86EFAC))),
                          Container(width: 5, height: 5, decoration: const BoxDecoration(color: Color(0xFF86EFAC), shape: BoxShape.circle)),
                        ],
                      ),
                      const SizedBox(height: 2),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                        decoration: BoxDecoration(
                          color: Colors.black.withOpacity(0.75),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: const Text(
                          'Base: 8.1 in (20.5 cm)',
                          style: TextStyle(color: Colors.white, fontSize: 9.5, fontWeight: FontWeight.bold),
                        ),
                      ),
                    ],
                  ),
                ),

                // Coin Locked Indicator Target
                Positioned(
                  bottom: 25,
                  left: 20,
                  child: Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(3),
                        decoration: BoxDecoration(
                          color: const Color(0xFF16A34A).withOpacity(0.2),
                          shape: BoxShape.circle,
                          border: Border.all(color: const Color(0xFF22C55E), width: 2),
                        ),
                        child: Container(
                          width: 26,
                          height: 26,
                          decoration: const BoxDecoration(
                            color: Color(0xFF16A34A),
                            shape: BoxShape.circle,
                          ),
                          child: const Icon(Icons.check, size: 16, color: Colors.white),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                        decoration: BoxDecoration(
                          color: Colors.black.withOpacity(0.8),
                          borderRadius: BorderRadius.circular(10),
                          border: Border.all(color: Colors.white12),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: const [
                            Row(
                              children: [
                                Icon(Icons.fiber_manual_record, size: 8, color: Color(0xFF22C55E)),
                                SizedBox(width: 4),
                                Text(
                                  '₹10 Coin Locked',
                                  style: TextStyle(color: Color(0xFF86EFAC), fontSize: 10, fontWeight: FontWeight.bold),
                                ),
                              ],
                            ),
                            Text(
                              'Standard 27.00 mm scale',
                              style: TextStyle(color: Colors.white70, fontSize: 8.5),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(height: 12),

        // Studio Tips Container
        Container(
          margin: const EdgeInsets.symmetric(horizontal: 16),
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: const Color(0xFFFFF7ED),
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: const Color(0xFFFFEDD5)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: const [
                  Icon(Icons.lightbulb_outline, size: 16, color: Color(0xFF9A3412)),
                  SizedBox(width: 6),
                  Text(
                    'ARTISAN STUDIO TIPS',
                    style: TextStyle(
                      fontSize: 11,
                      fontWeight: FontWeight.w900,
                      color: Color(0xFF9A3412),
                      letterSpacing: 0.5,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              Row(
                children: [
                  _buildStudioTipCard(Icons.wb_sunny_outlined, 'Soft Sun', 'No harsh flash glare'),
                  const SizedBox(width: 8),
                  _buildStudioTipCard(Icons.crop_original_outlined, 'Clean Base', 'Bare wood or cloth'),
                  const SizedBox(width: 8),
                  _buildStudioTipCard(Icons.monetization_on_outlined, '₹10 Coin', 'Shows true height'),
                ],
              ),
            ],
          ),
        ),
        const SizedBox(height: 14),

        // Shutter Button
        GestureDetector(
          onTap: () {
            setState(() {
              _flowStep = 3; // Navigates to p4 (Photo & Dimension Review)
            });
          },
          child: Container(
            width: 72,
            height: 72,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: const Color(0xFFF0DDD0),
              border: Border.all(color: const Color(0xFFE2C2AE), width: 3),
            ),
            child: Center(
              child: Container(
                width: 54,
                height: 54,
                decoration: const BoxDecoration(
                  shape: BoxShape.circle,
                  color: Color(0xFF9A3412),
                ),
                child: const Center(
                  child: Text(
                    'Click',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 12,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        const SizedBox(height: 14),
      ],
    );
  }

  // =========================================================================
  // SCREEN 4: p4 - Photo & Dimension Review
  // =========================================================================
  Widget _buildScreenP4DimensionReview() {
    return SingleChildScrollView(
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header matching p4— photo and dimension review.png
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              IconButton(
                icon: const Icon(Icons.arrow_back, color: Color(0xFF2D2421)),
                onPressed: _prevStep,
              ),
              Column(
                children: const [
                  Text(
                    'STEP 2 OF 2 • DIMENSION TOOL',
                    style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: Color(0xFFB45309), letterSpacing: 0.8),
                  ),
                  Text(
                    '₹10 Coin Size Detector',
                    style: TextStyle(fontSize: 17, fontWeight: FontWeight.w900, color: Color(0xFF2D2421)),
                  ),
                ],
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                decoration: BoxDecoration(
                  color: const Color(0xFFFAF3EE),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: const Color(0xFFE5D5CB)),
                ),
                child: Row(
                  children: const [
                    Icon(Icons.volume_up_outlined, size: 14, color: Color(0xFF8C3A16)),
                    SizedBox(width: 4),
                    Text('मदद', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF8C3A16))),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 14),

          // Two Photo Preview Thumbnails Side by Side
          Row(
            children: [
              Expanded(
                child: Container(
                  height: 155,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    image: const DecorationImage(
                      image: NetworkImage('https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=500&auto=format&fit=crop&q=80'),
                      fit: BoxFit.cover,
                    ),
                  ),
                  child: Stack(
                    children: [
                      // Framing brackets
                      Positioned(
                        top: 8,
                        left: 8,
                        child: Container(
                          width: 14,
                          height: 14,
                          decoration: const BoxDecoration(
                            border: Border(
                              top: BorderSide(color: Colors.white, width: 2),
                              left: BorderSide(color: Colors.white, width: 2),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        top: 8,
                        right: 8,
                        child: Container(
                          width: 14,
                          height: 14,
                          decoration: const BoxDecoration(
                            border: Border(
                              top: BorderSide(color: Colors.white, width: 2),
                              right: BorderSide(color: Colors.white, width: 2),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        bottom: 8,
                        left: 8,
                        child: Container(
                          width: 14,
                          height: 14,
                          decoration: const BoxDecoration(
                            border: Border(
                              bottom: BorderSide(color: Colors.white, width: 2),
                              left: BorderSide(color: Colors.white, width: 2),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        bottom: 8,
                        right: 8,
                        child: Container(
                          width: 14,
                          height: 14,
                          decoration: const BoxDecoration(
                            border: Border(
                              bottom: BorderSide(color: Colors.white, width: 2),
                              right: BorderSide(color: Colors.white, width: 2),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Container(
                  height: 155,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    image: const DecorationImage(
                      image: NetworkImage('https://images.unsplash.com/photo-1615865417491-9941019fbc00?w=500&auto=format&fit=crop&q=80'),
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),

          // Retake Photo Button
          GestureDetector(
            onTap: () {
              setState(() => _flowStep = 1);
            },
            child: Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 11),
              decoration: BoxDecoration(
                color: const Color(0xFFF7EFE9),
                borderRadius: BorderRadius.circular(14),
                border: Border.all(color: const Color(0xFFE5D7CE)),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Icon(Icons.refresh, size: 16, color: Color(0xFF2D2421)),
                  SizedBox(width: 6),
                  Text(
                    'Retake Photo',
                    style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: Color(0xFF2D2421)),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 12),

          // Zero-Typing Voice Correction Banner
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: const Color(0xFFFFF7ED),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: const Color(0xFFFFEDD5)),
            ),
            child: Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(10),
                  decoration: const BoxDecoration(
                    color: Color(0xFF9A3412),
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(Icons.mic, color: Colors.white, size: 18),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        'Zero-Typing Voice Correction',
                        style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Color(0xFF2D2421)),
                      ),
                      const SizedBox(height: 2),
                      RichText(
                        text: const TextSpan(
                          style: TextStyle(fontSize: 11, color: Color(0xFF7A685F)),
                          children: [
                            TextSpan(text: 'Say: '),
                            TextSpan(
                              text: '"ऊंचाई 6 इंच करो"',
                              style: TextStyle(color: Color(0xFFB45309), fontWeight: FontWeight.bold),
                            ),
                            TextSpan(text: ' or tap values to fine-tune.'),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                const Icon(Icons.hearing, color: Color(0xFF9A3412), size: 24),
              ],
            ),
          ),
          const SizedBox(height: 14),

          // Computer Vision Output Card
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(18),
              border: Border.all(color: const Color(0xFFEADFD6)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const [
                        Text('COMPUTER VISION OUTPUT', style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.w900, color: Color(0xFF15803D), letterSpacing: 0.5)),
                        SizedBox(height: 2),
                        Text('Detected Dimensions', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: Color(0xFF2D2421))),
                      ],
                    ),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      decoration: BoxDecoration(
                        color: const Color(0xFFDCFCE7),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Row(
                        children: const [
                          Icon(Icons.check_circle, size: 12, color: Color(0xFF15803D)),
                          SizedBox(width: 4),
                          Text('Auto-Calculated', style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.bold, color: Color(0xFF15803D))),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 12),

                // 3 Dimension Tiles
                Row(
                  children: [
                    _buildDimensionTile('Diameter ⟷', '${_diameterIn}', 'in', '31.5 cm'),
                    const SizedBox(width: 8),
                    _buildDimensionTile('Height ↕', '${_heightIn}', 'in', '15.7 cm'),
                    const SizedBox(width: 8),
                    _buildDimensionTile('Est. Weight ⌛', '~${_estWeightGrams}', 'g', 'Light Cane'),
                  ],
                ),
                const SizedBox(height: 12),

                // Recommended Packaging Box
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFFF7ED),
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: const Color(0xFFFFEDD5)),
                  ),
                  child: Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(8),
                        decoration: BoxDecoration(
                          color: const Color(0xFFFED7AA),
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: const Icon(Icons.inventory_2_outlined, color: Color(0xFF9A3412), size: 20),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                const Text('Recommended Packaging Box ', style: TextStyle(fontSize: 11.5, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
                                Container(
                                  padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 1.5),
                                  decoration: BoxDecoration(
                                    color: const Color(0xFFFEF3C7),
                                    borderRadius: BorderRadius.circular(6),
                                  ),
                                  child: const Text('B2B Ready', style: TextStyle(fontSize: 8.5, fontWeight: FontWeight.bold, color: Color(0xFF92400E))),
                                ),
                              ],
                            ),
                            const SizedBox(height: 2),
                            const Text('14 × 14 × 8 in Corrugated Carton.', style: TextStyle(fontSize: 11, color: Color(0xFF7A685F), fontWeight: FontWeight.w600)),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 18),

          // Primary Button: Accept Dimensions & Proceed ➔
          GestureDetector(
            onTap: () {
              setState(() => _flowStep = 4); // Navigates to p5 (Voice Input)
            },
            child: Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 14),
              decoration: BoxDecoration(
                color: const Color(0xFF9A3412),
                borderRadius: BorderRadius.circular(16),
                boxShadow: [
                  BoxShadow(
                    color: const Color(0xFF9A3412).withOpacity(0.3),
                    blurRadius: 10,
                    offset: const Offset(0, 4),
                  ),
                ],
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Text('Accept Dimensions & Proceed', style: TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.bold)),
                  SizedBox(width: 8),
                  Icon(Icons.arrow_forward, color: Colors.white, size: 16),
                ],
              ),
            ),
          ),
          const SizedBox(height: 20),
        ],
      ),
    );
  }

  Widget _buildDimensionTile(String label, String mainNum, String unit, String subVal) {
    return Expanded(
      child: Container(
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: const Color(0xFFFFF7ED),
          borderRadius: BorderRadius.circular(14),
          border: Border.all(color: const Color(0xFFFFEDD5)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(label, style: const TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Color(0xFF7A685F))),
            const SizedBox(height: 4),
            Row(
              crossAxisAlignment: CrossAxisAlignment.baseline,
              textBaseline: TextBaseline.alphabetic,
              children: [
                Text(mainNum, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: Color(0xFF2D2421))),
                const SizedBox(width: 2),
                Text(unit, style: const TextStyle(fontSize: 10.5, fontWeight: FontWeight.bold, color: Color(0xFF7A685F))),
              ],
            ),
            const SizedBox(height: 2),
            Text(subVal, style: const TextStyle(fontSize: 10, color: Color(0xFF16A34A), fontWeight: FontWeight.bold)),
          ],
        ),
      ),
    );
  }

  // =========================================================================
  // SCREEN 5: p5 - Create Product (Voice-First Input)
  // =========================================================================
  Widget _buildScreenP5VoiceFirstCreate() {
    return SingleChildScrollView(
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header matching p5-desciption all about product with raw materila cost voice serach.png
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              IconButton(
                icon: const Icon(Icons.arrow_back, color: Color(0xFF2D2421)),
                onPressed: _prevStep,
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      const Text('Create Product ', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w900, color: Color(0xFF2D2421))),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                        decoration: BoxDecoration(
                          color: const Color(0xFFFFEDD5),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: const Text('VOICE-FIRST', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, color: Color(0xFF9A3412))),
                      ),
                    ],
                  ),
                  const Text('Step 1 of 2 • Voice Input', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: Color(0xFF7A685F))),
                ],
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  color: const Color(0xFFFAF4F0),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                child: const Text('English ▾', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF4A372D))),
              ),
            ],
          ),
          const SizedBox(height: 14),

          // "Tell us about your product" card
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: const Color(0xFFFFF7ED),
              borderRadius: BorderRadius.circular(18),
              border: Border.all(color: const Color(0xFFFFEDD5)),
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  padding: const EdgeInsets.all(6),
                  decoration: const BoxDecoration(
                    color: Color(0xFFFFEDD5),
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(Icons.record_voice_over, color: Color(0xFF9A3412), size: 20),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: const [
                      Text('Tell us about your product', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w900, color: Color(0xFF2D2421))),
                      SizedBox(height: 3),
                      Text(
                        'Speak naturally in Hindi, Bengali, Tamil, English, or your local dialect. AI handles the cataloging.',
                        style: TextStyle(fontSize: 11.5, color: Color(0xFF7A685F), height: 1.3),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),

          // Example Prompt Card
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: const Color(0xFFFAF3EE),
              borderRadius: BorderRadius.circular(18),
              border: Border.all(color: const Color(0xFFEADFD6)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: [
                        Container(
                          padding: const EdgeInsets.all(4),
                          decoration: const BoxDecoration(
                            color: Color(0xFFFFEDD5),
                            shape: BoxShape.circle,
                          ),
                          child: const Icon(Icons.volume_up, size: 14, color: Color(0xFF9A3412)),
                        ),
                        const SizedBox(width: 6),
                        const Text('EXAMPLE PROMPT', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: Color(0xFF9A3412), letterSpacing: 0.5)),
                      ],
                    ),
                    const Text('Tap to listen ▷', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF9A3412))),
                  ],
                ),
                const SizedBox(height: 8),
                const Text(
                  '“I weave natural bamboo fruit baskets with double rim borders. Diameter 12 inches, wholesale price 250 rupees per piece.”',
                  style: TextStyle(fontSize: 12, fontStyle: FontStyle.italic, color: Color(0xFF4A372D), height: 1.35),
                ),
              ],
            ),
          ),
          const SizedBox(height: 14),

          // Live Recording Card
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(24),
              border: Border.all(color: const Color(0xFFEADFD6)),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.02),
                  blurRadius: 8,
                  offset: const Offset(0, 2),
                ),
              ],
            ),
            child: Column(
              children: [
                // Recording Live (0:12) status badge
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFEF2F2),
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: const Color(0xFFFECACA)),
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: const [
                      Icon(Icons.fiber_manual_record, size: 10, color: Color(0xFFDC2626)),
                      SizedBox(width: 3),
                      Icon(Icons.fiber_manual_record, size: 10, color: Color(0xFFDC2626)),
                      SizedBox(width: 5),
                      Text('Recording Live (0:12)', style: TextStyle(fontSize: 11.5, fontWeight: FontWeight.bold, color: Color(0xFF991B1B))),
                    ],
                  ),
                ),
                const SizedBox(height: 22),

                // Large Microphone Button with Pulsing Shadow
                Container(
                  width: 120,
                  height: 120,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: const Color(0xFFFFEDD5).withOpacity(0.6),
                  ),
                  child: Center(
                    child: Container(
                      width: 82,
                      height: 82,
                      decoration: const BoxDecoration(
                        shape: BoxShape.circle,
                        color: Color(0xFF9A3412),
                        boxShadow: [
                          BoxShadow(
                            color: Color(0x339A3412),
                            blurRadius: 16,
                            offset: Offset(0, 6),
                          ),
                        ],
                      ),
                      child: const Icon(Icons.mic, size: 38, color: Colors.white),
                    ),
                  ),
                ),
                const SizedBox(height: 18),

                // Soundwave visualizer bars
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [8, 16, 26, 12, 32, 22, 14, 28, 18, 10]
                      .map((h) => Container(
                            width: 3.5,
                            height: h.toDouble(),
                            margin: const EdgeInsets.symmetric(horizontal: 2.5),
                            decoration: BoxDecoration(
                              color: const Color(0xFF9A3412),
                              borderRadius: BorderRadius.circular(2),
                            ),
                          ))
                      .toList(),
                ),
                const SizedBox(height: 16),

                // Real-time Transcription Box
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFFF7ED),
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: const Color(0xFFFFEDD5)),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: const [
                          Icon(Icons.graphic_eq, size: 14, color: Color(0xFF16A34A)),
                          SizedBox(width: 6),
                          Text('Real-time Transcription', style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.bold, color: Color(0xFF4A372D))),
                        ],
                      ),
                      const SizedBox(height: 6),
                      RichText(
                        text: const TextSpan(
                          style: TextStyle(fontSize: 12, color: Color(0xFF2D2421), height: 1.4),
                          children: [
                            TextSpan(text: '“...natural bamboo fruit basket with double rim... '),
                            TextSpan(
                              text: '250 rupees wholesale',
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                color: Color(0xFF7C2D12),
                                backgroundColor: Color(0xFFFED7AA),
                              ),
                            ),
                            TextSpan(text: ' ...”'),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 16),

                // Done Recording Button
                GestureDetector(
                  onTap: () {
                    setState(() => _flowStep = 5); // Navigates to p6 (AI Draft Preview)
                  },
                  child: Container(
                    width: double.infinity,
                    padding: const EdgeInsets.symmetric(vertical: 13),
                    decoration: BoxDecoration(
                      color: const Color(0xFF9A3412),
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: const [
                        Icon(Icons.check_circle_outline, color: Colors.white, size: 16),
                        SizedBox(width: 6),
                        Text('Done Recording', style: TextStyle(color: Colors.white, fontSize: 13.5, fontWeight: FontWeight.bold)),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),

          // Footer note: Zero typing needed
          Center(
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: const [
                Icon(Icons.lightbulb_outline, size: 14, color: Color(0xFF9A3412)),
                SizedBox(width: 6),
                Text(
                  'Zero typing needed • Speak in your natural rhythm',
                  style: TextStyle(fontSize: 11, color: Color(0xFF7A685F), fontWeight: FontWeight.w600),
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),
        ],
      ),
    );
  }

  // =========================================================================
  // SCREEN 6: p6 - Product Preview / AI Description Review
  // =========================================================================
  Widget _buildScreenP6AiDraftPreview() {
    return SingleChildScrollView(
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              IconButton(
                icon: const Icon(Icons.arrow_back, color: Color(0xFF2D2421)),
                onPressed: _prevStep,
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Row(
                    children: [
                      const Text('Product Preview ', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: Color(0xFF2D2421))),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                        decoration: BoxDecoration(
                          color: const Color(0xFFDCFCE7),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: const Text('✨ AI Generated • Verified', style: TextStyle(fontSize: 8.5, fontWeight: FontWeight.bold, color: Color(0xFF15803D))),
                      ),
                    ],
                  ),
                  const Text('Step 2 of 2 • Review & Confirm', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: Color(0xFF7A685F))),
                ],
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  color: const Color(0xFFFAF4F0),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                child: const Text('English ▾', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF4A372D))),
              ),
            ],
          ),
          const SizedBox(height: 12),

          // AI Craft Draft Ready Banner
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: const Color(0xFFFFF7ED),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: const Color(0xFFFFEDD5)),
            ),
            child: Row(
              children: const [
                Icon(Icons.record_voice_over, color: Color(0xFF9A3412), size: 20),
                SizedBox(width: 8),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('AI Craft Draft Ready', style: TextStyle(fontSize: 12.5, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
                      SizedBox(height: 2),
                      Text('Here is what AI created from your voice note. Tap any item to edit with voice.', style: TextStyle(fontSize: 10.5, color: Color(0xFF7A685F))),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 10),

          // Input Voice Clip Player
          Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              color: const Color(0xFFFAF3EE),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: const Color(0xFFEADFD6)),
            ),
            child: Row(
              children: [
                GestureDetector(
                  onTap: () => setState(() => _isPlayingAudio = !_isPlayingAudio),
                  child: Container(
                    padding: const EdgeInsets.all(8),
                    decoration: const BoxDecoration(
                      color: Color(0xFF9A3412),
                      shape: BoxShape.circle,
                    ),
                    child: Icon(_isPlayingAudio ? Icons.pause : Icons.play_arrow, color: Colors.white, size: 16),
                  ),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: const [
                      Text('Input Voice Clip', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Color(0xFF7A685F))),
                      Text('"Handmade bamboo basket..."', style: TextStyle(fontSize: 11, fontStyle: FontStyle.italic, color: Color(0xFF2D2421))),
                    ],
                  ),
                ),
                const Text('0:14', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Color(0xFF7A685F))),
                const SizedBox(width: 6),
                TextButton(
                  onPressed: () => setState(() => _flowStep = 4),
                  child: const Text('🔄 Re-record', style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.bold, color: Color(0xFF9A3412))),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),

          // Main Product Card with Image & Specs
          Container(
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(18),
              border: Border.all(color: const Color(0xFFEADFD6)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Stack(
                  children: [
                    ClipRRect(
                      borderRadius: const BorderRadius.vertical(top: Radius.circular(18)),
                      child: Image.network(
                        'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600',
                        height: 140,
                        width: double.infinity,
                        fit: BoxFit.cover,
                      ),
                    ),
                    Positioned(
                      top: 10,
                      left: 10,
                      child: Row(
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 3),
                            decoration: BoxDecoration(
                              color: Colors.white.withOpacity(0.9),
                              borderRadius: BorderRadius.circular(8),
                            ),
                            child: const Text('✨ AI Cataloged', style: TextStyle(fontSize: 9, fontWeight: FontWeight.bold, color: Color(0xFF9A3412))),
                          ),
                          const SizedBox(width: 4),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 3),
                            decoration: BoxDecoration(
                              color: const Color(0xFFDCFCE7),
                              borderRadius: BorderRadius.circular(8),
                            ),
                            child: const Text('✔ GI Cluster Verified', style: TextStyle(fontSize: 9, fontWeight: FontWeight.bold, color: Color(0xFF15803D))),
                          ),
                        ],
                      ),
                    ),
                    Positioned(
                      bottom: 10,
                      right: 10,
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(
                          color: Colors.black.withOpacity(0.7),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: Row(
                          children: const [
                            Icon(Icons.camera_alt, size: 10, color: Colors.white),
                            SizedBox(width: 4),
                            Text('Change Photo', style: TextStyle(color: Colors.white, fontSize: 9.5, fontWeight: FontWeight.bold)),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
                Padding(
                  padding: const EdgeInsets.all(12.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: const [
                          Expanded(
                            child: Text(
                              'Handmade Woven Bamboo Fruit Basket',
                              style: TextStyle(fontSize: 14.5, fontWeight: FontWeight.w900, color: Color(0xFF2D2421)),
                            ),
                          ),
                          Icon(Icons.mic, size: 16, color: Color(0xFF9A3412)),
                        ],
                      ),
                      const SizedBox(height: 6),
                      Container(
                        padding: const EdgeInsets.all(10),
                        decoration: BoxDecoration(
                          color: const Color(0xFFFAF4F0),
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: const [
                            Expanded(
                              child: Text(
                                'Handcrafted from 100% natural treated Assam bamboo with traditional lattice weave, double rim reinforcement, and food-safe finish. Ideal for dining storage, eco-friendly gift hampers, and artisanal home decor.',
                                style: TextStyle(fontSize: 11, color: Color(0xFF4A372D), height: 1.3),
                              ),
                            ),
                            SizedBox(width: 6),
                            Icon(Icons.mic, size: 14, color: Color(0xFF9A3412)),
                          ],
                        ),
                      ),
                      const SizedBox(height: 12),

                      // Extracted Specifications Grid (2x2)
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: const [
                          Text('Extracted Specifications', style: TextStyle(fontSize: 11.5, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
                          Text('👆 Tap tile to speak', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Color(0xFF9A3412))),
                        ],
                      ),
                      const SizedBox(height: 8),

                      GridView.count(
                        crossAxisCount: 2,
                        shrinkWrap: true,
                        physics: const NeverScrollableScrollPhysics(),
                        crossAxisSpacing: 8,
                        mainAxisSpacing: 8,
                        childAspectRatio: 1.8,
                        children: [
                          _buildSpecTile('Category', 'Home & Kitchen / Dining', '🎙️ Tap to edit'),
                          _buildSpecTile('Material', '100% Natural River Bamboo', '🎙️ Tap to edit'),
                          _buildSpecTile('Dimensions', '12" L × 12" W × 6" H', 'Estimated via voice'),
                          _buildSpecTile('Finish & Color', 'Natural Golden Honey', '🎙️ Tap to edit'),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 14),

          // Primary Button: Looks Good — Continue ➔
          GestureDetector(
            onTap: () {
              setState(() => _flowStep = 6); // Navigates to p7 (Fair Pricing)
            },
            child: Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 14),
              decoration: BoxDecoration(
                color: const Color(0xFF9A3412),
                borderRadius: BorderRadius.circular(16),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Text('Looks Good — Continue', style: TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.bold)),
                  SizedBox(width: 6),
                  Icon(Icons.arrow_forward, color: Colors.white, size: 16),
                ],
              ),
            ),
          ),
          const SizedBox(height: 8),

          // Secondary Button: Edit Whole Card with Voice
          SizedBox(
            width: double.infinity,
            child: OutlinedButton.icon(
              onPressed: () => setState(() => _flowStep = 4),
              icon: const Icon(Icons.mic, size: 15, color: Color(0xFF9A3412)),
              label: const Text('Edit Whole Card With Voice', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Color(0xFF9A3412))),
              style: OutlinedButton.styleFrom(
                side: const BorderSide(color: Color(0xFFE5D5CB)),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                padding: const EdgeInsets.symmetric(vertical: 10),
              ),
            ),
          ),
          const SizedBox(height: 20),
        ],
      ),
    );
  }

  Widget _buildSpecTile(String title, String value, String sub) {
    return Container(
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(
        color: const Color(0xFFFAF3EE),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: const Color(0xFFEADFD6)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(title, style: const TextStyle(fontSize: 9.5, color: Color(0xFF7A685F))),
          const SizedBox(height: 2),
          Text(value, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF2D2421)), maxLines: 1, overflow: TextOverflow.ellipsis),
          const SizedBox(height: 2),
          Text(sub, style: const TextStyle(fontSize: 8.5, color: Color(0xFF9A3412))),
        ],
      ),
    );
  }

  // =========================================================================
  // SCREEN 7: p7 - Know Your Fair Price (Fair Pricing Assistant)
  // =========================================================================
  Widget _buildScreenP7FairPricing() {
    return SingleChildScrollView(
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              IconButton(
                icon: const Icon(Icons.arrow_back, color: Color(0xFF2D2421)),
                onPressed: _prevStep,
              ),
              Column(
                children: const [
                  Text('Know Your Fair Price', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: Color(0xFF2D2421))),
                  Text('Step 3 of 3 • Price Intelligence', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: Color(0xFF7A685F))),
                ],
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  color: const Color(0xFFFAF3EE),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: const Color(0xFFE5D5CB)),
                ),
                child: Row(
                  children: const [
                    Icon(Icons.volume_up, size: 14, color: Color(0xFF9A3412)),
                    SizedBox(width: 4),
                    Text('Listen', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF9A3412))),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),

          // AI Cost & Wage Calculator Banner
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: const Color(0xFFFFF7ED),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: const Color(0xFFFFEDD5)),
            ),
            child: Row(
              children: [
                const Icon(Icons.calculate_outlined, color: Color(0xFF9A3412), size: 22),
                const SizedBox(width: 8),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          const Text('AI Cost & Wage Calculator ', style: TextStyle(fontSize: 12.5, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 1),
                            decoration: BoxDecoration(color: const Color(0xFFDCFCE7), borderRadius: BorderRadius.circular(4)),
                            child: const Text('Active', style: TextStyle(fontSize: 8.5, fontWeight: FontWeight.bold, color: Color(0xFF15803D))),
                          ),
                        ],
                      ),
                      const SizedBox(height: 2),
                      const Text(
                        'Ensuring you never sell below fair living wage while staying competitive for bulk B2B buyers.',
                        style: TextStyle(fontSize: 10.5, color: Color(0xFF7A685F)),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 10),

          // Small Product Card Banner
          Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: const Color(0xFFEADFD6)),
            ),
            child: Row(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(8),
                  child: Image.network(
                    'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=100',
                    width: 48,
                    height: 48,
                    fit: BoxFit.cover,
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: const [
                      Text('✔ GI Certified • Assam Bamboo', style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.bold, color: Color(0xFF15803D))),
                      Text('Handmade Woven Bamboo Basket', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
                      Text('Cluster Code: ASM-KAM-42', style: TextStyle(fontSize: 9.5, color: Color(0xFF7A685F))),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),

          // Interactive Cost Breakdown
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: const [
              Text('Interactive Cost Breakdown', style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
              Text('Tap card to edit', style: TextStyle(fontSize: 10, color: Color(0xFF7A685F))),
            ],
          ),
          const SizedBox(height: 8),

          _buildCostItemTile('🪵', 'Raw Materials', 'Treated Assam Cane ₹55 • Polish ₹30', '₹${_rawMaterialCost.toInt()}', 'Adjust ✏️'),
          _buildCostItemTile('👤', 'Artisan Labor & Time', '3.5 hours weaving @ ₹34/hr benchmark', '₹${_artisanLaborCost.toInt()}', 'Fair rate'),
          _buildCostItemTile('💡', 'Cluster Overhead', 'Tools, shared shed & transport', '₹${_clusterOverhead.toInt()}', 'Adjust ✏️'),
          _buildCostItemTile('📈', 'Fair Profit (20%)', 'Artisan growth & tool maintenance', '₹${_fairProfit.toInt()}', 'Automated'),
          const SizedBox(height: 10),

          // Voice Adjustment Bar
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            decoration: BoxDecoration(
              color: const Color(0xFFFAF3EE),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: const Color(0xFFEADFD6)),
            ),
            child: Row(
              children: [
                const Icon(Icons.mic, size: 16, color: Color(0xFF9A3412)),
                const SizedBox(width: 8),
                const Expanded(
                  child: Text('Say "Increase labor to 150 rupees" or tap to', style: TextStyle(fontSize: 11, color: Color(0xFF6B5A51))),
                ),
                Container(
                  padding: const EdgeInsets.all(4),
                  decoration: const BoxDecoration(color: Color(0xFF9A3412), shape: BoxShape.circle),
                  child: const Icon(Icons.mic, size: 12, color: Colors.white),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),

          // Total Production Cost & Recommended Base Price
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: const Color(0xFFEADFD6)),
            ),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const [
                        Text('Total Production Cost', style: TextStyle(fontSize: 10.5, color: Color(0xFF7A685F))),
                        Text('₹230', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: Color(0xFF2D2421))),
                      ],
                    ),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        const Text('Recommended Base Price', style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.bold, color: Color(0xFF9A3412))),
                        Text('₹${_recommendedBasePrice} / piece', style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: Color(0xFF9A3412))),
                      ],
                    ),
                  ],
                ),
                const SizedBox(height: 10),
                Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(
                    color: const Color(0xFFDCFCE7),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Row(
                    children: const [
                      Icon(Icons.verified_user, size: 16, color: Color(0xFF15803D)),
                      SizedBox(width: 6),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Fair Wage Certified • ₹780/day artisan income', style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.bold, color: Color(0xFF15803D))),
                            Text('Meets Indian Handicraft Living Standard Benchmark', style: TextStyle(fontSize: 9, color: Color(0xFF166534))),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),

          // Market Benchmark Comparison Card
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: const Color(0xFFEADFD6)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: const [
                    Text('Market Benchmark Comparison', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
                    Icon(Icons.info_outline, size: 14, color: Color(0xFF7A685F)),
                  ],
                ),
                const SizedBox(height: 4),
                const Text('Transparency check against local middlemen and urban commercial retail margins.', style: TextStyle(fontSize: 10, color: Color(0xFF7A685F))),
                const SizedBox(height: 8),

                // 3 Tier Comparison
                _buildBenchmarkRow('Local Middleman Offer', '₹160', 'Exploitative', const Color(0xFFDC2626)),
                const SizedBox(height: 6),
                _buildBenchmarkRow('HunarSangam Living Wage', '₹250 – ₹280', 'Fair & Viable', const Color(0xFF15803D)),
                const SizedBox(height: 6),
                _buildBenchmarkRow('Retail Metro Market Price', '₹650 – ₹850', 'Healthy B2B margin', const Color(0xFF0284C7)),
              ],
            ),
          ),
          const SizedBox(height: 14),

          // Lock Fair Price Button Row
          Row(
            children: [
              OutlinedButton(
                onPressed: () {},
                style: OutlinedButton.styleFrom(
                  side: const BorderSide(color: Color(0xFFE5D5CB)),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                  padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
                ),
                child: const Text('Custom', style: TextStyle(fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: GestureDetector(
                  onTap: () {
                    setState(() => _flowStep = 7); // Navigates to p8 (Bulk Record)
                  },
                  child: Container(
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    decoration: BoxDecoration(
                      color: const Color(0xFF9A3412),
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: const [
                        Text('Lock Fair Price (₹280) & Proceed', style: TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.bold)),
                        SizedBox(width: 6),
                        Icon(Icons.arrow_forward, color: Colors.white, size: 16),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Center(
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: const [
                Icon(Icons.shield_outlined, size: 12, color: Color(0xFF15803D)),
                SizedBox(width: 4),
                Text('Verified against Ministry of Textiles & Handicraft Fair Wage Index', style: TextStyle(fontSize: 9.5, color: Color(0xFF7A685F))),
              ],
            ),
          ),
          const SizedBox(height: 20),
        ],
      ),
    );
  }

  Widget _buildCostItemTile(String emoji, String title, String subtitle, String price, String badge) {
    return Container(
      margin: const EdgeInsets.only(bottom: 6),
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: const Color(0xFFEADFD6)),
      ),
      child: Row(
        children: [
          Text(emoji, style: const TextStyle(fontSize: 16)),
          const SizedBox(width: 8),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
                Text(subtitle, style: const TextStyle(fontSize: 10, color: Color(0xFF7A685F))),
              ],
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(price, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w900, color: Color(0xFF9A3412))),
              Text(badge, style: const TextStyle(fontSize: 9, fontWeight: FontWeight.bold, color: Color(0xFF7A685F))),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildBenchmarkRow(String title, String price, String badge, Color badgeColor) {
    return Container(
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(
        color: const Color(0xFFFAF3EE),
        borderRadius: BorderRadius.circular(10),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(title, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: Color(0xFF2D2421))),
          Row(
            children: [
              Text(price, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
              const SizedBox(width: 6),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                decoration: BoxDecoration(
                  color: badgeColor.withOpacity(0.15),
                  borderRadius: BorderRadius.circular(6),
                ),
                child: Text(badge, style: TextStyle(fontSize: 8.5, fontWeight: FontWeight.bold, color: badgeColor)),
              ),
            ],
          ),
        ],
      ),
    );
  }

  // =========================================================================
  // SCREEN 8: p8 - Bulk Record (Capacity Intake)
  // =========================================================================
  Widget _buildScreenP8BulkRecord() {
    return SingleChildScrollView(
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              IconButton(
                icon: const Icon(Icons.arrow_back, color: Color(0xFF2D2421)),
                onPressed: _prevStep,
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: const [
                  Text('Bulk Record', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w900, color: Color(0xFF2D2421))),
                  Text('Product: Assam Cane Basket', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: Color(0xFF7A685F))),
                ],
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  color: const Color(0xFFFAF4F0),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                child: const Text('🌐 English ▾', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF4A372D))),
              ),
            ],
          ),
          const SizedBox(height: 12),

          // Product Summary Card
          Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              color: const Color(0xFFFFF7ED),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: const Color(0xFFFFEDD5)),
            ),
            child: Row(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(10),
                  child: Image.network(
                    'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=120',
                    width: 56,
                    height: 56,
                    fit: BoxFit.cover,
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text('Woven Bamboo Basket', style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
                      const Text('Assam Golden Cane • Hand-plaited', style: TextStyle(fontSize: 10.5, color: Color(0xFF7A685F))),
                      const SizedBox(height: 4),
                      Row(
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                            decoration: BoxDecoration(color: const Color(0xFFFED7AA), borderRadius: BorderRadius.circular(6)),
                            child: const Text('🏷️ ₹280/pc', style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.bold, color: Color(0xFF9A3412))),
                          ),
                          const SizedBox(width: 6),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                            decoration: BoxDecoration(color: const Color(0xFFFED7AA), borderRadius: BorderRadius.circular(6)),
                            child: const Text('📦 Min: 20 pcs', style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.bold, color: Color(0xFF9A3412))),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 14),

          // Question Card: How many pieces you made in 1 day?
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: const Color(0xFFEADFD6)),
            ),
            child: Row(
              children: const [
                Icon(Icons.auto_fix_high, color: Color(0xFF9A3412), size: 18),
                SizedBox(width: 8),
                Expanded(
                  child: Text(
                    'How many pieces you made in 1 day ( 8 hours work )',
                    style: TextStyle(fontSize: 13, fontWeight: FontWeight.w900, color: Color(0xFF2D2421)),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 10),

          // Try Saying Suggestions
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text('💡 Try saying :', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF7A685F))),
              const SizedBox(height: 6),
              _buildTrySayingTile('🎙️ Say: "10 pieces in 1 day"'),
              const SizedBox(height: 4),
              _buildTrySayingTile('🎙️ Say: "10–20 pieces in 1 day"'),
            ],
          ),
          const SizedBox(height: 14),

          // Recording Widget
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: const Color(0xFFEADFD6)),
            ),
            child: Column(
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFEF2F2),
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: const Color(0xFFFECACA)),
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: const [
                      Icon(Icons.fiber_manual_record, size: 10, color: Color(0xFFDC2626)),
                      SizedBox(width: 4),
                      Text('Recording Live (0:12)', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFFDC2626))),
                    ],
                  ),
                ),
                const SizedBox(height: 16),

                Container(
                  width: 90,
                  height: 90,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: const Color(0xFFFFEDD5),
                  ),
                  child: Center(
                    child: Container(
                      width: 66,
                      height: 66,
                      decoration: const BoxDecoration(
                        shape: BoxShape.circle,
                        color: Color(0xFF9A3412),
                      ),
                      child: const Icon(Icons.mic, size: 32, color: Colors.white),
                    ),
                  ),
                ),
                const SizedBox(height: 12),

                // Soundwave
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [8, 18, 24, 12, 28, 16, 10, 22, 14, 6]
                      .map((h) => Container(
                            width: 3,
                            height: h.toDouble(),
                            margin: const EdgeInsets.symmetric(horizontal: 2.5),
                            decoration: BoxDecoration(
                              color: const Color(0xFF9A3412),
                              borderRadius: BorderRadius.circular(2),
                            ),
                          ))
                      .toList(),
                ),
                const SizedBox(height: 14),

                // Transcription
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFFF7ED),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: const [
                      Text('Real-time Transcription', style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.bold, color: Color(0xFF7A685F))),
                      SizedBox(height: 4),
                      Text(
                        '"I made 15 pieces in 1 day for 8 hours work"',
                        style: TextStyle(fontSize: 11.5, fontWeight: FontWeight.bold, color: Color(0xFF2D2421)),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 14),

                // Save & Submit Button
                GestureDetector(
                  onTap: () {
                    setState(() => _flowStep = 8); // Navigates to p9 (Preview Product)
                  },
                  child: Container(
                    width: double.infinity,
                    padding: const EdgeInsets.symmetric(vertical: 12),
                    decoration: BoxDecoration(
                      color: const Color(0xFF9A3412),
                      borderRadius: BorderRadius.circular(14),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: const [
                        Icon(Icons.check_circle_outline, color: Colors.white, size: 16),
                        SizedBox(width: 6),
                        Text('Save and Submit Product', style: TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.bold)),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),
        ],
      ),
    );
  }

  Widget _buildTrySayingTile(String text) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(
        color: const Color(0xFFFAF3EE),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: const Color(0xFFEADFD6)),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(text, style: const TextStyle(fontSize: 11, color: Color(0xFF4A372D))),
          const Icon(Icons.north_east, size: 14, color: Color(0xFF9A3412)),
        ],
      ),
    );
  }

  // =========================================================================
  // SCREEN 9: p9 - Preview Product (Channels & AR Preview)
  // =========================================================================
  Widget _buildScreenP9FinalPreview() {
    return SingleChildScrollView(
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              IconButton(
                icon: const Icon(Icons.arrow_back, color: Color(0xFF2D2421)),
                onPressed: _prevStep,
              ),
              const Text('Preview Product', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: Color(0xFF2D2421))),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                decoration: BoxDecoration(
                  color: const Color(0xFFDCFCE7),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: const Text('• Active Listing', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Color(0xFF15803D))),
              ),
            ],
          ),
          const SizedBox(height: 12),

          // Main Product Card
          Container(
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(18),
              border: Border.all(color: const Color(0xFFEADFD6)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Stack(
                  children: [
                    ClipRRect(
                      borderRadius: const BorderRadius.vertical(top: Radius.circular(18)),
                      child: Image.network(
                        'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600',
                        height: 150,
                        width: double.infinity,
                        fit: BoxFit.cover,
                      ),
                    ),
                    Positioned(
                      top: 10,
                      left: 10,
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(
                          color: Colors.white.withOpacity(0.9),
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: Row(
                          children: const [
                            Icon(Icons.verified, size: 12, color: Color(0xFF15803D)),
                            SizedBox(width: 4),
                            Text('Verified Dimensions', style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
                          ],
                        ),
                      ),
                    ),
                    Positioned(
                      bottom: 10,
                      right: 10,
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(
                          color: Colors.black.withOpacity(0.7),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: const Text(
                          '👁️ Verified with ₹10 coin',
                          style: TextStyle(color: Colors.white, fontSize: 9.5, fontWeight: FontWeight.bold),
                        ),
                      ),
                    ),
                  ],
                ),
                Padding(
                  padding: const EdgeInsets.all(12.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text('PRODUCT CATALOG SUMMARY', style: TextStyle(fontSize: 9, fontWeight: FontWeight.bold, color: Color(0xFFB45309), letterSpacing: 0.5)),
                      const SizedBox(height: 2),
                      const Text(
                        'Handmade Woven Bamboo Fruit Basket',
                        style: TextStyle(fontSize: 14.5, fontWeight: FontWeight.w900, color: Color(0xFF2D2421)),
                      ),
                      const SizedBox(height: 8),

                      // Two Stats Cards
                      Row(
                        children: [
                          Expanded(
                            child: Container(
                              padding: const EdgeInsets.all(10),
                              decoration: BoxDecoration(
                                color: const Color(0xFFFAF3EE),
                                borderRadius: BorderRadius.circular(12),
                              ),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: const [
                                  Text('Wholesale Unit Price', style: TextStyle(fontSize: 9.5, color: Color(0xFF7A685F))),
                                  Text('₹280 / pc', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w900, color: Color(0xFF9A3412))),
                                ],
                              ),
                            ),
                          ),
                          const SizedBox(width: 8),
                          Expanded(
                            child: Container(
                              padding: const EdgeInsets.all(10),
                              decoration: BoxDecoration(
                                color: const Color(0xFFFAF3EE),
                                borderRadius: BorderRadius.circular(12),
                              ),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: const [
                                  Text('Specifications', style: TextStyle(fontSize: 9.5, color: Color(0xFF7A685F))),
                                  Text('12.4" W × 6.2" H', style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
                                  Text('Weight: 420g', style: TextStyle(fontSize: 9.5, color: Color(0xFF7A685F))),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 8),

                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: const [
                          Text('📊 Capacity: 15 pcs / day', style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
                          Text('🕒 Lead: 5 - 7 days', style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),

          // Distribution Channels Activated
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: const Color(0xFFEADFD6)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text('Distribution Channels Activated', style: TextStyle(fontSize: 12.5, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                      decoration: BoxDecoration(color: const Color(0xFFDCFCE7), borderRadius: BorderRadius.circular(6)),
                      child: const Text('3 Active', style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.bold, color: Color(0xFF15803D))),
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                _buildChannelItem(Icons.storefront, 'HunarSangam Marketplace', 'Live • Instant Quotations enabled'),
                _buildChannelItem(Icons.hub_outlined, 'ONDC Handicraft Registry', 'Synced • Pan-India open network'),
                _buildChannelItem(Icons.share, 'Direct WhatsApp Catalog', 'Link ready to share with buyers'),
              ],
            ),
          ),
          const SizedBox(height: 10),

          // Description box with voice edit
          Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              color: const Color(0xFFFAF3EE),
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: const Color(0xFFEADFD6)),
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Expanded(
                  child: Text(
                    'Handcrafted from 100% natural treated Assam bamboo with traditional lattice weave, double rim reinforcement, and food-safe finish. Ideal for dining storage, eco-friendly gift hampers, and artisanal home decor.',
                    style: TextStyle(fontSize: 10.5, color: Color(0xFF4A372D), height: 1.3),
                  ),
                ),
                SizedBox(width: 6),
                Icon(Icons.mic, size: 14, color: Color(0xFF9A3412)),
              ],
            ),
          ),
          const SizedBox(height: 10),

          const Text(
            'Preview: "Namaste! View my new verified craft catalog on HunarSangam..."',
            style: TextStyle(fontSize: 10, fontStyle: FontStyle.italic, color: Color(0xFF7A685F)),
          ),
          const SizedBox(height: 12),

          // Primary CTA: Submit & publish product
          GestureDetector(
            onTap: () {
              setState(() => _flowStep = 9); // Navigates to p10 (Celebration / Published)
            },
            child: Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 14),
              decoration: BoxDecoration(
                color: const Color(0xFF9A3412),
                borderRadius: BorderRadius.circular(16),
              ),
              child: const Center(
                child: Text(
                  'Submit & publish product',
                  style: TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.bold),
                ),
              ),
            ),
          ),
          const SizedBox(height: 20),
        ],
      ),
    );
  }

  Widget _buildChannelItem(IconData icon, String title, String subtitle) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4.0),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(6),
            decoration: BoxDecoration(color: const Color(0xFFFFF7ED), borderRadius: BorderRadius.circular(8)),
            child: Icon(icon, color: const Color(0xFF9A3412), size: 16),
          ),
          const SizedBox(width: 8),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
                Text(subtitle, style: const TextStyle(fontSize: 9.5, color: Color(0xFF7A685F))),
              ],
            ),
          ),
          const Icon(Icons.check_circle, color: Color(0xFF15803D), size: 16),
        ],
      ),
    );
  }

  // =========================================================================
  // SCREEN 10: p10 - Catalog Published! (ONDC Ready Celebration)
  // =========================================================================
  Widget _buildScreenP10CatalogPublished() {
    return SingleChildScrollView(
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Top Header with Close and Active Listing Pill
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              IconButton(
                icon: const Icon(Icons.close, color: Color(0xFF2D2421)),
                onPressed: _goToCatalog,
              ),
              const Text('Catalog Published!', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w900, color: Color(0xFF2D2421))),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                decoration: BoxDecoration(
                  color: const Color(0xFFDCFCE7),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: const Text('• Active Listing', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Color(0xFF15803D))),
              ),
            ],
          ),
          const SizedBox(height: 12),

          // Green Banner: Your Craft is Live & Verified!
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: const Color(0xFFFFF7ED),
              borderRadius: BorderRadius.circular(18),
              border: Border.all(color: const Color(0xFFFFEDD5)),
            ),
            child: Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(8),
                  decoration: const BoxDecoration(color: Color(0xFFDCFCE7), shape: BoxShape.circle),
                  child: const Icon(Icons.verified, color: Color(0xFF15803D), size: 24),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: const [
                      Text('B2B READY • ONDC SYNCED', style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.w900, color: Color(0xFF15803D), letterSpacing: 0.5)),
                      SizedBox(height: 2),
                      Text('Your Craft is Live & Verified!', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w900, color: Color(0xFF2D2421))),
                      SizedBox(height: 2),
                      Text(
                        'Handmade Woven Bamboo Fruit Basket is now discoverable by verified B2B buyers across India.',
                        style: TextStyle(fontSize: 10.5, color: Color(0xFF7A685F), height: 1.3),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),

          // ONDC Digital ID Card
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: const Color(0xFFEADFD6)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: const [
                        Icon(Icons.hub_outlined, color: Color(0xFF15803D), size: 16),
                        SizedBox(width: 4),
                        Text('ONDC Network Ready', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF15803D))),
                      ],
                    ),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                      decoration: BoxDecoration(color: const Color(0xFFFFEDD5), borderRadius: BorderRadius.circular(6)),
                      child: const Text('Pan-India Reach', style: TextStyle(fontSize: 9, fontWeight: FontWeight.bold, color: Color(0xFF9A3412))),
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                Row(
                  children: const [
                    Icon(Icons.verified_outlined, size: 14, color: Color(0xFFB45309)),
                    SizedBox(width: 6),
                    Text('GI Tagged Craft Authenticity', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
                  ],
                ),
                const Padding(
                  padding: EdgeInsets.only(left: 20.0),
                  child: Text('Assam Cane & Bamboo Crafts (GI Reg #431)', style: TextStyle(fontSize: 10, color: Color(0xFF7A685F))),
                ),
                const SizedBox(height: 8),

                Container(
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFAF4F0),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: const [
                          Text('Listing Digital ID', style: TextStyle(fontSize: 9.5, color: Color(0xFF7A685F))),
                          Text('#HS-BAM-8842', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w900, color: Color(0xFF9A3412))),
                        ],
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(8), border: Border.all(color: const Color(0xFFEADFD6))),
                        child: Row(
                          children: const [
                            Icon(Icons.qr_code, size: 14, color: Color(0xFF2D2421)),
                            SizedBox(width: 4),
                            Text('QR Code', style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.bold, color: Color(0xFF2D2421))),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),

          // WhatsApp Share Button (Green)
          GestureDetector(
            onTap: () {},
            child: Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 14),
              decoration: BoxDecoration(
                color: const Color(0xFF25D366),
                borderRadius: BorderRadius.circular(16),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Icon(Icons.chat, color: Colors.white, size: 18),
                  SizedBox(width: 8),
                  Text('Share Catalog Card on WhatsApp', style: TextStyle(color: Colors.white, fontSize: 13.5, fontWeight: FontWeight.bold)),
                ],
              ),
            ),
          ),
          const SizedBox(height: 8),

          // Go to Artisan Dashboard Button (Brown)
          GestureDetector(
            onTap: _goToCatalog,
            child: Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 14),
              decoration: BoxDecoration(
                color: const Color(0xFF9A3412),
                borderRadius: BorderRadius.circular(16),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Text('Go to Artisan Dashboard', style: TextStyle(color: Colors.white, fontSize: 13.5, fontWeight: FontWeight.bold)),
                  SizedBox(width: 6),
                  Icon(Icons.arrow_forward, color: Colors.white, size: 16),
                ],
              ),
            ),
          ),
          const SizedBox(height: 8),

          // + Add Another Craft Button
          GestureDetector(
            onTap: () {
              setState(() => _flowStep = 1); // Loops to step 1
            },
            child: Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 12),
              decoration: BoxDecoration(
                color: const Color(0xFFFAF3EE),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: const Color(0xFFEADFD6)),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Icon(Icons.mic, color: Color(0xFF9A3412), size: 16),
                  SizedBox(width: 6),
                  Text('+ Add Another Craft (Voice)', style: TextStyle(color: Color(0xFF9A3412), fontSize: 13, fontWeight: FontWeight.bold)),
                ],
              ),
            ),
          ),
          const SizedBox(height: 20),
        ],
      ),
    );
  }

  // =========================================================================
  // Persistent 5-Tab Bottom Navigation Bar
  // =========================================================================
  Widget _buildBottomNavigation() {
    return Container(
      decoration: const BoxDecoration(
        color: Colors.white,
        border: Border(top: BorderSide(color: Color(0xFFEADFD6), width: 1)),
      ),
      padding: const EdgeInsets.symmetric(vertical: 6),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          _buildNavItem(Icons.storefront_outlined, 'Home', 0),
          _buildNavItem(Icons.palette_outlined, 'Products', 1),
          _buildNavItem(Icons.receipt_long_outlined, 'Orders', 2),
          _buildNavItem(Icons.group_outlined, 'Collaborate', 3),
          _buildNavItem(Icons.person_outline, 'Profile', 4),
        ],
      ),
    );
  }

  Widget _buildNavItem(IconData icon, String label, int index) {
    final isSelected = _currentNavIndex == index;
    return GestureDetector(
      onTap: () {
        if (index == 0 && widget.onNavigateTab != null) {
          widget.onNavigateTab!(0);
        } else if (index == 1) {
          setState(() {
            _currentNavIndex = 1;
            _flowStep = 0; // Return to catalog
          });
        } else {
          setState(() => _currentNavIndex = index);
        }
      },
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
        decoration: BoxDecoration(
          color: isSelected ? const Color(0xFFF8E5D8) : Colors.transparent,
          borderRadius: BorderRadius.circular(14),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 20, color: isSelected ? const Color(0xFF8C3A16) : const Color(0xFF7A685F)),
            const SizedBox(height: 2),
            Text(
              label,
              style: TextStyle(
                fontSize: 10,
                fontWeight: isSelected ? FontWeight.w900 : FontWeight.w500,
                color: isSelected ? const Color(0xFF8C3A16) : const Color(0xFF7A685F),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
