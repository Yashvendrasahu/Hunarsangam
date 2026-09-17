// lib/add_product/add_product_flow.dart

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
import 'screens/catalog_published_screen.dart';

/// Master Coordinator for the 10-screen Artisan "Add Product" Flow
/// Statefully orchestrates seamless progression from camera capture,
/// coin AR detection, voice description, AI draft generation, fair wage pricing,
/// bulk capacity recording, through to ONDC publication.
class AddProductFlow extends StatefulWidget {
  final int initialStep;
  final Function(int)? onNavigateTab;
  final VoidCallback? onFlowComplete;
  final String currentLanguage;

  const AddProductFlow({
    super.key,
    this.initialStep = 0,
    this.onNavigateTab,
    this.onFlowComplete,
    this.currentLanguage = 'English',
  });

  @override
  State<AddProductFlow> createState() => _AddProductFlowState();
}

class _AddProductFlowState extends State<AddProductFlow> {
  late int _currentStep;
  ProductDraft _draft = const ProductDraft();

  @override
  void initState() {
    super.initState();
    _currentStep = widget.initialStep;
  }

  void _goToStep(int step) {
    setState(() {
      _currentStep = step;
    });
  }

  @override
  Widget build(BuildContext context) {
    switch (_currentStep) {
      case 0:
        // Screen 1: Artisan Product Catalog (ar--p1)
        return ProductCatalogScreen(
          draft: _draft,
          currentLanguage: widget.currentLanguage,
          onStartAddProduct: () => _goToStep(1),
          onNavigateTab: widget.onNavigateTab,
        );

      case 1:
        // Screen 2: Product Photography Initial Camera (p2)
        return CameraCaptureScreen(
          onCapture: () => _goToStep(2),
          onBack: () => _goToStep(0),
        );

      case 2:
        // Screen 3: ₹10 Coin Size Detector AR View (p3)
        return CoinDetectorArScreen(
          draft: _draft,
          onCapture: () => _goToStep(3),
          onBack: () => _goToStep(1),
          onNavigateTab: widget.onNavigateTab,
        );

      case 3:
        // Screen 4: Photo & Dimension Review (p4)
        return DimensionReviewScreen(
          draft: _draft,
          onAccept: () => _goToStep(4),
          onRetake: () => _goToStep(2),
          onBack: () => _goToStep(2),
          onNavigateTab: widget.onNavigateTab,
        );

      case 4:
        // Screen 5: Create Product Voice-First (p5)
        return VoiceDescriptionScreen(
          draft: _draft,
          onDoneRecording: (transcription) {
            setState(() {
              _draft = _draft.copyWith(voiceClipTranscription: transcription);
            });
            _goToStep(5);
          },
          onBack: () => _goToStep(3),
          onNavigateTab: widget.onNavigateTab,
        );

      case 5:
        // Screen 6: AI Draft Preview & Confirm (p6)
        return AiDraftPreviewScreen(
          draft: _draft,
          onContinue: () => _goToStep(6),
          onVoiceEdit: () => _goToStep(4),
          onBack: () => _goToStep(4),
          onNavigateTab: widget.onNavigateTab,
        );

      case 6:
        // Screen 7: Know Your Fair Price Intelligence (p7)
        return FairPricingScreen(
          draft: _draft,
          onLockPrice: (price) {
            setState(() {
              _draft = _draft.copyWith(basePrice: price);
            });
            _goToStep(7);
          },
          onBack: () => _goToStep(5),
          onNavigateTab: widget.onNavigateTab,
        );

      case 7:
        // Screen 8: Bulk Record Capacity Voice Asking (p8)
        return BulkCapacityScreen(
          draft: _draft,
          onSaveCapacity: (capacity) {
            setState(() {
              _draft = _draft.copyWith(dailyCapacityPcs: capacity);
            });
            _goToStep(8);
          },
          onBack: () => _goToStep(6),
          onNavigateTab: widget.onNavigateTab,
        );

      case 8:
        // Screen 9: Preview Product Active Listing (p9)
        return ProductFinalPreviewScreen(
          draft: _draft,
          onSubmitPublish: () {
            setState(() {
              _draft = _draft.copyWith(isPublished: true, isOndcSynced: true);
            });
            _goToStep(9);
          },
          onBack: () => _goToStep(7),
          onNavigateTab: widget.onNavigateTab,
        );

      case 9:
        // Screen 10: Catalog Published & ONDC Ready (p10)
        return CatalogPublishedScreen(
          draft: _draft,
          onGoToDashboard: () {
            if (widget.onFlowComplete != null) {
              widget.onFlowComplete!();
            } else if (widget.onNavigateTab != null) {
              widget.onNavigateTab!(0); // Back to Home Dashboard
            } else {
              _goToStep(0);
            }
          },
          onAddAnotherCraft: () {
            setState(() {
              _draft = const ProductDraft();
            });
            _goToStep(1); // Start fresh camera capture
          },
          onNavigateTab: widget.onNavigateTab,
        );

      default:
        return ProductCatalogScreen(
          draft: _draft,
          currentLanguage: widget.currentLanguage,
          onStartAddProduct: () => _goToStep(1),
          onNavigateTab: widget.onNavigateTab,
        );
    }
  }
}
