// lib/main.dart

import 'package:flutter/material.dart';
import 'models/onboarding_state.dart';
import 'screens/splash_welcome_screen.dart';
import 'screens/language_selection_screen.dart';
import 'screens/role_selection_screen.dart';
import 'screens/account_creation_screen.dart';
import 'screens/login_screen.dart';
import 'screens/voice_intro_screen.dart';
import 'screens/craft_selection_screen.dart';
import 'screens/profile_photo_screen.dart';
import 'screens/profile_preview_screen.dart';
import 'screens/artisan_home_screen.dart';

void main() {
  runApp(const HunarSangamApp());
}

class HunarSangamApp extends StatelessWidget {
  const HunarSangamApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'HunarSangam Artisan Platform',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        scaffoldBackgroundColor: const Color(0xFFFDFBF9),
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFFA84318),
          primary: const Color(0xFFA84318),
          secondary: const Color(0xFFD85A2A),
          surface: const Color(0xFFFDFBF9),
        ),
        fontFamily: 'Roboto',
      ),
      home: const OnboardingFlowCoordinator(),
    );
  }
}

class OnboardingFlowCoordinator extends StatefulWidget {
  const OnboardingFlowCoordinator({super.key});

  @override
  State<OnboardingFlowCoordinator> createState() => _OnboardingFlowCoordinatorState();
}

class _OnboardingFlowCoordinatorState extends State<OnboardingFlowCoordinator> {
  OnboardingState _state = const OnboardingState();
  final PageController _pageController = PageController();
  int _currentFlowIndex = 0;
  bool _isLoggedIn = false;
  bool _showingLoginScreen = false;

  void _updateState(OnboardingState newState) {
    setState(() {
      _state = newState;
    });
  }

  void _navigateToPage(int pageIndex) {
    _pageController.animateToPage(
      pageIndex,
      duration: const Duration(milliseconds: 340),
      curve: Curves.easeInOutCubic,
    );
  }

  void _nextPage() {
    if (_currentFlowIndex < 7) {
      _pageController.nextPage(
        duration: const Duration(milliseconds: 320),
        curve: Curves.easeInOutCubic,
      );
    }
  }

  void _previousPage() {
    if (_currentFlowIndex > 0) {
      _pageController.previousPage(
        duration: const Duration(milliseconds: 320),
        curve: Curves.easeInOutCubic,
      );
    }
  }

  void _goToLoginScreen() {
    setState(() {
      _showingLoginScreen = true;
    });
  }

  void _goToAccountCreation() {
    setState(() {
      _showingLoginScreen = false;
    });
    _pageController.jumpToPage(3); // Account creation page
  }

  void _performLogin([OnboardingState? sessionState]) {
    setState(() {
      if (sessionState != null) {
        _state = sessionState;
      }
      _showingLoginScreen = false;
      _isLoggedIn = true;
    });
  }

  void _completeOnboardingAndGoHome() {
    setState(() {
      _isLoggedIn = true;
    });
  }

  void _logout() {
    setState(() {
      _isLoggedIn = false;
      _showingLoginScreen = false;
      _currentFlowIndex = 0;
    });
    _pageController.jumpToPage(0);
  }

  @override
  Widget build(BuildContext context) {
    // If user is logged in or completed account creation, display Artisan Home Screen
    if (_isLoggedIn) {
      return ArtisanHomeScreen(
        state: _state,
        onLogout: _logout,
      );
    }

    // If user clicked 'Already have an account? Login'
    if (_showingLoginScreen) {
      return LoginScreen(
        initialState: _state,
        currentLanguage: _state.selectedLanguage.isNotEmpty ? _state.selectedLanguage : 'English',
        onLoginSuccess: _performLogin,
        onLoginSuccessWithState: (loggedInState) => _performLogin(loggedInState),
        onCreateAccount: _goToAccountCreation,
        onBack: _goToAccountCreation,
      );
    }

    return PageView(
      controller: _pageController,
      physics: const NeverScrollableScrollPhysics(),
      onPageChanged: (index) {
        setState(() {
          _currentFlowIndex = index;
        });
      },
      children: [
        // Screen 0: Splash & Brand Welcome Screen
        SplashWelcomeScreen(
          onGetStarted: _nextPage,
        ),

        // Screen 1: Language Selection
        LanguageSelectionScreen(
          state: _state,
          onStateChanged: _updateState,
          onBack: _previousPage,
          onContinue: _nextPage,
        ),

        // Screen 2: Role Selection
        RoleSelectionScreen(
          state: _state,
          onStateChanged: _updateState,
          onBack: _previousPage,
          onContinue: _nextPage,
        ),

        // Screen 3: Step 1 of 5 - Create Account (with 'Already have account' login link)
        AccountCreationScreen(
          state: _state,
          onStateChanged: _updateState,
          onBack: _previousPage,
          onContinue: _nextPage,
          onAlreadyHaveAccount: _goToLoginScreen,
        ),

        // Screen 4: Step 2 of 5 - Voice Intro
        VoiceIntroScreen(
          state: _state,
          onStateChanged: _updateState,
          onBack: _previousPage,
          onContinue: _nextPage,
        ),

        // Screen 5: Step 3 of 5 - Craft Selection
        CraftSelectionScreen(
          state: _state,
          onStateChanged: _updateState,
          onBack: _previousPage,
          onContinue: _nextPage,
        ),

        // Screen 6: Step 4 of 5 - Profile Photo
        ProfilePhotoScreen(
          state: _state,
          onStateChanged: _updateState,
          onBack: _previousPage,
          onContinue: _nextPage,
        ),

        // Screen 7: Step 5 of 5 - Profile Preview & Go to Home Screen
        ProfilePreviewScreen(
          state: _state,
          onStateChanged: _updateState,
          onBack: _previousPage,
          onComplete: _completeOnboardingAndGoHome,
        ),
      ],
    );
  }
}
