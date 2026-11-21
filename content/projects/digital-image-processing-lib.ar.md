---
title: "DIP-Lib: مجموعة أدوات تفاعلية لمعالجة الصور الرقمية"
slug: "digital-image-processing-lib"
lang: "ar"
date: "2025-04-30"
coverImage: "/images/projects/digital-image-processing-lib.jpg"
tags: ["Image Processing", "Computer Vision"]
excerpt: "تطبيق Streamlit لتعلّم معالجة الصور الكلاسيكية: تسع وحدات بمعاملات تتغير مباشرة، تُرصّ في سلسلة معالجة (pipeline) تعرض الصورة بعد كل خطوة."
category: "Lab"
githubLink: "https://github.com/Ahmad-Nayfeh/Digital-Image-Processing-Library"
liveDemoUrl: "https://digital-image-processing-library-nahmad.streamlit.app/"
featured: false
highlights:
  - "تسع وحدات كلاسيكية لمعالجة الصور"
  - "رُصّ الخطوات في سلسلة معالجة وشاهد كل مرحلة"
  - "OpenCV و scikit-image خلف واجهة Streamlit"
result: "تطبيق يعمل على الإنترنت بتسع وحدات لمعالجة الصور"
---

# DIP-Lib

> مكان ترى فيه ما تفعله عملية معالجة الصور بتحريك منزلق، بدلًا من القراءة عنها.

[افتح التطبيق](https://digital-image-processing-library-nahmad.streamlit.app/)

## كيف يعمل

ارفع صورة، واختر وحدة، واضبط معاملاتها، وعاين الأثر. أضفها إلى سلسلة المعالجة (pipeline)، كرّر ذلك، ثم شغّل السلسلة: يعرض التطبيق الصورة بعد كل خطوة، ويحسب PSNR و SSIM بين الصورة الأصلية والنتيجة، ويتيح لك تنزيلها. يمكن حذف الخطوات وتفريغ السلسلة في أي وقت.

## الوحدات التسع

- **تقليل العينات والاستيفاء:** تصغير وتكبير بطرق مختلفة (أقرب جار nearest، الخطي الثنائي bilinear، Lanczos).
- **التحويلات الهندسية:** تدوير، وتحجيم، وإزاحة، وقصّ (shear).
- **الضجيج:** إضافة ضجيج غاوسي أو ضجيج الملح والفلفل (salt-and-pepper)، ثم إزالته بمرشحات التمويه الغاوسي أو الوسيط (median) أو المتوسطات غير المحلية (non-local means).
- **التحسين:** تصحيح غاما، ومعادلة المدرج التكراري (histogram equalisation)، و CLAHE.
- **تصحيح الإضاءة:** طرح التمويه في المجال المكاني، أو الترشيح الهومومورفي (homomorphic filtering) في المجال الترددي.
- **كشف الحواف:** Sobel و Scharr و Laplacian و Canny.
- **زيادة الحدة:** قناع عدم الحدة (unsharp masking).
- **التعتيب (thresholding):** شامل أو تكيّفي.
- **الفضاءات اللونية:** التحويل بين BGR و RGB و HSV و LAB، وعرض كل قناة.

## لقطات من التطبيق

![رفع صورة واختيار وحدة](/images/projects/digital-image-processing-lib/demo1.png)
![معاينة التحسين مع المدرجات التكرارية اللونية قبله وبعده](/images/projects/digital-image-processing-lib/demo2.png)
![سلسلة معالجة من خطوتين مع الصورة بعد كل خطوة وقيم PSNR و SSIM النهائية](/images/projects/digital-image-processing-lib/demo3.png)

## الأدوات المستخدمة

Python و OpenCV و NumPy و scikit-image للمعالجة، و Streamlit للواجهة.
