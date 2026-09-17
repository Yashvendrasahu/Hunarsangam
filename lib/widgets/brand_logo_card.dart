// lib/widgets/brand_logo_card.dart

import 'package:flutter/material.dart';

/// Central brand emblem squircle card with deep terracotta border,
/// halo glow effect, and custom artisan insignia with Hindi calligraphy.
class BrandLogoCard extends StatelessWidget {
  final double size;

  const BrandLogoCard({
    super.key,
    this.size = 136.0,
  });

  static const Color _terracottaBorderColor = Color(0xFFB85324);
  static const Color _haloRingColor = Color(0x33D9794E);
  static const Color _cardBackgroundColor = Color(0xFFFFFBF9);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Stack(
        alignment: Alignment.center,
        children: [
          // Outer Soft Glow / Concentric Halo Ring
          Container(
            width: size + 28.0,
            height: size + 28.0,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: _haloRingColor.withValues(alpha: 0.18),
              boxShadow: [
                BoxShadow(
                  color: const Color(0xFFD9794E).withValues(alpha: 0.12),
                  blurRadius: 24.0,
                  spreadRadius: 4.0,
                ),
              ],
            ),
          ),

          // Secondary Mid Halo Ring
          Container(
            width: size + 14.0,
            height: size + 14.0,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: _haloRingColor.withValues(alpha: 0.3),
            ),
          ),

          // Primary Squircle Card Container
          Container(
            width: size,
            height: size,
            decoration: BoxDecoration(
              color: _cardBackgroundColor,
              borderRadius: BorderRadius.circular(32.0),
              border: Border.all(
                color: _terracottaBorderColor,
                width: 3.5,
              ),
              boxShadow: [
                BoxShadow(
                  color: const Color(0xFF7C3F24).withValues(alpha: 0.15),
                  offset: const Offset(0, 8),
                  blurRadius: 20.0,
                  spreadRadius: 1.0,
                ),
              ],
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(28.0),
              child: const Padding(
                padding: EdgeInsets.all(10.0),
                child: _ArtisanEmblemContent(),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

/// Internal emblem content with artisan palette, flowing colors, and Hindi branding
class _ArtisanEmblemContent extends StatelessWidget {
  const _ArtisanEmblemContent();

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        // Artisan Motifs Custom Painter (Palette + Peacock Feathers + Potter Hands)
        SizedBox(
          width: 58.0,
          height: 48.0,
          child: CustomPaint(
            painter: _ArtisanLogoPainter(),
          ),
        ),
        const SizedBox(height: 4.0),

        // Hindi Typography "हुनर संगम"
        const Text(
          'हुनर संगम',
          style: TextStyle(
            fontFamily: 'serif',
            fontSize: 16.0,
            fontWeight: FontWeight.w800,
            color: Color(0xFF7C3F24),
            letterSpacing: 0.5,
            height: 1.1,
          ),
        ),

        const SizedBox(height: 2.0),

        // Sub-motto flourish line
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              width: 12.0,
              height: 1.0,
              color: const Color(0xFFB85324).withValues(alpha: 0.6),
            ),
            const SizedBox(width: 4.0),
            const Text(
              'कला • शिल्प • एकता',
              style: TextStyle(
                fontSize: 6.5,
                fontWeight: FontWeight.w600,
                color: Color(0xFF8C5338),
                letterSpacing: 0.2,
              ),
            ),
            const SizedBox(width: 4.0),
            Container(
              width: 12.0,
              height: 1.0,
              color: const Color(0xFFB85324).withValues(alpha: 0.6),
            ),
          ],
        ),
      ],
    );
  }
}

/// Vector painter rendering the artistic craft silhouette,
/// paintbrush swirls, and colorful craft spectrum (terracotta, turquoise, saffron).
class _ArtisanLogoPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final double w = size.width;
    final double h = size.height;

    // Outer palette silhouette
    final Paint palettePaint = Paint()
      ..color = const Color(0xFF9E4B28)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.0
      ..strokeCap = StrokeCap.round;

    final Path palettePath = Path();
    palettePath.moveTo(w * 0.22, h * 0.85);
    palettePath.cubicTo(
      w * 0.05, h * 0.70,
      w * 0.05, h * 0.30,
      w * 0.35, h * 0.18,
    );
    palettePath.cubicTo(
      w * 0.65, h * 0.05,
      w * 0.92, h * 0.25,
      w * 0.85, h * 0.60,
    );
    palettePath.cubicTo(
      w * 0.80, h * 0.82,
      w * 0.55, h * 0.90,
      w * 0.40, h * 0.75,
    );
    palettePath.cubicTo(
      w * 0.32, h * 0.65,
      w * 0.25, h * 0.80,
      w * 0.22, h * 0.85,
    );
    canvas.drawPath(palettePath, palettePaint);

    // Dynamic colorful paint daubs (Turquoise, Saffron, Gold, Terracotta)
    final List<Color> swatchColors = [
      const Color(0xFFE65100), // Rich Saffron
      const Color(0xFF00897B), // Peacock Teal
      const Color(0xFF1E88E5), // Vibrant Azure
      const Color(0xFFFBC02D), // Marigold Gold
      const Color(0xFFC2185B), // Madder Rose
    ];

    final List<Offset> swatchPoints = [
      Offset(w * 0.34, h * 0.34),
      Offset(w * 0.50, h * 0.24),
      Offset(w * 0.68, h * 0.32),
      Offset(w * 0.76, h * 0.48),
      Offset(w * 0.65, h * 0.64),
    ];

    for (int i = 0; i < swatchPoints.length; i++) {
      final Paint dotPaint = Paint()
        ..color = swatchColors[i]
        ..style = PaintingStyle.fill;
      canvas.drawCircle(swatchPoints[i], 3.2, dotPaint);
    }

    // Brush tip crossing palette
    final Paint brushPaint = Paint()
      ..color = const Color(0xFF5D4037)
      ..strokeWidth = 2.2
      ..strokeCap = StrokeCap.round;

    canvas.drawLine(
      Offset(w * 0.28, h * 0.70),
      Offset(w * 0.56, h * 0.40),
      brushPaint,
    );

    // Fine brush tip highlight
    final Paint tipPaint = Paint()
      ..color = const Color(0xFFE65100)
      ..style = PaintingStyle.fill;
    final Path tipPath = Path()
      ..moveTo(w * 0.56, h * 0.40)
      ..lineTo(w * 0.62, h * 0.34)
      ..lineTo(w * 0.64, h * 0.38)
      ..close();
    canvas.drawPath(tipPath, tipPaint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
