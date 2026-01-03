(self["webpackChunkinsurance_portal"] = self["webpackChunkinsurance_portal"] || []).push([[503],{

/***/ 2828:
/*!*********************************************************!*\
  !*** ./src/app/core/services/ocr/ocr-engine.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OcrEngineService: () => (/* binding */ OcrEngineService)
/* harmony export */ });
/* harmony import */ var _home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4412);
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tesseract.js */ 1074);
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7705);




let OcrEngineService = /*#__PURE__*/(() => {
  class OcrEngineService {
    constructor() {
      this.progress = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      this.workerReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
      this.initializeTesseract();
    }
    get isReady() {
      return this.workerReady$.asObservable();
    }
    initializeTesseract() {
      var _this = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          console.log('🔄 Initializing Tesseract OCR Worker...');
          // Initialize worker
          _this.worker = yield (0,tesseract_js__WEBPACK_IMPORTED_MODULE_1__.createWorker)();
          console.log('✅ Worker created successfully');
          // CRITICAL: Load Arabic language with specific settings
          console.log('🔄 Loading Arabic language data...');
          yield _this.worker.loadLanguage('ara');
          console.log('✅ Arabic language loaded');
          console.log('🔄 Initializing Arabic language...');
          yield _this.worker.initialize('ara');
          console.log('✅ Arabic language initialized');
          // Set Arabic-optimized parameters
          console.log('🔄 Setting OCR parameters...');
          yield _this.worker.setParameters({
            tessedit_pageseg_mode: '6',
            tessedit_ocr_engine_mode: '1',
            preserve_interword_spaces: '1',
            textord_min_linesize: '2.5',
            tessedit_char_blacklist: '|><}{][)(*&^%$#@!~`_+=-\\',
            user_defined_dpi: '300',
            debug_file: '/dev/null'
          });
          console.log('✅ OCR parameters set');
          _this.workerReady$.next(true);
          console.log('✅ OCR Worker Optimized for Arabic Ready');
        } catch (error) {
          console.error('❌ Failed to initialize OCR worker:', error);
          alert('Failed to initialize OCR engine. Please check console for details.');
        }
      })();
    }
    recognize(imageData) {
      var _this2 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log('🔄 Starting OCR recognition...');
        if (!_this2.worker) {
          console.log('⚠️ Worker not initialized, initializing now...');
          yield _this2.initializeTesseract();
        }
        try {
          console.log('🔄 Running Tesseract recognition...');
          const result = yield _this2.worker.recognize(imageData);
          console.log('✅ OCR Recognition complete');
          console.log('📝 Raw text extracted:', result.data.text);
          // Post-process Arabic text
          result.data.text = _this2.postProcessArabic(result.data.text);
          console.log('✅ Post-processing complete');
          console.log('📝 Processed text:', result.data.text);
          return result;
        } catch (error) {
          console.error('❌ OCR Recognition Error:', error);
          alert('OCR recognition failed. Please check console for details.');
          throw error;
        }
      })();
    }
    postProcessArabic(text) {
      // Fix common Arabic OCR errors
      const corrections = {
        // Fix Arabic letter forms
        'ﺍ': 'ا',
        'ﺎ': 'ا',
        'ﺏ': 'ب',
        'ﺐ': 'ب',
        'ﺓ': 'ة',
        'ﺔ': 'ة',
        'ﺕ': 'ت',
        'ﺖ': 'ت',
        'ﺙ': 'ث',
        'ﺚ': 'ث',
        'ﺝ': 'ج',
        'ﺞ': 'ج',
        'ﺡ': 'ح',
        'ﺢ': 'ح',
        'ﺥ': 'خ',
        'ﺦ': 'خ',
        'ﺩ': 'د',
        'ﺪ': 'د',
        'ﺫ': 'ذ',
        'ﺬ': 'ذ',
        'ﺭ': 'ر',
        'ﺮ': 'ر',
        'ﺯ': 'ز',
        'ﺰ': 'ز',
        'ﺱ': 'س',
        'ﺲ': 'س',
        'ﺵ': 'ش',
        'ﺶ': 'ش',
        'ﺹ': 'ص',
        'ﺺ': 'ص',
        'ﺽ': 'ض',
        'ﺾ': 'ض',
        'ﻁ': 'ط',
        'ﻂ': 'ط',
        'ﻅ': 'ظ',
        'ﻆ': 'ظ',
        'ﻉ': 'ع',
        'ﻊ': 'ع',
        'ﻍ': 'غ',
        'ﻎ': 'غ',
        'ﻑ': 'ف',
        'ﻒ': 'ف',
        'ﻕ': 'ق',
        'ﻖ': 'ق',
        'ﻙ': 'ك',
        'ﻚ': 'ك',
        'ﻝ': 'ل',
        'ﻞ': 'ل',
        'ﻡ': 'م',
        'ﻢ': 'م',
        'ﻥ': 'ن',
        'ﻦ': 'ن',
        'ﻩ': 'ه',
        'ﻪ': 'ه',
        'ﻭ': 'و',
        'ﻮ': 'و',
        'ﻱ': 'ي',
        'ﻲ': 'ي',
        'ﻯ': 'ى',
        'ﻰ': 'ى',
        // Fix ligatures
        'ﻻ': 'لا',
        'ﻼ': 'لا',
        'ﻷ': 'لأ',
        'ﻸ': 'لأ',
        'ﻹ': 'لإ',
        'ﻺ': 'لإ',
        'ﻵ': 'لآ',
        'ﻶ': 'لآ',
        // Fix numbers (Eastern Arabic numerals)
        '٠': '۰',
        '١': '۱',
        '٢': '۲',
        '٣': '۳',
        '٤': '۴',
        '٥': '۵',
        '٦': '۶',
        '٧': '۷',
        '٨': '۸',
        '٩': '۹',
        // Common misrecognitions
        'c': 'س',
        'C': 'س',
        's': 'ص',
        'S': 'ص',
        'o': '٠',
        'O': '٠',
        '0': '۰',
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹'
      };
      let processedText = text;
      for (const [wrong, correct] of Object.entries(corrections)) {
        processedText = processedText.replace(new RegExp(wrong, 'g'), correct);
      }
      // Remove extra spaces
      processedText = processedText.replace(/\s+/g, ' ').trim();
      return processedText;
    }
    destroy() {
      var _this3 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (_this3.worker) {
          yield _this3.worker.terminate();
        }
      })();
    }
    static {
      this.ɵfac = function OcrEngineService_Factory(t) {
        return new (t || OcrEngineService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: OcrEngineService,
        factory: OcrEngineService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OcrEngineService;
})();

/***/ }),

/***/ 313:
/*!*************************************************************!*\
  !*** ./src/app/core/services/ocr/ocr-processing.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OcrProcessingService: () => (/* binding */ OcrProcessingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

let OcrProcessingService = /*#__PURE__*/(() => {
  class OcrProcessingService {
    constructor() {}
    processText(text) {
      // 1. Normalize Text (Arabic chars, numbers, cleanup)
      const normalizedText = this.normalizeArabicText(text);
      // 2. Filter Noise
      const cleanTextLines = this.filterNoise(normalizedText);
      const cleanText = cleanTextLines.join('\n');
      // Log for debugging
      console.log('Cleaned Text:', cleanText);
      return {
        nationalId: this.extractNationalId(cleanText),
        trafficUnit: this.extractTrafficUnit(cleanText),
        ownerName: this.extractName(cleanText),
        vehicleModel: this.extractVehicleModel(cleanText),
        chassisNumber: this.extractChassisNumber(cleanText),
        motorNumber: this.extractMotorNumber(cleanText),
        amounts: this.extractAmounts(cleanText),
        dates: this.extractDates(cleanText),
        rawText: cleanText // Use the cleaned (but not aggressively regexed) text for display
      };
    }
    /**
     * Comprehensive Arabic Normalization
     */
    normalizeArabicText(text) {
      if (!text) return '';
      let res = text;
      // 0. Pre-Cleanup: Remove common OCR glitches
      res = res.replace(/[¢®©¥§]/g, ''); // Common symbol noise
      res = res.replace(/\|/g, ''); // Vertical bars often misread 1s or l's
      // 1. Normalize Numerals (Eastern to Western)
      res = res.replace(/[٠-٩]/g, d => '0123456789'['٠١٢٣٤٥٦٧٨٩'.indexOf(d)]);
      // 2. Remove Kashida (Tatweel) "ـ"
      res = res.replace(/\u0640/g, '');
      // 3. Unify Alifs (أ إ آ -> ا)
      res = res.replace(/[أإآ]/g, 'ا');
      // 4. Normalize Teh Marbuta (ة -> ه)
      res = res.replace(/ة/g, 'ه');
      // 5. Normalize Ya (ي -> ي or ى -> ي depending on preference, usually unification helps)
      res = res.replace(/ى/g, 'ي');
      // 6. Fix specific glitches seen in user log (e.g. '8' -> 'ب' in specific contexts inside arabic words?)
      // Be careful with this. Only do safe replacements.
      // e.g. "baa8" -> "baab" is risky without context.
      // Instead, let's just clean excessive spaces locally
      // "م ع ا ذ" -> "معاذ" (Merge isolated single letters?)
      // Too complex for Regex. Let's rely on word-level cleanups below.
      return res;
    }
    filterNoise(text) {
      return text.split('\n').map(line => line.trim()).filter(line => {
        if (line.length < 2) return false;
        // Check Ratio of valid Arabic/English vs Symbols
        const validChars = line.match(/[a-zA-Z\u0600-\u06FF0-9\s]/g)?.length || 0;
        const ratio = validChars / line.length;
        // Heuristic: If line has < 40% valid chars, it's noise.
        if (ratio < 0.4) return false;
        // Specific garbage filter ("aa", "T", "||")
        if (line.length < 4 && !line.match(/\d/)) return false; // Filter short non-numeric lines
        return true;
      }).map(line => {
        // Post-Filter Cleanup: Remove short English noise tokens from Arabic lines
        // e.g. "حسام 2F" -> "حسام"
        // If line is predominantly Arabic, remove distinct English tokens < 3 chars
        const arabicCount = line.match(/[\u0600-\u06FF]/g)?.length || 0;
        if (arabicCount > 5) {
          // Replace short english/number noise (like '2F', 'T') that are isolated
          // keeping long english words (possible names/codes)
          return line.split(' ').filter(token => {
            const isEnglish = /^[a-zA-Z0-9]+$/.test(token);
            if (isEnglish && token.length < 3) return false; // Drop "2F", "T", "s"
            return true;
          }).join(' ');
        }
        return line;
      });
    }
    extractNationalId(text) {
      // Look for 14 digits starting with 2 or 3
      // Improved: Allow spaces between digits (OCR often gaps them)
      const match = text.match(/(?:2|3)[\d\s]{13,20}/);
      if (match) {
        const digits = match[0].replace(/\s/g, '');
        if (digits.length === 14) return digits;
        // If length is >14, take first 14 if valid checksum? Or just slice.
        if (digits.length > 14) return digits.slice(0, 14);
      }
      return undefined;
    }
    // ... (Other extractors remain similar, but let's improve Name and Address logic) ...
    extractTrafficUnit(text) {
      // Strategy: Match keyword, take rest of line.
      // Support: "مرور ...", "وحدة ..."
      const lineMatch = text.match(/(?:وحدة|إدارة|مرور|قسم)(.*)/);
      if (lineMatch) {
        let val = lineMatch[1];
        // Clean: Remove symbols but keep AR, EN, Numbers, Spaces
        val = val.replace(/[^\u0600-\u06FFa-zA-Z0-9\s]/g, ' ').trim();
        // Remove extra spaces
        val = val.replace(/\s+/g, ' ');
        if (val.length > 2) return `مرور ${val}`;
      }
      return undefined;
    }
    extractName(text) {
      // 1. Explicit Label Search
      // Regex: Keyword -> (ignore colon/dash/noise) -> capture rest of line
      const explicit = text.match(/(?:الاسم|المالك)[^:\n]*[:\-\.]?\s*(.*)/);
      if (explicit) {
        let val = explicit[1];
        // Clean symbols
        val = val.replace(/[^\u0600-\u06FFa-zA-Z\s]/g, ' '); // Keep Ar/En/Space (Remove numbers likely? Name shouldn't have numbers usually)
        // Actually, keep numbers just in case of weird OCR (e.g. "Ahmed 2nd") - User said mixed content.
        // But traditionally names don't have numbers. Let's allowing everything except symbols.
        val = val.replace(/[^\u0600-\u06FFa-zA-Z0-9\s]/g, ' ').trim();
        val = val.replace(/\s+/g, ' ');
        if (val.length > 3) return val;
      }
      // 2. Fallback: Heuristic
      const lines = text.split('\n');
      for (const line of lines) {
        const cleanLine = line.trim();
        // Heuristic: Length > 10, Contains Arabic, NO keywords
        // And also check it's NOT a number line (like ID or dates)
        if (cleanLine.length > 10 && /[\u0600-\u06FF]/.test(cleanLine) && !cleanLine.match(/(?:وحدة|إدارة|مرور|قسم|محافظة|رقم|قومي|بطاقة|جمهورية|شاسيه|موتور|موديل)/) && !cleanLine.match(/\d{5,}/) // Not a long number
        ) {
          // Clean symbols
          const cleaned = cleanLine.replace(/[^\u0600-\u06FFa-zA-Z\s]/g, '').trim();
          const words = cleaned.split(/\s+/);
          // Name usually 3-5 words
          if (words.length >= 3 && words.length <= 6) {
            return cleaned;
          }
        }
      }
      return undefined;
    }
    extractVehicleModel(text) {
      // Capture everything after "Model"
      const modelMatch = text.match(/موديل\s*[:\.]?\s*([^\n]+)/);
      if (modelMatch) {
        let model = modelMatch[1].trim();
        // Clean symbols
        model = model.replace(/[^\w\u0600-\u06FF0-9\s\-]/g, '');
        return model.trim();
      }
      return undefined;
    }
    extractChassisNumber(text) {
      // 1. Explicit
      const keywordMatch = text.match(/شاسيه\s*[:\.]?\s*([A-HJ-NPR-Z0-9\s]+)/); // Allow spaces
      if (keywordMatch) {
        return keywordMatch[1].replace(/\s/g, '').trim(); // Remove spaces from ID
      }
      // 2. Fallback VIN (17 chars)
      const vinRegex = /\b[A-HJ-NPR-Z0-9]{17}\b/;
      const matches = text.match(vinRegex);
      return matches ? matches[0] : undefined;
    }
    extractMotorNumber(text) {
      const match = text.match(/موتور\s*[:\.]?\s*([A-Z0-9\s]+)/);
      if (match) return match[1].trim();
      return undefined;
    }
    extractAmounts(text) {
      // Amounts often have "EGP", "ج.م", etc.
      // We look for currency-like patterns
      const amountRegex = /\b\d{1,3}(?:,\d{3})*(?:\.\d{2})\b/g;
      const matches = text.match(amountRegex);
      if (!matches) return [];
      return matches.map(m => parseFloat(m.replace(/,/g, '')));
    }
    extractDates(text) {
      // DD/MM/YYYY or DD-MM-YYYY
      const dateRegex = /\b\d{2}[/-]\d{2}[/-]\d{4}\b/g;
      const matches = text.match(dateRegex);
      return matches || [];
    }
    static {
      this.ɵfac = function OcrProcessingService_Factory(t) {
        return new (t || OcrProcessingService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OcrProcessingService,
        factory: OcrProcessingService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OcrProcessingService;
})();

/***/ }),

/***/ 1817:
/*!*********************************************************************!*\
  !*** ./src/app/features/ocr/image-editor/image-editor.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageEditorComponent: () => (/* binding */ ImageEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-image-cropper */ 9362);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 345);





let ImageEditorComponent = /*#__PURE__*/(() => {
  class ImageEditorComponent {
    constructor(sanitizer) {
      this.sanitizer = sanitizer;
      this.imageChangedEvent = '';
      this.cropComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.croppedImage = null;
      this.transform = {};
    }
    imageCropped(event) {
      this.croppedImage = event.blob;
    }
    imageLoaded(image) {
      // show cropper
    }
    cropperReady() {
      // cropper ready
    }
    loadImageFailed() {
      // should show message
      console.error('Image Load Failed');
    }
    rotateLeft() {
      this.transform = {
        ...this.transform,
        rotate: (this.transform.rotate || 0) - 90
      };
    }
    rotateRight() {
      this.transform = {
        ...this.transform,
        rotate: (this.transform.rotate || 0) + 90
      };
    }
    confirmCrop() {
      if (this.croppedImage) {
        this.cropComplete.emit(this.croppedImage);
      }
    }
    static {
      this.ɵfac = function ImageEditorComponent_Factory(t) {
        return new (t || ImageEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImageEditorComponent,
        selectors: [["app-image-editor"]],
        inputs: {
          imageChangedEvent: "imageChangedEvent"
        },
        outputs: {
          cropComplete: "cropComplete",
          cancel: "cancel"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 27,
        vars: 6,
        consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/90", "p-4"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "w-full", "max-w-4xl", "h-[90vh]", "flex", "flex-col", "shadow-2xl", "overflow-hidden"], [1, "p-4", "border-b", "border-gray-100", "dark:border-gray-700", "flex", "justify-between", "items-center", "bg-gray-50", "dark:bg-gray-900"], [1, "font-bold", "text-gray-700", "dark:text-gray-200"], [1, "flex", "gap-2"], ["title", "Rotate Left", 1, "p-2", "hover:bg-gray-200", "dark:hover:bg-gray-700", "rounded-lg", "text-gray-600", "dark:text-gray-300", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"], ["d", "M3 3v5h5"], ["title", "Rotate Right", 1, "p-2", "hover:bg-gray-200", "dark:hover:bg-gray-700", "rounded-lg", "text-gray-600", "dark:text-gray-300", 3, "click"], ["d", "M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"], ["d", "M21 3v5h-5"], ["title", "Close", 1, "p-2", "hover:bg-red-100", "text-red-600", "rounded-lg", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "flex-1", "bg-black", "relative", "overflow-hidden", "flex", "items-center", "justify-center"], ["format", "png", 1, "max-h-full", 3, "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed", "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "resizeToWidth", "onlyScaleDown", "transform"], [1, "p-4", "border-t", "border-gray-100", "dark:border-gray-700", "bg-gray-50", "dark:bg-gray-900", "flex", "justify-end", "gap-3"], [1, "px-6", "py-2", "text-gray-600", "dark:text-gray-300", "font-medium", "hover:bg-gray-200", "dark:hover:bg-gray-700", "rounded-lg", "transition-colors", 3, "click"], [1, "px-6", "py-2", "bg-blue-600", "hover:bg-blue-700", "text-white", "font-bold", "rounded-lg", "shadow-lg", "transition-all", "flex", "items-center", "gap-2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "20 6 9 17 4 12"]],
        template: function ImageEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit Image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageEditorComponent_Template_button_click_6_listener() {
              return ctx.rotateLeft();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7)(9, "path", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageEditorComponent_Template_button_click_10_listener() {
              return ctx.rotateRight();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10)(13, "path", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageEditorComponent_Template_button_click_14_listener() {
              return ctx.cancel.emit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "line", 13)(17, "line", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15)(19, "image-cropper", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function ImageEditorComponent_Template_image_cropper_imageCropped_19_listener($event) {
              return ctx.imageCropped($event);
            })("imageLoaded", function ImageEditorComponent_Template_image_cropper_imageLoaded_19_listener($event) {
              return ctx.imageLoaded($event);
            })("cropperReady", function ImageEditorComponent_Template_image_cropper_cropperReady_19_listener() {
              return ctx.cropperReady();
            })("loadImageFailed", function ImageEditorComponent_Template_image_cropper_loadImageFailed_19_listener() {
              return ctx.loadImageFailed();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17)(21, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageEditorComponent_Template_button_click_21_listener() {
              return ctx.cancel.emit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Cancel ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageEditorComponent_Template_button_click_23_listener() {
              return ctx.confirmCrop();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "polyline", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Done / Scan ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChangedEvent", ctx.imageChangedEvent)("maintainAspectRatio", false)("aspectRatio", 1.6)("resizeToWidth", 0)("onlyScaleDown", false)("transform", ctx.transform);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_3__.ImageCropperComponent],
        styles: ["[_nghost-%COMP%] { display: contents; }"]
      });
    }
  }
  return ImageEditorComponent;
})();

/***/ }),

/***/ 6529:
/*!*******************************************************************!*\
  !*** ./src/app/features/ocr/ocr-scanner/ocr-scanner.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OcrScannerComponent: () => (/* binding */ OcrScannerComponent)
/* harmony export */ });
/* harmony import */ var _home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image-editor/image-editor.component */ 1817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_ocr_ocr_engine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/ocr/ocr-engine.service */ 2828);
/* harmony import */ var _core_services_ocr_ocr_processing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/ocr/ocr-processing.service */ 313);










const _c0 = ["fileInput"];
const _c1 = ["videoElement"];
const _c2 = ["canvasElement"];
function OcrScannerComponent_app_image_editor_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-image-editor", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cropComplete", function OcrScannerComponent_app_image_editor_13_Template_app_image_editor_cropComplete_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onEditorComplete($event));
    })("cancel", function OcrScannerComponent_app_image_editor_13_Template_app_image_editor_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onEditorCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("imageChangedEvent", ctx_r2.imageChangedEvent);
  }
}
function OcrScannerComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "video", 30, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 31)(4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OcrScannerComponent_div_19_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.stopCamera());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OcrScannerComponent_div_19_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.captureImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Capture");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function OcrScannerComponent_div_22__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "path", 41)(2, "polyline", 42)(3, "line", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OcrScannerComponent_div_22_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Processing... ", ctx_r2.progress, "%");
  }
}
function OcrScannerComponent_div_22_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Process Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OcrScannerComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 7)(3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OcrScannerComponent_div_22_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.runOcr(ctx_r2.imageUrl));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, OcrScannerComponent_div_22__svg_svg_4_Template, 4, 0, "svg", 37)(5, OcrScannerComponent_div_22_span_5_Template, 2, 1, "span", 38)(6, OcrScannerComponent_div_22_span_6_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OcrScannerComponent_div_22_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r2.imageUrl = null;
      ctx_r2.extractedData = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.processedImageUrl = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r2.isProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isProcessing);
  }
}
function OcrScannerComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44)(1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 41)(4, "polyline", 47)(5, "line", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Drag & Drop document here");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OcrScannerComponent_div_23_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.triggerFileInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Browse Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 52, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function OcrScannerComponent_div_23_Template_input_change_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function OcrScannerComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Processing... ", ctx_r2.progress, "%");
  }
}
function OcrScannerComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 56)(3, "polyline", 57)(4, "line", 58)(5, "line", 59)(6, "polyline", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "No data extracted yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function OcrScannerComponent_div_31_span_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const amt_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, amt_r7, "1.2-2"), " ");
  }
}
function OcrScannerComponent_div_31_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No amounts detected");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OcrScannerComponent_div_31_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const date_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", date_r8, " ");
  }
}
function OcrScannerComponent_div_31_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No dates detected");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OcrScannerComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 61)(1, "div", 62)(2, "h3", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Processed Image For OCR");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 65)(6, "div", 66)(7, "div")(8, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Traffic Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div")(13, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Vehicle Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 70)(18, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Owner Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 70)(22, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "National ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "path", 76)(29, "circle", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 66)(31, "div", 70)(32, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Chassis No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 70)(36, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Motor No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 70)(40, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Detected Amounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, OcrScannerComponent_div_31_span_43_Template, 3, 4, "span", 80)(44, OcrScannerComponent_div_31_span_44_Template, 2, 0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 70)(46, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Detected Dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, OcrScannerComponent_div_31_span_49_Template, 2, 1, "span", 82)(50, OcrScannerComponent_div_31_span_50_Template, 2, 0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "details", 83)(52, "summary", 84)(53, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "View Raw Text (Debug)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "svg", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "path", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.processedImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.extractedData.trafficUnit || "---", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.extractedData.vehicleModel || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.extractedData.ownerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.extractedData.nationalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.extractedData.chassisNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.extractedData.motorNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.extractedData.amounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r2.extractedData.amounts == null ? null : ctx_r2.extractedData.amounts.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.extractedData.dates);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r2.extractedData.dates == null ? null : ctx_r2.extractedData.dates.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.extractedData.rawText, " ");
  }
}
let OcrScannerComponent = /*#__PURE__*/(() => {
  class OcrScannerComponent {
    constructor(ocrEngine, textProcessor) {
      this.ocrEngine = ocrEngine;
      this.textProcessor = textProcessor;
      this.imageUrl = null;
      this.processedImageUrl = null;
      this.isProcessing = false;
      this.progress = 0;
      this.extractedData = null;
      this.isDragActive = false;
      this.showCamera = false;
      this.mediaStream = null;
      // Editor State
      this.showEditor = false;
      this.imageChangedEvent = '';
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
      this.ocrEngine.progress.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(p => {
        this.progress = Math.round(p * 100);
      });
    }
    ngOnDestroy() {
      this.stopCamera();
      this.destroy$.next();
      this.destroy$.complete();
    }
    onFileSelected(event) {
      // Intercept file selection -> Open Editor
      this.imageChangedEvent = event;
      if (this.imageChangedEvent.target.files?.length > 0) {
        this.showEditor = true;
      }
    }
    onEditorCancel() {
      this.showEditor = false;
      this.imageChangedEvent = null;
      // Reset input so change event fires again if same file selected
      if (this.fileInput) this.fileInput.nativeElement.value = '';
    }
    onEditorComplete(croppedBlob) {
      var _this = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.showEditor = false;
        _this.extractedData = null; // Reset previous results
        // Convert Blob to File for consistency
        const file = new File([croppedBlob], "edited-image.png", {
          type: "image/png"
        });
        _this.imageUrl = URL.createObjectURL(file);
        // Run OCR on the edited image
        yield _this.runOcr(file);
      })();
    }
    onDragOver(event) {
      event.preventDefault();
      event.stopPropagation();
      this.isDragActive = true;
    }
    onDragLeave(event) {
      event.preventDefault();
      event.stopPropagation();
      this.isDragActive = false;
    }
    onDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      this.isDragActive = false;
      if (event.dataTransfer?.files?.length) {
        // Force Editor on Drop to ensure user removes background (wood table etc.)
        this.imageChangedEvent = {
          target: {
            files: event.dataTransfer.files
          }
        };
        this.showEditor = true;
      }
    }
    // Direct process without edit (e.g. from Camera for now - but we should arguably edit that too)
    processFile(file) {
      var _this2 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // This method is now mostly internal or for direct flows. 
        // We redirect everything through the editor flow if possible.
        _this2.imageUrl = URL.createObjectURL(file);
        yield _this2.runOcr(file);
      })();
    }
    // ... camera and preprocess logic remains same ...
    runOcr(imageSource) {
      var _this3 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.isProcessing = true;
        _this3.progress = 0;
        try {
          // Preprocess image for better OCR accuracy
          const processedImage = yield _this3.preprocessImage(imageSource);
          // Store processed image separately to preserve original
          _this3.processedImageUrl = processedImage;
          // Update parameters dynamically if possible, or rely on Engine default.
          // For Mixed layouts (ID Cards), PSM 3 (Auto) or 11 (Sparse) is often better than 6.
          // We'll stick to Engine config, but let's re-verify Engine settings.
          const result = yield _this3.ocrEngine.recognize(processedImage);
          console.log('OCR Raw Result:', result);
          _this3.extractedData = _this3.textProcessor.processText(result.data.text);
        } catch (err) {
          console.error('OCR Error:', err);
          alert('Failed to process image');
        } finally {
          _this3.isProcessing = false;
        }
      })();
    }
    preprocessImage(source) {
      var _this4 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = /*#__PURE__*/(0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            try {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              if (!ctx) {
                reject(new Error('Could not get canvas context'));
                return;
              }
              // Step 1: Calculate optimal size for Arabic OCR (minimum 1500px width)
              let targetWidth = Math.max(img.width, 1500);
              let targetHeight = img.height / img.width * targetWidth;
              // Cap maximum size to avoid memory issues
              const maxSize = 4000;
              if (targetWidth > maxSize) {
                targetWidth = maxSize;
                targetHeight = img.height / img.width * targetWidth;
              }
              canvas.width = targetWidth;
              canvas.height = targetHeight;
              // Step 2: Draw image with high quality scaling
              ctx.imageSmoothingEnabled = true;
              ctx.imageSmoothingQuality = 'high';
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              // Step 3: Apply Arabic-specific preprocessing pipeline
              const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
              // Apply in correct order
              _this4.applyCLAHE(imageData); // Better than simple contrast
              _this4.applyGrayscale(imageData); // Ensure grayscale
              _this4.applyUnsharpMask(imageData, canvas.width, canvas.height); // Better than sharpen
              _this4.applyMedianFilter(imageData, canvas.width, canvas.height); // Remove noise while preserving text
              _this4.applyMorphologicalOperations(imageData, canvas.width, canvas.height); // Arabic-specific
              ctx.putImageData(imageData, 0, 0);
              // Step 4: Apply global threshold (OTSU) - Better for Arabic than adaptive
              const binaryCanvas = document.createElement('canvas');
              binaryCanvas.width = canvas.width;
              binaryCanvas.height = canvas.height;
              const binaryCtx = binaryCanvas.getContext('2d');
              binaryCtx.drawImage(canvas, 0, 0);
              const binaryImageData = binaryCtx.getImageData(0, 0, binaryCanvas.width, binaryCanvas.height);
              _this4.applyOtsuThreshold(binaryImageData);
              binaryCtx.putImageData(binaryImageData, 0, 0);
              resolve(binaryCanvas.toDataURL('image/png', 1.0));
            } catch (error) {
              reject(error);
            }
          });
          img.onerror = reject;
          if (typeof source === 'string') {
            img.src = source;
          } else {
            const reader = new FileReader();
            reader.onload = e => {
              img.src = e.target?.result;
            };
            reader.readAsDataURL(source);
          }
        });
      })();
    }
    // NEW: CLAHE (Contrast Limited Adaptive Histogram Equalization) - Best for text
    applyCLAHE(imageData) {
      const data = imageData.data;
      const width = imageData.width;
      const height = imageData.height;
      // Convert to grayscale first (needed for CLAHE calculation)
      const grayData = new Uint8Array(width * height);
      for (let i = 0, j = 0; i < data.length; i += 4, j++) {
        grayData[j] = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      }
      // Apply CLAHE-like enhancement
      const blockSize = 8;
      const clipLimit = 3.0;
      for (let y = 0; y < height; y += blockSize) {
        for (let x = 0; x < width; x += blockSize) {
          // Calculate histogram for block
          const hist = new Array(256).fill(0);
          for (let by = 0; by < blockSize && y + by < height; by++) {
            for (let bx = 0; bx < blockSize && x + bx < width; bx++) {
              const idx = (y + by) * width + (x + bx);
              hist[grayData[idx]]++;
            }
          }
          // Clip histogram
          const clipCount = Math.floor(clipLimit * blockSize * blockSize / 256);
          let excess = 0;
          for (let i = 0; i < 256; i++) {
            if (hist[i] > clipCount) {
              excess += hist[i] - clipCount;
              hist[i] = clipCount;
            }
          }
          // Redistribute excess
          const addPerBin = Math.floor(excess / 256);
          for (let i = 0; i < 256; i++) {
            hist[i] += addPerBin;
          }
          // Create CDF
          const cdf = new Array(256).fill(0);
          cdf[0] = hist[0];
          for (let i = 1; i < 256; i++) {
            cdf[i] = cdf[i - 1] + hist[i];
          }
          // Apply to block
          const totalPixels = Math.min(blockSize, height - y) * Math.min(blockSize, width - x);
          for (let by = 0; by < blockSize && y + by < height; by++) {
            for (let bx = 0; bx < blockSize && x + bx < width; bx++) {
              const idx = ((y + by) * width + (x + bx)) * 4;
              const grayIdx = (y + by) * width + (x + bx);
              const newValue = Math.floor(255 * cdf[grayData[grayIdx]] / totalPixels);
              data[idx] = newValue;
              data[idx + 1] = newValue;
              data[idx + 2] = newValue;
            }
          }
        }
      }
    }
    applyGrayscale(imageData) {
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const avg = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        data[i] = avg; // R
        data[i + 1] = avg; // G
        data[i + 2] = avg; // B
      }
    }
    // NEW: Unsharp Mask (Better than simple sharpen)
    applyUnsharpMask(imageData, width, height) {
      const data = imageData.data;
      const original = new Uint8ClampedArray(data);
      // Gaussian blur
      const kernel = [1 / 16, 2 / 16, 1 / 16, 2 / 16, 4 / 16, 2 / 16, 1 / 16, 2 / 16, 1 / 16];
      const blurData = new Uint8ClampedArray(data.length);
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          let sum = 0;
          for (let ky = -1; ky <= 1; ky++) {
            for (let kx = -1; kx <= 1; kx++) {
              const idx = ((y + ky) * width + (x + kx)) * 4;
              const weight = kernel[(ky + 1) * 3 + (kx + 1)];
              sum += original[idx] * weight;
            }
          }
          const idx = (y * width + x) * 4;
          blurData[idx] = sum;
          blurData[idx + 1] = sum;
          blurData[idx + 2] = sum;
        }
      }
      // Unsharp mask: original + (original - blurred) * amount
      const amount = 0.8;
      for (let i = 0; i < data.length; i += 4) {
        const sharp = original[i] + (original[i] - blurData[i]) * amount;
        data[i] = Math.max(0, Math.min(255, sharp));
        data[i + 1] = Math.max(0, Math.min(255, sharp));
        data[i + 2] = Math.max(0, Math.min(255, sharp));
      }
    }
    // NEW: Median Filter for noise removal
    applyMedianFilter(imageData, width, height) {
      const data = imageData.data;
      const original = new Uint8ClampedArray(data);
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const idx = (y * width + x) * 4;
          // Collect neighborhood values
          const values = [];
          for (let ky = -1; ky <= 1; ky++) {
            for (let kx = -1; kx <= 1; kx++) {
              const nIdx = ((y + ky) * width + (x + kx)) * 4;
              values.push(original[nIdx]);
            }
          }
          // Get median
          values.sort((a, b) => a - b);
          const median = values[4]; // 9 values, index 4 is median
          data[idx] = median;
          data[idx + 1] = median;
          data[idx + 2] = median;
        }
      }
    }
    // NEW: Morphological operations for Arabic script
    applyMorphologicalOperations(imageData, width, height) {
      const data = imageData.data;
      const original = new Uint8ClampedArray(data);
      // Opening: erosion then dilation (removes small dots while preserving Arabic diacritics)
      // Erosion
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const idx = (y * width + x) * 4;
          // Find minimum in 3x3 neighborhood
          let minVal = 255;
          for (let ky = -1; ky <= 1; ky++) {
            for (let kx = -1; kx <= 1; kx++) {
              const nIdx = ((y + ky) * width + (x + kx)) * 4;
              minVal = Math.min(minVal, original[nIdx]);
            }
          }
          data[idx] = minVal;
          data[idx + 1] = minVal;
          data[idx + 2] = minVal;
        }
      }
      // Copy eroded result
      const eroded = new Uint8ClampedArray(data);
      // Dilation
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const idx = (y * width + x) * 4;
          // Find maximum in 3x3 neighborhood
          let maxVal = 0;
          for (let ky = -1; ky <= 1; ky++) {
            for (let kx = -1; kx <= 1; kx++) {
              const nIdx = ((y + ky) * width + (x + kx)) * 4;
              maxVal = Math.max(maxVal, eroded[nIdx]);
            }
          }
          data[idx] = maxVal;
          data[idx + 1] = maxVal;
          data[idx + 2] = maxVal;
        }
      }
    }
    // NEW: Otsu threshold (better for Arabic than adaptive)
    applyOtsuThreshold(imageData) {
      const data = imageData.data;
      // Calculate histogram
      const histogram = new Array(256).fill(0);
      for (let i = 0; i < data.length; i += 4) {
        const gray = data[i];
        histogram[gray]++;
      }
      // Calculate total pixels
      const total = data.length / 4;
      // Otsu's method to find optimal threshold
      let sum = 0;
      for (let i = 0; i < 256; i++) {
        sum += i * histogram[i];
      }
      let sumB = 0;
      let wB = 0;
      let wF = 0;
      let maxVariance = 0;
      let threshold = 0;
      for (let i = 0; i < 256; i++) {
        wB += histogram[i];
        if (wB === 0) continue;
        wF = total - wB;
        if (wF === 0) break;
        sumB += i * histogram[i];
        const mB = sumB / wB;
        const mF = (sum - sumB) / wF;
        const variance = wB * wF * (mB - mF) ** 2;
        if (variance > maxVariance) {
          maxVariance = variance;
          threshold = i;
        }
      }
      // Apply threshold
      for (let i = 0; i < data.length; i += 4) {
        const value = data[i] < threshold ? 0 : 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
      }
    }
    // Performance Optimization: Handle large images
    optimizeImageForOCR(file) {
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return new Promise((resolve, reject) => {
          const img = new Image();
          const reader = new FileReader();
          reader.onload = e => {
            img.onload = () => {
              const canvas = document.createElement('canvas');
              // Calculate optimal size (max 2000px on longer side)
              const maxDimension = 2000;
              let width = img.width;
              let height = img.height;
              if (width > height && width > maxDimension) {
                height = height / width * maxDimension;
                width = maxDimension;
              } else if (height > maxDimension) {
                width = width / height * maxDimension;
                height = maxDimension;
              }
              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0, width, height);
              // Convert to PNG with compression
              canvas.toBlob(blob => {
                if (blob) {
                  const optimizedFile = new File([blob], file.name.replace(/\.[^/.]+$/, "") + '_optimized.png', {
                    type: 'image/png'
                  });
                  resolve(optimizedFile);
                } else {
                  reject(new Error('Failed to optimize image'));
                }
              }, 'image/png', 0.9); // 90% quality
            };
            img.src = e.target?.result;
          };
          reader.readAsDataURL(file);
        });
      })();
    }
    debugOCR(imageUrl) {
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // Save the processed image for inspection
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'debug_processed_image.png';
        link.click();
      })();
    }
    // Camera Logic
    startCamera() {
      var _this5 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this5.showCamera = true;
        try {
          _this5.mediaStream = yield navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: 'environment'
            }
          });
          setTimeout(() => {
            if (_this5.videoElement) {
              _this5.videoElement.nativeElement.srcObject = _this5.mediaStream;
            }
          }, 0);
        } catch (err) {
          console.error('Camera Access Error:', err);
          alert('Could not access camera');
          _this5.showCamera = false;
        }
      })();
    }
    captureImage() {
      if (!this.videoElement || !this.canvasElement) return;
      const video = this.videoElement.nativeElement;
      const canvas = this.canvasElement.nativeElement;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        // Convert to Blob for later editing if needed, or just DataURL
        canvas.toBlob(blob => {
          if (blob) {
            // For camera capture, we can also trigger editor if we want.
            // For now, let's keep it simple: Camera -> Direct OCR
            // Or ideally Camera -> Edit -> OCR.
            // Let's create a fake event for consistency or update Editor to accept blobs.
            // To keep flow fast, I will just run OCR.
            // But if user wants edits, we could show editor.
            const file = new File([blob], "capture.png", {
              type: "image/png"
            });
            this.imageUrl = URL.createObjectURL(file);
            this.stopCamera();
            this.runOcr(file);
          }
        });
      }
    }
    stopCamera() {
      this.showCamera = false;
      if (this.mediaStream) {
        this.mediaStream.getTracks().forEach(track => track.stop());
        this.mediaStream = null;
      }
    }
    triggerFileInput() {
      this.fileInput.nativeElement.click();
    }
    static {
      this.ɵfac = function OcrScannerComponent_Factory(t) {
        return new (t || OcrScannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_ocr_ocr_engine_service__WEBPACK_IMPORTED_MODULE_2__.OcrEngineService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_ocr_ocr_processing_service__WEBPACK_IMPORTED_MODULE_3__.OcrProcessingService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: OcrScannerComponent,
        selectors: [["app-ocr-scanner"]],
        viewQuery: function OcrScannerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.videoElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.canvasElement = _t.first);
          }
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
        decls: 32,
        vars: 9,
        consts: [["canvasElement", ""], ["videoElement", ""], ["fileInput", ""], [1, "p-6", "max-w-7xl", "mx-auto", "space-y-6"], [1, "flex", "justify-between", "items-center", "border-b", "pb-4", "border-gray-200", "dark:border-gray-700"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-500", "dark:text-gray-400"], [1, "flex", "gap-2"], [1, "flex", "items-center", "gap-2", "px-4", "py-2", "bg-blue-600", "hover:bg-blue-700", "text-white", "rounded-lg", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"], ["cx", "12", "cy", "13", "r", "3"], [3, "imageChangedEvent", "cropComplete", "cancel", 4, "ngIf"], [1, "grid", "lg:grid-cols-2", "gap-6", "h-[calc(100vh-200px)]"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-lg", "flex", "flex-col", "overflow-hidden"], [1, "p-4", "border-b", "border-gray-100", "dark:border-gray-700", "font-semibold", "text-gray-700", "dark:text-gray-300"], [1, "flex-1", "p-4", "relative", "bg-gray-50", "dark:bg-gray-900", "text-center", "flex", "flex-col", "justify-center", "items-center", 3, "dragover", "dragleave", "drop"], ["class", "absolute inset-0 bg-black z-20 flex flex-col", 4, "ngIf"], [1, "hidden"], ["class", "relative w-full h-full flex flex-col items-center justify-center gap-4", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-lg", "flex", "flex-col"], [1, "p-4", "border-b", "border-gray-100", "dark:border-gray-700", "flex", "justify-between", "items-center"], [1, "font-semibold", "text-gray-700", "dark:text-gray-300"], ["class", "text-sm text-blue-500 animate-pulse", 4, "ngIf"], [1, "flex-1", "p-6", "overflow-y-auto"], ["class", "h-full flex flex-col items-center justify-center text-gray-400", 4, "ngIf"], ["class", "space-y-6", 4, "ngIf"], [3, "cropComplete", "cancel", "imageChangedEvent"], [1, "absolute", "inset-0", "bg-black", "z-20", "flex", "flex-col"], ["autoplay", "", "playsinline", "", 1, "flex-1", "w-full", "h-full", "object-contain"], [1, "p-4", "flex", "justify-center", "gap-4", "bg-black/50", "absolute", "bottom-0", "w-full"], [1, "px-6", "py-2", "bg-red-500", "hover:bg-red-600", "text-white", "rounded-full", 3, "click"], [1, "px-6", "py-2", "bg-white", "text-black", "hover:bg-gray-200", "rounded-full", "font-bold", 3, "click"], [1, "relative", "w-full", "h-full", "flex", "flex-col", "items-center", "justify-center", "gap-4"], ["alt", "Scanned Document", 1, "max-w-full", "max-h-[calc(100%-60px)]", "object-contain", "shadow-md", "rounded-lg", 3, "src"], [1, "px-6", "py-2", "bg-blue-600", "hover:bg-blue-700", "disabled:bg-gray-400", "text-white", "rounded-lg", "transition-colors", "font-medium", "flex", "items-center", "gap-2", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], [4, "ngIf"], [1, "px-4", "py-2", "bg-red-500", "hover:bg-red-600", "text-white", "rounded-lg", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "space-y-4"], [1, "w-16", "h-16", "bg-blue-100", "dark:bg-blue-900/30", "text-blue-600", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "17 8 12 3 7 8"], ["x1", "12", "y1", "3", "x2", "12", "y2", "15"], [1, "text-lg", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "text-sm", "text-gray-500"], [1, "px-6", "py-2", "border-2", "border-dashed", "border-blue-400", "text-blue-600", "rounded-lg", "hover:bg-blue-50", "dark:hover:bg-blue-900/20", "transition-colors", 3, "click"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], [1, "text-sm", "text-blue-500", "animate-pulse"], [1, "h-full", "flex", "flex-col", "items-center", "justify-center", "text-gray-400"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "mb-4", "opacity-50"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10 9 9 9 8 9"], [1, "space-y-6"], [1, "p-3", "rounded-lg", "border", "border-gray-200", "dark:border-gray-700", "bg-gray-50", "dark:bg-gray-900"], [1, "text-xs", "font-bold", "uppercase", "text-gray-500", "mb-2"], ["alt", "Processed Image", 1, "w-full", "rounded", "border", "border-gray-300", "dark:border-gray-600", "bg-white", 3, "src"], [1, "bg-gradient-to-r", "from-blue-50", "to-indigo-50", "dark:from-gray-700", "dark:to-gray-800", "p-4", "rounded-lg", "border", "border-blue-100", "dark:border-gray-600"], [1, "grid", "grid-cols-2", "gap-4"], [1, "text-xs", "text-gray-500", "uppercase"], ["dir", "auto", 1, "font-bold", "text-gray-900", "dark:text-white"], [1, "font-bold", "text-gray-900", "dark:text-white"], [1, "space-y-2"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["readonly", "", "placeholder", "Not detected", 1, "w-full", "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "bg-gray-50", "focus:ring-2", "focus:ring-blue-500", "dark:bg-gray-900", "dark:border-gray-600", "dark:text-white", 3, "ngModel"], [1, "relative"], ["readonly", "", "placeholder", "Not detected", 1, "w-full", "pl-10", "pr-4", "py-2", "border", "border-gray-300", "rounded-lg", "bg-gray-50", "focus:ring-2", "focus:ring-blue-500", "dark:bg-gray-900", "dark:border-gray-600", "dark:text-white", "tracking-wider", "font-bold", 3, "ngModel"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center", "pointer-events-none", "text-gray-400"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["readonly", "", "placeholder", "Not detected", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "bg-gray-50", "dark:bg-gray-900", "dark:border-gray-600", "dark:text-white", "font-mono", "text-sm", 3, "ngModel"], [1, "flex", "flex-wrap", "gap-2"], ["class", "px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm font-bold border border-green-200", 4, "ngFor", "ngForOf"], ["class", "text-gray-500 italic text-sm", 4, "ngIf"], ["class", "px-3 py-1 bg-purple-100 text-purple-800 rounded-lg text-sm font-bold border border-purple-200", 4, "ngFor", "ngForOf"], [1, "group", "border", "border-gray-200", "dark:border-gray-700", "rounded-lg", "bg-gray-50", "dark:bg-gray-900"], [1, "flex", "justify-between", "items-center", "font-medium", "cursor-pointer", "list-none", "p-4", "hover:bg-gray-100", "dark:hover:bg-gray-800", "transition-colors", "rounded-lg"], [1, "text-sm", "text-gray-600", "dark:text-gray-400"], [1, "transition", "group-open:rotate-180"], ["fill", "none", "height", "24", "shape-rendering", "geometricPrecision", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "viewBox", "0 0 24 24", "width", "24"], ["d", "M6 9l6 6 6-6"], ["dir", "rtl", 1, "text-sm", "font-arabic", "text-gray-700", "dark:text-gray-300", "p-4", "pt-0", "whitespace-pre-wrap", "h-64", "overflow-y-auto", "border-t", "border-gray-200", "dark:border-gray-700", "leading-relaxed", "font-mono"], [1, "px-3", "py-1", "bg-green-100", "text-green-800", "rounded-lg", "text-sm", "font-bold", "border", "border-green-200"], [1, "text-gray-500", "italic", "text-sm"], [1, "px-3", "py-1", "bg-purple-100", "text-purple-800", "rounded-lg", "text-sm", "font-bold", "border", "border-purple-200"]],
        template: function OcrScannerComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div")(3, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Bilingual OCR Scanner");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Upload or scan Arabic/English documents");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7)(8, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OcrScannerComponent_Template_button_click_8_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.startCamera());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "svg", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "path", 10)(11, "circle", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Open Camera ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, OcrScannerComponent_app_image_editor_13_Template, 1, 1, "app-image-editor", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 13)(15, "div", 14)(16, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Document Source ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dragover", function OcrScannerComponent_Template_div_dragover_18_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onDragOver($event));
            })("dragleave", function OcrScannerComponent_Template_div_dragleave_18_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onDragLeave($event));
            })("drop", function OcrScannerComponent_Template_div_drop_18_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onDrop($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, OcrScannerComponent_div_19_Template, 8, 0, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "canvas", 18, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, OcrScannerComponent_div_22_Template, 9, 5, "div", 19)(23, OcrScannerComponent_div_23_Template, 14, 0, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 21)(25, "div", 22)(26, "span", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Extraction Results");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, OcrScannerComponent_span_28_Template, 2, 1, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, OcrScannerComponent_div_30_Template, 9, 0, "div", 26)(31, OcrScannerComponent_div_31_Template, 60, 12, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showEditor);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("drag-active", ctx.isDragActive);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showCamera);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.imageUrl && !ctx.showCamera);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.imageUrl && !ctx.showCamera);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isProcessing);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.extractedData && !ctx.isProcessing);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.extractedData);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_1__.ImageEditorComponent],
        styles: [".drag-active[_ngcontent-%COMP%] {\n        border-color: #3b82f6;\n        background-color: rgba(59, 130, 246, 0.05);\n    }", ".font-arabic[_ngcontent-%COMP%] {\n                        font-family: 'Arial', 'Segoe UI', sans-serif;\n                        line-height: 1.8;\n                        text-align: right;\n                    }\n\n                    \n\n                    [dir=\"rtl\"][_ngcontent-%COMP%] {\n                        text-align: right;\n                        unicode-bidi: isolate;\n                    }"]
      });
    }
  }
  return OcrScannerComponent;
})();

/***/ }),

/***/ 6503:
/*!********************************************!*\
  !*** ./src/app/features/ocr/ocr.routes.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OCR_ROUTES: () => (/* binding */ OCR_ROUTES)
/* harmony export */ });
/* harmony import */ var _ocr_scanner_ocr_scanner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ocr-scanner/ocr-scanner.component */ 6529);

const OCR_ROUTES = [{
  path: '',
  component: _ocr_scanner_ocr_scanner_component__WEBPACK_IMPORTED_MODULE_0__.OcrScannerComponent
}];

/***/ }),

/***/ 837:
/*!*******************************************!*\
  !*** ./node_modules/is-electron/index.js ***!
  \*******************************************/
/***/ ((module) => {

// https://github.com/electron/electron/issues/2288
function isElectron() {
  // Renderer process
  if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
    return true;
  }

  // Main process
  if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
    return true;
  }

  // Detect the user agent when the `nodeIntegration` option is set to false
  if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
    return true;
  }
  return false;
}
module.exports = isElectron;

/***/ }),

/***/ 3726:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/fromEvent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromEvent: () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/innerFrom */ 8750);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Observable */ 1985);
/* harmony import */ var _operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeMap */ 3028);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 7441);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 8071);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 6450);






const nodeEventEmitterMethods = ['addListener', 'removeListener'];
const eventTargetMethods = ['addEventListener', 'removeEventListener'];
const jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options)) {
    resultSelector = options;
    options = undefined;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.mapOneOrManyArgs)(resultSelector));
  }
  const [add, remove] = isEventTarget(target) ? eventTargetMethods.map(methodName => handler => target[methodName](eventName, handler, options)) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [];
  if (!add) {
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(target)) {
      return (0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(subTarget => fromEvent(subTarget, eventName, options))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__.innerFrom)(target));
    }
  }
  if (!add) {
    throw new TypeError('Invalid event target');
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
    const handler = (...args) => subscriber.next(1 < args.length ? args : args[0]);
    add(handler);
    return () => remove(handler);
  });
}
function toCommonHandlerRegistry(target, eventName) {
  return methodName => handler => target[methodName](eventName, handler);
}
function isNodeStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.on) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.off);
}
function isEventTarget(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addEventListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeEventListener);
}
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ 7786:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/merge.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeAll */ 6365);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./innerFrom */ 8750);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ 983);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 9326);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from */ 9724);





function merge(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
  const concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popNumber)(args, Infinity);
  const sources = args;
  return !sources.length ? _empty__WEBPACK_IMPORTED_MODULE_1__.EMPTY : sources.length === 1 ? (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(sources[0]) : (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__.mergeAll)(concurrent)((0,_from__WEBPACK_IMPORTED_MODULE_4__.from)(sources, scheduler));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ 8646:
/*!*******************************************************************************!*\
  !*** ./node_modules/tesseract.js/node_modules/regenerator-runtime/runtime.js ***!
  \*******************************************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) {
    obj[key] = desc.value;
  };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    });
    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  });
  defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  });
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };
  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", {
      value: enqueue
    });
  }
  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };
  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);
        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  exports.keys = function (val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }
            next.value = undefined;
            next.done = true;
            return next;
          };
        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return {
      next: doneResult
    };
  }
  exports.values = values;
  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }
  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }
        return !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };
      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }
      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;
}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : 0);
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ 5444:
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/Tesseract.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 9293)["default"]);
const createWorker = __webpack_require__(/*! ./createWorker */ 8738);
const recognize = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (image, langs, options) {
    const worker = yield createWorker(options);
    yield worker.loadLanguage(langs);
    yield worker.initialize(langs);
    return worker.recognize(image).finally(/*#__PURE__*/_asyncToGenerator(function* () {
      yield worker.terminate();
    }));
  });
  return function recognize(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
const detect = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (image, options) {
    const worker = yield createWorker(options);
    yield worker.loadLanguage('osd');
    yield worker.initialize('osd');
    return worker.detect(image).finally(/*#__PURE__*/_asyncToGenerator(function* () {
      yield worker.terminate();
    }));
  });
  return function detect(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
module.exports = {
  recognize,
  detect
};

/***/ }),

/***/ 8103:
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/OEM.js ***!
  \********************************************************/
/***/ ((module) => {

/*
 * OEM = OCR Engine Mode, and there are 4 possible modes.
 *
 * By default tesseract.js uses LSTM_ONLY mode.
 *
 */
module.exports = {
  TESSERACT_ONLY: 0,
  LSTM_ONLY: 1,
  TESSERACT_LSTM_COMBINED: 2,
  DEFAULT: 3
};

/***/ }),

/***/ 8204:
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/PSM.js ***!
  \********************************************************/
/***/ ((module) => {

/*
 * PSM = Page Segmentation Mode
 */
module.exports = {
  OSD_ONLY: '0',
  AUTO_OSD: '1',
  AUTO_ONLY: '2',
  AUTO: '3',
  SINGLE_COLUMN: '4',
  SINGLE_BLOCK_VERT_TEXT: '5',
  SINGLE_BLOCK: '6',
  SINGLE_LINE: '7',
  SINGLE_WORD: '8',
  CIRCLE_WORD: '9',
  SINGLE_CHAR: '10',
  SPARSE_TEXT: '11',
  SPARSE_TEXT_OSD: '12',
  RAW_LINE: '13'
};

/***/ }),

/***/ 7968:
/*!***********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/config.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const OEM = __webpack_require__(/*! ./OEM */ 8103);
module.exports = {
  defaultOEM: OEM.DEFAULT
};

/***/ }),

/***/ 9499:
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/defaultOptions.js ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {
  /*
   * default path for downloading *.traineddata
   */
  langPath: 'https://tessdata.projectnaptha.com/4.0.0',
  /*
   * Use BlobURL for worker script by default
   * TODO: remove this option
   *
   */
  workerBlobURL: true,
  logger: () => {}
};

/***/ }),

/***/ 3427:
/*!**************************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/languages.js ***!
  \**************************************************************/
/***/ ((module) => {

/*
 * languages with existing tesseract traineddata
 * https://tesseract-ocr.github.io/tessdoc/Data-Files#data-files-for-version-400-november-29-2016
 */

/**
 * @typedef {object} Languages
 * @property {string} AFR Afrikaans
 * @property {string} AMH Amharic
 * @property {string} ARA Arabic
 * @property {string} ASM Assamese
 * @property {string} AZE Azerbaijani
 * @property {string} AZE_CYRL Azerbaijani - Cyrillic
 * @property {string} BEL Belarusian
 * @property {string} BEN Bengali
 * @property {string} BOD Tibetan
 * @property {string} BOS Bosnian
 * @property {string} BUL Bulgarian
 * @property {string} CAT Catalan; Valencian
 * @property {string} CEB Cebuano
 * @property {string} CES Czech
 * @property {string} CHI_SIM Chinese - Simplified
 * @property {string} CHI_TRA Chinese - Traditional
 * @property {string} CHR Cherokee
 * @property {string} CYM Welsh
 * @property {string} DAN Danish
 * @property {string} DEU German
 * @property {string} DZO Dzongkha
 * @property {string} ELL Greek, Modern (1453-)
 * @property {string} ENG English
 * @property {string} ENM English, Middle (1100-1500)
 * @property {string} EPO Esperanto
 * @property {string} EST Estonian
 * @property {string} EUS Basque
 * @property {string} FAS Persian
 * @property {string} FIN Finnish
 * @property {string} FRA French
 * @property {string} FRK German Fraktur
 * @property {string} FRM French, Middle (ca. 1400-1600)
 * @property {string} GLE Irish
 * @property {string} GLG Galician
 * @property {string} GRC Greek, Ancient (-1453)
 * @property {string} GUJ Gujarati
 * @property {string} HAT Haitian; Haitian Creole
 * @property {string} HEB Hebrew
 * @property {string} HIN Hindi
 * @property {string} HRV Croatian
 * @property {string} HUN Hungarian
 * @property {string} IKU Inuktitut
 * @property {string} IND Indonesian
 * @property {string} ISL Icelandic
 * @property {string} ITA Italian
 * @property {string} ITA_OLD Italian - Old
 * @property {string} JAV Javanese
 * @property {string} JPN Japanese
 * @property {string} KAN Kannada
 * @property {string} KAT Georgian
 * @property {string} KAT_OLD Georgian - Old
 * @property {string} KAZ Kazakh
 * @property {string} KHM Central Khmer
 * @property {string} KIR Kirghiz; Kyrgyz
 * @property {string} KOR Korean
 * @property {string} KUR Kurdish
 * @property {string} LAO Lao
 * @property {string} LAT Latin
 * @property {string} LAV Latvian
 * @property {string} LIT Lithuanian
 * @property {string} MAL Malayalam
 * @property {string} MAR Marathi
 * @property {string} MKD Macedonian
 * @property {string} MLT Maltese
 * @property {string} MSA Malay
 * @property {string} MYA Burmese
 * @property {string} NEP Nepali
 * @property {string} NLD Dutch; Flemish
 * @property {string} NOR Norwegian
 * @property {string} ORI Oriya
 * @property {string} PAN Panjabi; Punjabi
 * @property {string} POL Polish
 * @property {string} POR Portuguese
 * @property {string} PUS Pushto; Pashto
 * @property {string} RON Romanian; Moldavian; Moldovan
 * @property {string} RUS Russian
 * @property {string} SAN Sanskrit
 * @property {string} SIN Sinhala; Sinhalese
 * @property {string} SLK Slovak
 * @property {string} SLV Slovenian
 * @property {string} SPA Spanish; Castilian
 * @property {string} SPA_OLD Spanish; Castilian - Old
 * @property {string} SQI Albanian
 * @property {string} SRP Serbian
 * @property {string} SRP_LATN Serbian - Latin
 * @property {string} SWA Swahili
 * @property {string} SWE Swedish
 * @property {string} SYR Syriac
 * @property {string} TAM Tamil
 * @property {string} TEL Telugu
 * @property {string} TGK Tajik
 * @property {string} TGL Tagalog
 * @property {string} THA Thai
 * @property {string} TIR Tigrinya
 * @property {string} TUR Turkish
 * @property {string} UIG Uighur; Uyghur
 * @property {string} UKR Ukrainian
 * @property {string} URD Urdu
 * @property {string} UZB Uzbek
 * @property {string} UZB_CYRL Uzbek - Cyrillic
 * @property {string} VIE Vietnamese
 * @property {string} YID Yiddish
 */

/**
  * @type {Languages}
  */
module.exports = {
  AFR: 'afr',
  AMH: 'amh',
  ARA: 'ara',
  ASM: 'asm',
  AZE: 'aze',
  AZE_CYRL: 'aze_cyrl',
  BEL: 'bel',
  BEN: 'ben',
  BOD: 'bod',
  BOS: 'bos',
  BUL: 'bul',
  CAT: 'cat',
  CEB: 'ceb',
  CES: 'ces',
  CHI_SIM: 'chi_sim',
  CHI_TRA: 'chi_tra',
  CHR: 'chr',
  CYM: 'cym',
  DAN: 'dan',
  DEU: 'deu',
  DZO: 'dzo',
  ELL: 'ell',
  ENG: 'eng',
  ENM: 'enm',
  EPO: 'epo',
  EST: 'est',
  EUS: 'eus',
  FAS: 'fas',
  FIN: 'fin',
  FRA: 'fra',
  FRK: 'frk',
  FRM: 'frm',
  GLE: 'gle',
  GLG: 'glg',
  GRC: 'grc',
  GUJ: 'guj',
  HAT: 'hat',
  HEB: 'heb',
  HIN: 'hin',
  HRV: 'hrv',
  HUN: 'hun',
  IKU: 'iku',
  IND: 'ind',
  ISL: 'isl',
  ITA: 'ita',
  ITA_OLD: 'ita_old',
  JAV: 'jav',
  JPN: 'jpn',
  KAN: 'kan',
  KAT: 'kat',
  KAT_OLD: 'kat_old',
  KAZ: 'kaz',
  KHM: 'khm',
  KIR: 'kir',
  KOR: 'kor',
  KUR: 'kur',
  LAO: 'lao',
  LAT: 'lat',
  LAV: 'lav',
  LIT: 'lit',
  MAL: 'mal',
  MAR: 'mar',
  MKD: 'mkd',
  MLT: 'mlt',
  MSA: 'msa',
  MYA: 'mya',
  NEP: 'nep',
  NLD: 'nld',
  NOR: 'nor',
  ORI: 'ori',
  PAN: 'pan',
  POL: 'pol',
  POR: 'por',
  PUS: 'pus',
  RON: 'ron',
  RUS: 'rus',
  SAN: 'san',
  SIN: 'sin',
  SLK: 'slk',
  SLV: 'slv',
  SPA: 'spa',
  SPA_OLD: 'spa_old',
  SQI: 'sqi',
  SRP: 'srp',
  SRP_LATN: 'srp_latn',
  SWA: 'swa',
  SWE: 'swe',
  SYR: 'syr',
  TAM: 'tam',
  TEL: 'tel',
  TGK: 'tgk',
  TGL: 'tgl',
  THA: 'tha',
  TIR: 'tir',
  TUR: 'tur',
  UIG: 'uig',
  UKR: 'ukr',
  URD: 'urd',
  UZB: 'uzb',
  UZB_CYRL: 'uzb_cyrl',
  VIE: 'vie',
  YID: 'yid'
};

/***/ }),

/***/ 9413:
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/createJob.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const getId = __webpack_require__(/*! ./utils/getId */ 8777);
let jobCounter = 0;
module.exports = ({
  id: _id,
  action,
  payload = {}
}) => {
  let id = _id;
  if (typeof id === 'undefined') {
    id = getId('Job', jobCounter);
    jobCounter += 1;
  }
  return {
    id,
    action,
    payload
  };
};

/***/ }),

/***/ 575:
/*!**********************************************************!*\
  !*** ./node_modules/tesseract.js/src/createScheduler.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 9293)["default"]);
var _this = this;
const createJob = __webpack_require__(/*! ./createJob */ 9413);
const {
  log
} = __webpack_require__(/*! ./utils/log */ 1862);
const getId = __webpack_require__(/*! ./utils/getId */ 8777);
let schedulerCounter = 0;
module.exports = () => {
  const id = getId('Scheduler', schedulerCounter);
  const workers = {};
  const runningWorkers = {};
  let jobQueue = [];
  schedulerCounter += 1;
  const getQueueLen = () => jobQueue.length;
  const getNumWorkers = () => Object.keys(workers).length;
  const dequeue = () => {
    if (jobQueue.length !== 0) {
      const wIds = Object.keys(workers);
      for (let i = 0; i < wIds.length; i += 1) {
        if (typeof runningWorkers[wIds[i]] === 'undefined') {
          jobQueue[0](workers[wIds[i]]);
          break;
        }
      }
    }
  };
  const queue = (action, payload) => new Promise((resolve, reject) => {
    const job = createJob({
      action,
      payload
    });
    jobQueue.push(/*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (w) {
        jobQueue.shift();
        runningWorkers[w.id] = job;
        try {
          resolve(yield w[action].apply(_this, [...payload, job.id]));
        } catch (err) {
          reject(err);
        } finally {
          delete runningWorkers[w.id];
          dequeue();
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    log(`[${id}]: Add ${job.id} to JobQueue`);
    log(`[${id}]: JobQueue length=${jobQueue.length}`);
    dequeue();
  });
  const addWorker = w => {
    workers[w.id] = w;
    log(`[${id}]: Add ${w.id}`);
    log(`[${id}]: Number of workers=${getNumWorkers()}`);
    dequeue();
    return w.id;
  };
  const addJob = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (action, ...payload) {
      if (getNumWorkers() === 0) {
        throw Error(`[${id}]: You need to have at least one worker before adding jobs`);
      }
      return queue(action, payload);
    });
    return function addJob(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  const terminate = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      Object.keys(workers).forEach(/*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator(function* (wid) {
          yield workers[wid].terminate();
        });
        return function (_x3) {
          return _ref4.apply(this, arguments);
        };
      }());
      jobQueue = [];
    });
    return function terminate() {
      return _ref3.apply(this, arguments);
    };
  }();
  return {
    addWorker,
    addJob,
    terminate,
    getQueueLen,
    getNumWorkers
  };
};

/***/ }),

/***/ 8738:
/*!*******************************************************!*\
  !*** ./node_modules/tesseract.js/src/createWorker.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 9293)["default"]);
const resolvePaths = __webpack_require__(/*! ./utils/resolvePaths */ 4434);
const circularize = __webpack_require__(/*! ./utils/circularize */ 3377);
const createJob = __webpack_require__(/*! ./createJob */ 9413);
const {
  log
} = __webpack_require__(/*! ./utils/log */ 1862);
const getId = __webpack_require__(/*! ./utils/getId */ 8777);
const {
  defaultOEM
} = __webpack_require__(/*! ./constants/config */ 7968);
const {
  defaultOptions,
  spawnWorker,
  terminateWorker,
  onMessage,
  loadImage,
  send
} = __webpack_require__(/*! ./worker/node */ 7234);
let workerCounter = 0;
module.exports = /*#__PURE__*/_asyncToGenerator(function* (_options = {}) {
  const id = getId('Worker', workerCounter);
  const {
    logger,
    errorHandler,
    ...options
  } = resolvePaths({
    ...defaultOptions,
    ..._options
  });
  const resolves = {};
  const rejects = {};
  let workerResReject;
  let workerResResolve;
  const workerRes = new Promise((resolve, reject) => {
    workerResResolve = resolve;
    workerResReject = reject;
  });
  const workerError = event => {
    workerResReject(event.message);
  };
  let worker = spawnWorker(options);
  worker.onerror = workerError;
  workerCounter += 1;
  const setResolve = (action, res) => {
    resolves[action] = res;
  };
  const setReject = (action, rej) => {
    rejects[action] = rej;
  };
  const startJob = ({
    id: jobId,
    action,
    payload
  }) => new Promise((resolve, reject) => {
    log(`[${id}]: Start ${jobId}, action=${action}`);
    setResolve(action, resolve);
    setReject(action, reject);
    send(worker, {
      workerId: id,
      jobId,
      action,
      payload
    });
  });
  const load = () => console.warn('`load` is depreciated and should be removed from code (workers now come pre-loaded)');
  const loadInternal = jobId => startJob(createJob({
    id: jobId,
    action: 'load',
    payload: {
      options
    }
  }));
  const writeText = (path, text, jobId) => startJob(createJob({
    id: jobId,
    action: 'FS',
    payload: {
      method: 'writeFile',
      args: [path, text]
    }
  }));
  const readText = (path, jobId) => startJob(createJob({
    id: jobId,
    action: 'FS',
    payload: {
      method: 'readFile',
      args: [path, {
        encoding: 'utf8'
      }]
    }
  }));
  const removeFile = (path, jobId) => startJob(createJob({
    id: jobId,
    action: 'FS',
    payload: {
      method: 'unlink',
      args: [path]
    }
  }));
  const FS = (method, args, jobId) => startJob(createJob({
    id: jobId,
    action: 'FS',
    payload: {
      method,
      args
    }
  }));
  const loadLanguage = (langs = 'eng', jobId) => startJob(createJob({
    id: jobId,
    action: 'loadLanguage',
    payload: {
      langs,
      options
    }
  }));
  const initialize = (langs = 'eng', oem = defaultOEM, config, jobId) => startJob(createJob({
    id: jobId,
    action: 'initialize',
    payload: {
      langs,
      oem,
      config
    }
  }));
  const setParameters = (params = {}, jobId) => startJob(createJob({
    id: jobId,
    action: 'setParameters',
    payload: {
      params
    }
  }));
  const recognize = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (image, opts = {}, output = {
      blocks: true,
      text: true,
      hocr: true,
      tsv: true
    }, jobId) {
      return startJob(createJob({
        id: jobId,
        action: 'recognize',
        payload: {
          image: yield loadImage(image),
          options: opts,
          output
        }
      }));
    });
    return function recognize(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  const getPDF = (title = 'Tesseract OCR Result', textonly = false, jobId) => {
    console.log('`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead.');
    return startJob(createJob({
      id: jobId,
      action: 'getPDF',
      payload: {
        title,
        textonly
      }
    }));
  };
  const detect = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* (image, jobId) {
      return startJob(createJob({
        id: jobId,
        action: 'detect',
        payload: {
          image: yield loadImage(image)
        }
      }));
    });
    return function detect(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  const terminate = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* () {
      if (worker !== null) {
        /*
        await startJob(createJob({
          id: jobId,
          action: 'terminate',
        }));
        */
        terminateWorker(worker);
        worker = null;
      }
      return Promise.resolve();
    });
    return function terminate() {
      return _ref4.apply(this, arguments);
    };
  }();
  onMessage(worker, ({
    workerId,
    jobId,
    status,
    action,
    data
  }) => {
    if (status === 'resolve') {
      log(`[${workerId}]: Complete ${jobId}`);
      let d = data;
      if (action === 'recognize') {
        d = circularize(data);
      } else if (action === 'getPDF') {
        d = Array.from({
          ...data,
          length: Object.keys(data).length
        });
      }
      resolves[action]({
        jobId,
        data: d
      });
    } else if (status === 'reject') {
      rejects[action](data);
      if (action === 'load') workerResReject(data);
      if (errorHandler) {
        errorHandler(data);
      } else {
        throw Error(data);
      }
    } else if (status === 'progress') {
      logger({
        ...data,
        userJobId: jobId
      });
    }
  });
  const resolveObj = {
    id,
    worker,
    setResolve,
    setReject,
    load,
    writeText,
    readText,
    removeFile,
    FS,
    loadLanguage,
    initialize,
    setParameters,
    recognize,
    getPDF,
    detect,
    terminate
  };
  loadInternal().then(() => workerResResolve(resolveObj)).catch(() => {});
  return workerRes;
});

/***/ }),

/***/ 1074:
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/src/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 *
 * Entry point for tesseract.js, should be the entry when bundling.
 *
 * @fileoverview entry point for tesseract.js
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
__webpack_require__(/*! regenerator-runtime/runtime */ 8646);
const createScheduler = __webpack_require__(/*! ./createScheduler */ 575);
const createWorker = __webpack_require__(/*! ./createWorker */ 8738);
const Tesseract = __webpack_require__(/*! ./Tesseract */ 5444);
const languages = __webpack_require__(/*! ./constants/languages */ 3427);
const OEM = __webpack_require__(/*! ./constants/OEM */ 8103);
const PSM = __webpack_require__(/*! ./constants/PSM */ 8204);
const {
  setLogging
} = __webpack_require__(/*! ./utils/log */ 1862);
module.exports = {
  languages,
  OEM,
  PSM,
  createScheduler,
  createWorker,
  setLogging,
  ...Tesseract
};

/***/ }),

/***/ 3377:
/*!************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/circularize.js ***!
  \************************************************************/
/***/ ((module) => {

/**
 * In the recognition result of tesseract, there
 * is a deep JSON object for details, it has around
 *
 * The result of dump.js is a big JSON tree
 * which can be easily serialized (for instance
 * to be sent from a webworker to the main app
 * or through Node's IPC), but we want
 * a (circular) DOM-like interface for walking
 * through the data.
 *
 * @fileoverview DOM-like interface for walking through data
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */

module.exports = page => {
  const blocks = [];
  const paragraphs = [];
  const lines = [];
  const words = [];
  const symbols = [];
  if (page.blocks) {
    page.blocks.forEach(block => {
      block.paragraphs.forEach(paragraph => {
        paragraph.lines.forEach(line => {
          line.words.forEach(word => {
            word.symbols.forEach(sym => {
              symbols.push({
                ...sym,
                page,
                block,
                paragraph,
                line,
                word
              });
            });
            words.push({
              ...word,
              page,
              block,
              paragraph,
              line
            });
          });
          lines.push({
            ...line,
            page,
            block,
            paragraph
          });
        });
        paragraphs.push({
          ...paragraph,
          page,
          block
        });
      });
      blocks.push({
        ...block,
        page
      });
    });
  }
  return {
    ...page,
    blocks,
    paragraphs,
    lines,
    words,
    symbols
  };
};

/***/ }),

/***/ 2603:
/*!***************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/getEnvironment.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isElectron = __webpack_require__(/*! is-electron */ 837);
module.exports = key => {
  const env = {};
  if (typeof WorkerGlobalScope !== 'undefined') {
    env.type = 'webworker';
  } else if (isElectron()) {
    env.type = 'electron';
  } else if (typeof document === 'object') {
    env.type = 'browser';
  } else if (typeof process === 'object' && "function" === 'function') {
    env.type = 'node';
  }
  if (typeof key === 'undefined') {
    return env;
  }
  return env[key];
};

/***/ }),

/***/ 8777:
/*!******************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/getId.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = (prefix, cnt) => `${prefix}-${cnt}-${Math.random().toString(16).slice(3, 8)}`;

/***/ }),

/***/ 1862:
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/log.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

let logging = false;
exports.logging = logging;
exports.setLogging = _logging => {
  logging = _logging;
};
exports.log = (...args) => logging ? console.log.apply(this, args) : null;

/***/ }),

/***/ 4434:
/*!*************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/resolvePaths.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isBrowser = __webpack_require__(/*! ./getEnvironment */ 2603)('type') === 'browser';
const resolveURL = isBrowser ? s => new URL(s, window.location.href).href : s => s; // eslint-disable-line

module.exports = options => {
  const opts = {
    ...options
  };
  ['corePath', 'workerPath', 'langPath'].forEach(key => {
    if (options[key]) {
      opts[key] = resolveURL(opts[key]);
    }
  });
  return opts;
};

/***/ }),

/***/ 9453:
/*!************************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/defaultOptions.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const resolveURL = s => new URL(s, window.location.href).href;
const {
  version
} = __webpack_require__(/*! ../../../package.json */ 6125);
const defaultOptions = __webpack_require__(/*! ../../constants/defaultOptions */ 9499);

/*
 * Default options for browser worker
 */
module.exports = {
  ...defaultOptions,
  workerPath: typeof process !== 'undefined' && process.env.TESS_ENV === 'development' ? resolveURL(`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`) : `https://cdn.jsdelivr.net/npm/tesseract.js@v${version}/dist/worker.min.js`,
  /*
   * If browser doesn't support WebAssembly,
   * load ASM version instead
   */
  corePath: null
};

/***/ }),

/***/ 7234:
/*!***************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 *
 * Tesseract Worker adapter for browser
 *
 * @fileoverview Tesseract Worker adapter for browser
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
const defaultOptions = __webpack_require__(/*! ./defaultOptions */ 9453);
const spawnWorker = __webpack_require__(/*! ./spawnWorker */ 3895);
const terminateWorker = __webpack_require__(/*! ./terminateWorker */ 3495);
const onMessage = __webpack_require__(/*! ./onMessage */ 3478);
const send = __webpack_require__(/*! ./send */ 6030);
const loadImage = __webpack_require__(/*! ./loadImage */ 7759);
module.exports = {
  defaultOptions,
  spawnWorker,
  terminateWorker,
  onMessage,
  send,
  loadImage
};

/***/ }),

/***/ 7759:
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/loadImage.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 9293)["default"]);
/**
 * readFromBlobOrFile
 *
 * @name readFromBlobOrFile
 * @function
 * @access private
 */
const readFromBlobOrFile = blob => new Promise((resolve, reject) => {
  const fileReader = new FileReader();
  fileReader.onload = () => {
    resolve(fileReader.result);
  };
  fileReader.onerror = ({
    target: {
      error: {
        code
      }
    }
  }) => {
    reject(Error(`File could not be read! Code=${code}`));
  };
  fileReader.readAsArrayBuffer(blob);
});

/**
 * loadImage
 *
 * @name loadImage
 * @function load image from different source
 * @access private
 */
const _loadImage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (image) {
    let data = image;
    if (typeof image === 'undefined') {
      return 'undefined';
    }
    if (typeof image === 'string') {
      // Base64 Image
      if (/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(image)) {
        data = atob(image.split(',')[1]).split('').map(c => c.charCodeAt(0));
      } else {
        const resp = yield fetch(image);
        data = yield resp.arrayBuffer();
      }
    } else if (typeof HTMLElement !== 'undefined' && image instanceof HTMLElement) {
      if (image.tagName === 'IMG') {
        data = yield _loadImage(image.src);
      }
      if (image.tagName === 'VIDEO') {
        data = yield _loadImage(image.poster);
      }
      if (image.tagName === 'CANVAS') {
        yield new Promise(resolve => {
          image.toBlob(/*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(function* (blob) {
              data = yield readFromBlobOrFile(blob);
              resolve();
            });
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
        });
      }
    } else if (typeof OffscreenCanvas !== 'undefined' && image instanceof OffscreenCanvas) {
      const blob = yield image.convertToBlob();
      data = yield readFromBlobOrFile(blob);
    } else if (image instanceof File || image instanceof Blob) {
      data = yield readFromBlobOrFile(image);
    }
    return new Uint8Array(data);
  });
  return function loadImage(_x) {
    return _ref.apply(this, arguments);
  };
}();
module.exports = _loadImage;

/***/ }),

/***/ 3478:
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/onMessage.js ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = (worker, handler) => {
  worker.onmessage = ({
    data
  }) => {
    // eslint-disable-line
    handler(data);
  };
};

/***/ }),

/***/ 6030:
/*!**************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/send.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 9293)["default"]);
/**
 * send
 *
 * @name send
 * @function send packet to worker and create a job
 * @access public
 */
module.exports = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (worker, packet) {
    worker.postMessage(packet);
  });
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 3895:
/*!*********************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/spawnWorker.js ***!
  \*********************************************************************/
/***/ ((module) => {

/**
 * spawnWorker
 *
 * @name spawnWorker
 * @function create a new Worker in browser
 * @access public
 */
module.exports = ({
  workerPath,
  workerBlobURL
}) => {
  let worker;
  if (Blob && URL && workerBlobURL) {
    const blob = new Blob([`importScripts("${workerPath}");`], {
      type: 'application/javascript'
    });
    worker = new Worker(URL.createObjectURL(blob));
  } else {
    worker = new Worker(workerPath);
  }
  return worker;
};

/***/ }),

/***/ 3495:
/*!*************************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/terminateWorker.js ***!
  \*************************************************************************/
/***/ ((module) => {

/**
 * terminateWorker
 *
 * @name terminateWorker
 * @function terminate worker
 * @access public
 */
module.exports = worker => {
  worker.terminate();
};

/***/ }),

/***/ 9293:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9362:
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/fesm2022/ngx-image-cropper.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CropService: () => (/* binding */ CropService),
/* harmony export */   ImageCropperComponent: () => (/* binding */ ImageCropperComponent),
/* harmony export */   LoadImageService: () => (/* binding */ LoadImageService),
/* harmony export */   base64ToFile: () => (/* binding */ base64ToFile),
/* harmony export */   resizeCanvas: () => (/* binding */ resizeCanvas)
/* harmony export */ });
/* harmony import */ var _home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1594);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3726);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 345);







const _c0 = ["wrapper"];
const _c1 = ["sourceImage"];
function ImageCropperComponent_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 5, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function ImageCropperComponent_img_1_Template_img_load_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.imageLoadedInView());
    })("mousedown", function ImageCropperComponent_img_1_Template_img_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Drag));
    })("touchstart", function ImageCropperComponent_img_1_Template_img_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Drag));
    })("error", function ImageCropperComponent_img_1_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.loadImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const src_r3 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx_r1.imageVisible ? "visible" : "hidden")("transform", ctx_r1.safeTransformStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-ic-draggable", !ctx_r1.disabled && ctx_r1.allowMoveImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", src_r3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("alt", ctx_r1.imageAltText);
  }
}
function ImageCropperComponent_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topleft"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topleft"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topright"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topright"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomright"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomright"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomleft"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomleft"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "top"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "top"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "top"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "top"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "right"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "right"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottom"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottom"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottom"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottom"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "left"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "left"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "left"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "left"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function ImageCropperComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function ImageCropperComponent_div_3_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.keyboardAccess($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_3_Template_div_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Move));
    })("touchstart", function ImageCropperComponent_div_3_Template_div_touchstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Move));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ImageCropperComponent_div_3_ng_container_2_Template, 21, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx_r1.state.cropper().y1, "px")("left", ctx_r1.state.cropper().x1, "px")("width", ctx_r1.state.cropper().x2 - ctx_r1.state.cropper().x1, "px")("height", ctx_r1.state.cropper().y2 - ctx_r1.state.cropper().y1, "px")("margin-left", ctx_r1.state.options.alignImage === "center" ? ctx_r1.marginLeft : null)("visibility", ctx_r1.imageVisible ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-ic-round", ctx_r1.state.options.roundCropper);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r1.state.options.cropperFrameAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.state.options.hideResizeSquares && !(ctx_r1.state.options.cropperStaticWidth && ctx_r1.state.options.cropperStaticHeight));
  }
}
function checkCropperPosition(cropperPosition, cropperState, maintainSize) {
  cropperPosition = checkCropperSizeRestriction(cropperPosition, cropperState);
  return checkCropperWithinMaxSizeBounds(cropperPosition, cropperState, maintainSize);
}
function checkCropperSizeRestriction(cropperPosition, cropperState) {
  let cropperWidth = cropperPosition.x2 - cropperPosition.x1;
  let cropperHeight = cropperPosition.y2 - cropperPosition.y1;
  const centerX = cropperPosition.x1 + cropperWidth / 2;
  const centerY = cropperPosition.y1 + cropperHeight / 2;
  if (cropperState.options.cropperStaticHeight && cropperState.options.cropperStaticWidth) {
    cropperWidth = cropperState.maxSize().width > cropperState.options.cropperStaticWidth ? cropperState.options.cropperStaticWidth : cropperState.maxSize().width;
    cropperHeight = cropperState.maxSize().height > cropperState.options.cropperStaticHeight ? cropperState.options.cropperStaticHeight : cropperState.maxSize().height;
  } else {
    cropperWidth = Math.max(cropperState.cropperScaledMinWidth, Math.min(cropperWidth, cropperState.cropperScaledMaxWidth, cropperState.maxSize().width));
    cropperHeight = Math.max(cropperState.cropperScaledMinHeight, Math.min(cropperHeight, cropperState.cropperScaledMaxHeight, cropperState.maxSize().height));
    if (cropperState.options.maintainAspectRatio) {
      if (cropperState.maxSize().width / cropperState.options.aspectRatio < cropperState.maxSize().height) {
        cropperHeight = cropperWidth / cropperState.options.aspectRatio;
      } else {
        cropperWidth = cropperHeight * cropperState.options.aspectRatio;
      }
    }
  }
  const x1 = centerX - cropperWidth / 2;
  const x2 = x1 + cropperWidth;
  const y1 = centerY - cropperHeight / 2;
  const y2 = y1 + cropperHeight;
  return {
    x1,
    x2,
    y1,
    y2
  };
}
function checkCropperWithinMaxSizeBounds(position, cropperState, maintainSize = false) {
  if (position.x1 < 0) {
    position = {
      ...position,
      x1: 0,
      x2: position.x2 - (maintainSize ? position.x1 : 0)
    };
  }
  if (position.y1 < 0) {
    position = {
      ...position,
      y2: position.y2 - (maintainSize ? position.y1 : 0),
      y1: 0
    };
  }
  if (position.x2 > cropperState.maxSize().width) {
    position = {
      ...position,
      x1: position.x1 - (maintainSize ? position.x2 - cropperState.maxSize().width : 0),
      x2: cropperState.maxSize().width
    };
  }
  if (position.y2 > cropperState.maxSize().height) {
    position = {
      ...position,
      y1: position.y1 - (maintainSize ? position.y2 - cropperState.maxSize().height : 0),
      y2: cropperState.maxSize().height
    };
  }
  return position;
}
function moveCropper(event, moveStart) {
  const diffX = getClientX(event) - moveStart.clientX;
  const diffY = getClientY(event) - moveStart.clientY;
  return {
    x1: moveStart.cropper.x1 + diffX,
    y1: moveStart.cropper.y1 + diffY,
    x2: moveStart.cropper.x2 + diffX,
    y2: moveStart.cropper.y2 + diffY
  };
}
function resizeCropper(event, moveStart, cropperState) {
  const cropperPosition = {
    ...cropperState.cropper()
  };
  const moveX = getClientX(event) - moveStart.clientX;
  const moveY = getClientY(event) - moveStart.clientY;
  switch (moveStart.position) {
    case 'left':
      cropperPosition.x1 = Math.min(Math.max(moveStart.cropper.x1 + moveX, cropperPosition.x2 - cropperState.cropperScaledMaxWidth), cropperPosition.x2 - cropperState.cropperScaledMinWidth);
      break;
    case 'topleft':
      cropperPosition.x1 = Math.min(Math.max(moveStart.cropper.x1 + moveX, cropperPosition.x2 - cropperState.cropperScaledMaxWidth), cropperPosition.x2 - cropperState.cropperScaledMinWidth);
      cropperPosition.y1 = Math.min(Math.max(moveStart.cropper.y1 + moveY, cropperPosition.y2 - cropperState.cropperScaledMaxHeight), cropperPosition.y2 - cropperState.cropperScaledMinHeight);
      break;
    case 'top':
      cropperPosition.y1 = Math.min(Math.max(moveStart.cropper.y1 + moveY, cropperPosition.y2 - cropperState.cropperScaledMaxHeight), cropperPosition.y2 - cropperState.cropperScaledMinHeight);
      break;
    case 'topright':
      cropperPosition.x2 = Math.max(Math.min(moveStart.cropper.x2 + moveX, cropperPosition.x1 + cropperState.cropperScaledMaxWidth), cropperPosition.x1 + cropperState.cropperScaledMinWidth);
      cropperPosition.y1 = Math.min(Math.max(moveStart.cropper.y1 + moveY, cropperPosition.y2 - cropperState.cropperScaledMaxHeight), cropperPosition.y2 - cropperState.cropperScaledMinHeight);
      break;
    case 'right':
      cropperPosition.x2 = Math.max(Math.min(moveStart.cropper.x2 + moveX, cropperPosition.x1 + cropperState.cropperScaledMaxWidth), cropperPosition.x1 + cropperState.cropperScaledMinWidth);
      break;
    case 'bottomright':
      cropperPosition.x2 = Math.max(Math.min(moveStart.cropper.x2 + moveX, cropperPosition.x1 + cropperState.cropperScaledMaxWidth), cropperPosition.x1 + cropperState.cropperScaledMinWidth);
      cropperPosition.y2 = Math.max(Math.min(moveStart.cropper.y2 + moveY, cropperPosition.y1 + cropperState.cropperScaledMaxHeight), cropperPosition.y1 + cropperState.cropperScaledMinHeight);
      break;
    case 'bottom':
      cropperPosition.y2 = Math.max(Math.min(moveStart.cropper.y2 + moveY, cropperPosition.y1 + cropperState.cropperScaledMaxHeight), cropperPosition.y1 + cropperState.cropperScaledMinHeight);
      break;
    case 'bottomleft':
      cropperPosition.x1 = Math.min(Math.max(moveStart.cropper.x1 + moveX, cropperPosition.x2 - cropperState.cropperScaledMaxWidth), cropperPosition.x2 - cropperState.cropperScaledMinWidth);
      cropperPosition.y2 = Math.max(Math.min(moveStart.cropper.y2 + moveY, cropperPosition.y1 + cropperState.cropperScaledMaxHeight), cropperPosition.y1 + cropperState.cropperScaledMinHeight);
      break;
    case 'center':
      const scale = 'scale' in event ? event.scale : 1;
      const newWidth = Math.min(Math.max(cropperState.cropperScaledMinWidth, Math.abs(moveStart.cropper.x2 - moveStart.cropper.x1) * scale), cropperState.cropperScaledMaxWidth);
      const newHeight = Math.min(Math.max(cropperState.cropperScaledMinHeight, Math.abs(moveStart.cropper.y2 - moveStart.cropper.y1) * scale), cropperState.cropperScaledMaxHeight);
      cropperPosition.x1 = moveStart.clientX - newWidth / 2;
      cropperPosition.x2 = moveStart.clientX + newWidth / 2;
      cropperPosition.y1 = moveStart.clientY - newHeight / 2;
      cropperPosition.y2 = moveStart.clientY + newHeight / 2;
      if (cropperPosition.x1 < 0) {
        cropperPosition.x2 -= cropperPosition.x1;
        cropperPosition.x1 = 0;
      } else if (cropperPosition.x2 > cropperState.maxSize().width) {
        cropperPosition.x1 -= cropperPosition.x2 - cropperState.maxSize().width;
        cropperPosition.x2 = cropperState.maxSize().width;
      }
      if (cropperPosition.y1 < 0) {
        cropperPosition.y2 -= cropperPosition.y1;
        cropperPosition.y1 = 0;
      } else if (cropperPosition.y2 > cropperState.maxSize().height) {
        cropperPosition.y1 -= cropperPosition.y2 - cropperState.maxSize().height;
        cropperPosition.y2 = cropperState.maxSize().height;
      }
      break;
  }
  if (cropperState.options.maintainAspectRatio) {
    return checkAspectRatio(moveStart.position, cropperPosition, cropperState);
  } else {
    return cropperPosition;
  }
}
function checkAspectRatio(position, cropperPosition, cropperState) {
  cropperPosition = {
    ...cropperPosition
  };
  let overflowX = 0;
  let overflowY = 0;
  switch (position) {
    case 'top':
      cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * cropperState.options.aspectRatio;
      overflowX = Math.max(cropperPosition.x2 - cropperState.maxSize().width, 0);
      overflowY = Math.max(0 - cropperPosition.y1, 0);
      if (overflowX > 0 || overflowY > 0) {
        cropperPosition.x2 -= overflowY * cropperState.options.aspectRatio > overflowX ? overflowY * cropperState.options.aspectRatio : overflowX;
        cropperPosition.y1 += overflowY * cropperState.options.aspectRatio > overflowX ? overflowY : overflowX / cropperState.options.aspectRatio;
      }
      break;
    case 'bottom':
      cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * cropperState.options.aspectRatio;
      overflowX = Math.max(cropperPosition.x2 - cropperState.maxSize().width, 0);
      overflowY = Math.max(cropperPosition.y2 - cropperState.maxSize().height, 0);
      if (overflowX > 0 || overflowY > 0) {
        cropperPosition.x2 -= overflowY * cropperState.options.aspectRatio > overflowX ? overflowY * cropperState.options.aspectRatio : overflowX;
        cropperPosition.y2 -= overflowY * cropperState.options.aspectRatio > overflowX ? overflowY : overflowX / cropperState.options.aspectRatio;
      }
      break;
    case 'topleft':
      cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / cropperState.options.aspectRatio;
      overflowX = Math.max(0 - cropperPosition.x1, 0);
      overflowY = Math.max(0 - cropperPosition.y1, 0);
      if (overflowX > 0 || overflowY > 0) {
        cropperPosition.x1 += overflowY * cropperState.options.aspectRatio > overflowX ? overflowY * cropperState.options.aspectRatio : overflowX;
        cropperPosition.y1 += overflowY * cropperState.options.aspectRatio > overflowX ? overflowY : overflowX / cropperState.options.aspectRatio;
      }
      break;
    case 'topright':
      cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / cropperState.options.aspectRatio;
      overflowX = Math.max(cropperPosition.x2 - cropperState.maxSize().width, 0);
      overflowY = Math.max(0 - cropperPosition.y1, 0);
      if (overflowX > 0 || overflowY > 0) {
        cropperPosition.x2 -= overflowY * cropperState.options.aspectRatio > overflowX ? overflowY * cropperState.options.aspectRatio : overflowX;
        cropperPosition.y1 += overflowY * cropperState.options.aspectRatio > overflowX ? overflowY : overflowX / cropperState.options.aspectRatio;
      }
      break;
    case 'right':
    case 'bottomright':
      cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / cropperState.options.aspectRatio;
      overflowX = Math.max(cropperPosition.x2 - cropperState.maxSize().width, 0);
      overflowY = Math.max(cropperPosition.y2 - cropperState.maxSize().height, 0);
      if (overflowX > 0 || overflowY > 0) {
        cropperPosition.x2 -= overflowY * cropperState.options.aspectRatio > overflowX ? overflowY * cropperState.options.aspectRatio : overflowX;
        cropperPosition.y2 -= overflowY * cropperState.options.aspectRatio > overflowX ? overflowY : overflowX / cropperState.options.aspectRatio;
      }
      break;
    case 'left':
    case 'bottomleft':
      cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / cropperState.options.aspectRatio;
      overflowX = Math.max(0 - cropperPosition.x1, 0);
      overflowY = Math.max(cropperPosition.y2 - cropperState.maxSize().height, 0);
      if (overflowX > 0 || overflowY > 0) {
        cropperPosition.x1 += overflowY * cropperState.options.aspectRatio > overflowX ? overflowY * cropperState.options.aspectRatio : overflowX;
        cropperPosition.y2 -= overflowY * cropperState.options.aspectRatio > overflowX ? overflowY : overflowX / cropperState.options.aspectRatio;
      }
      break;
    case 'center':
      cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * cropperState.options.aspectRatio;
      cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / cropperState.options.aspectRatio;
      const overflowX1 = Math.max(0 - cropperPosition.x1, 0);
      const overflowX2 = Math.max(cropperPosition.x2 - cropperState.maxSize().width, 0);
      const overflowY1 = Math.max(cropperPosition.y2 - cropperState.maxSize().height, 0);
      const overflowY2 = Math.max(0 - cropperPosition.y1, 0);
      if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
        cropperPosition.x1 += overflowY1 * cropperState.options.aspectRatio > overflowX1 ? overflowY1 * cropperState.options.aspectRatio : overflowX1;
        cropperPosition.x2 -= overflowY2 * cropperState.options.aspectRatio > overflowX2 ? overflowY2 * cropperState.options.aspectRatio : overflowX2;
        cropperPosition.y1 += overflowY2 * cropperState.options.aspectRatio > overflowX2 ? overflowY2 : overflowX2 / cropperState.options.aspectRatio;
        cropperPosition.y2 -= overflowY1 * cropperState.options.aspectRatio > overflowX1 ? overflowY1 : overflowX1 / cropperState.options.aspectRatio;
      }
      break;
  }
  return cropperPosition;
}
function getClientX(event) {
  if ('touches' in event && event.touches[0]) {
    return event.touches[0].clientX;
  } else if ('clientX' in event) {
    return event.clientX;
  }
  return 0;
}
function getClientY(event) {
  if ('touches' in event && event.touches[0]) {
    return event.touches[0].clientY;
  } else if ('clientX' in event) {
    return event.clientY;
  }
  return 0;
}
class CropperState {
  constructor() {
    this.cropper = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)({
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    });
    this.maxSize = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)({
      width: 0,
      height: 0
    });
    this.transform = {};
    this.options = {
      format: 'png',
      output: 'blob',
      autoCrop: true,
      maintainAspectRatio: true,
      aspectRatio: 1,
      resetCropOnAspectRatioChange: true,
      resizeToWidth: 0,
      resizeToHeight: 0,
      cropperMinWidth: 0,
      cropperMinHeight: 0,
      cropperMaxHeight: 0,
      cropperMaxWidth: 0,
      cropperStaticWidth: 0,
      cropperStaticHeight: 0,
      canvasRotation: 0,
      roundCropper: false,
      onlyScaleDown: false,
      imageQuality: 92,
      backgroundColor: undefined,
      containWithinAspectRatio: false,
      hideResizeSquares: false,
      alignImage: 'center',
      cropperFrameAriaLabel: undefined,
      checkImageType: true
    };
    // Internal
    this.cropperScaledMinWidth = 20;
    this.cropperScaledMinHeight = 20;
    this.cropperScaledMaxWidth = 20;
    this.cropperScaledMaxHeight = 20;
    this.stepSize = 3;
  }
  setOptionsFromChanges(changes) {
    if (changes['options']?.currentValue) {
      this.setOptions(changes['options'].currentValue);
    }
    const options = Object.entries(changes).filter(([key]) => key in this.options).reduce((acc, [key, change]) => ({
      ...acc,
      [key]: change.currentValue
    }), {});
    if (Object.keys(options).length > 0) {
      this.setOptions(options);
    }
  }
  setOptions(options) {
    this.options = {
      ...this.options,
      ...(options || {})
    };
    this.validateOptions();
    if (!this.loadedImage?.transformed.image.complete || !this.maxSize) {
      return;
    }
    let positionPossiblyChanged = false;
    if (this.options.maintainAspectRatio && options['aspectRatio'] || 'maintainAspectRatio' in options) {
      this.setCropperScaledMinSize();
      this.setCropperScaledMaxSize();
      if (this.options.maintainAspectRatio && (this.options.resetCropOnAspectRatioChange || !this.aspectRatioIsCorrect())) {
        this.cropper.set(this.maxSizeCropperPosition());
        positionPossiblyChanged = true;
      }
    } else {
      if (options['cropperMinWidth'] || options['cropperMinHeight']) {
        this.setCropperScaledMinSize();
        positionPossiblyChanged = true;
      }
      if (options['cropperMaxWidth'] || options['cropperMaxHeight']) {
        this.setCropperScaledMaxSize();
        positionPossiblyChanged = true;
      }
      if (options['cropperStaticWidth'] || options['cropperStaticHeight']) {
        positionPossiblyChanged = true;
      }
    }
    if (positionPossiblyChanged) {
      this.cropper.update(cropper => checkCropperPosition(cropper, this, false));
    }
  }
  validateOptions() {
    if (this.options.maintainAspectRatio && !this.options.aspectRatio) {
      throw new Error('`aspectRatio` should > 0 when `maintainAspectRatio` is enabled');
    }
  }
  setMaxSize(width, height) {
    this.maxSize.set({
      width,
      height
    });
    this.setCropperScaledMinSize();
    this.setCropperScaledMaxSize();
  }
  setCropperScaledMinSize() {
    if (this.loadedImage?.transformed.size) {
      this.setCropperScaledMinWidth();
      this.setCropperScaledMinHeight();
    } else {
      this.cropperScaledMinWidth = 20;
      this.cropperScaledMinHeight = 20;
    }
  }
  setCropperScaledMinWidth() {
    this.cropperScaledMinWidth = this.options.cropperMinWidth > 0 ? Math.max(20, this.options.cropperMinWidth / this.loadedImage.transformed.size.width * this.maxSize().width) : 20;
  }
  setCropperScaledMinHeight() {
    if (this.options.maintainAspectRatio) {
      this.cropperScaledMinHeight = Math.max(20, this.cropperScaledMinWidth / this.options.aspectRatio);
    } else if (this.options.cropperMinHeight > 0) {
      this.cropperScaledMinHeight = Math.max(20, this.options.cropperMinHeight / this.loadedImage.transformed.size.height * this.maxSize().height);
    } else {
      this.cropperScaledMinHeight = 20;
    }
  }
  setCropperScaledMaxSize() {
    if (this.loadedImage?.transformed.size) {
      const ratio = this.loadedImage.transformed.size.width / this.maxSize().width;
      this.cropperScaledMaxWidth = this.options.cropperMaxWidth > 20 ? this.options.cropperMaxWidth / ratio : this.maxSize().width;
      this.cropperScaledMaxHeight = this.options.cropperMaxHeight > 20 ? this.options.cropperMaxHeight / ratio : this.maxSize().height;
      if (this.options.maintainAspectRatio) {
        if (this.cropperScaledMaxWidth > this.cropperScaledMaxHeight * this.options.aspectRatio) {
          this.cropperScaledMaxWidth = this.cropperScaledMaxHeight * this.options.aspectRatio;
        } else if (this.cropperScaledMaxWidth < this.cropperScaledMaxHeight * this.options.aspectRatio) {
          this.cropperScaledMaxHeight = this.cropperScaledMaxWidth / this.options.aspectRatio;
        }
      }
    } else {
      this.cropperScaledMaxWidth = this.maxSize().width;
      this.cropperScaledMaxHeight = this.maxSize().height;
    }
  }
  equalsCropperPosition(cropper) {
    const localCropper = this.cropper();
    return localCropper == null && cropper == null || localCropper != null && cropper != null && localCropper.x1.toFixed(3) === cropper.x1.toFixed(3) && localCropper.y1.toFixed(3) === cropper.y1.toFixed(3) && localCropper.x2.toFixed(3) === cropper.x2.toFixed(3) && localCropper.y2.toFixed(3) === cropper.y2.toFixed(3);
  }
  equalsTransformTranslate(transform) {
    return (this.transform.translateH ?? 0) === (transform.translateH ?? 0) && (this.transform.translateV ?? 0) === (transform.translateV ?? 0);
  }
  equalsTransform(transform) {
    return this.equalsTransformTranslate(transform) && (this.transform.scale ?? 1) === (transform.scale ?? 1) && (this.transform.rotate ?? 0) === (transform.rotate ?? 0) && (this.transform.flipH ?? false) === (transform.flipH ?? false) && (this.transform.flipV ?? false) === (transform.flipV ?? false);
  }
  aspectRatioIsCorrect() {
    const localCropper = this.cropper();
    const currentCropAspectRatio = (localCropper.x2 - localCropper.x1) / (localCropper.y2 - localCropper.y1);
    return currentCropAspectRatio === this.options.aspectRatio;
  }
  resizeCropperPosition(oldMaxSize) {
    if (oldMaxSize.width !== this.maxSize().width || oldMaxSize.height !== this.maxSize().height) {
      this.cropper.update(cropper => ({
        x1: cropper.x1 * this.maxSize().width / oldMaxSize.width,
        x2: cropper.x2 * this.maxSize().width / oldMaxSize.width,
        y1: cropper.y1 * this.maxSize().height / oldMaxSize.height,
        y2: cropper.y2 * this.maxSize().height / oldMaxSize.height
      }));
    }
  }
  maxSizeCropperPosition() {
    return {
      x1: 0,
      y1: 0,
      x2: this.maxSize().width,
      y2: this.maxSize().height
    };
  }
  toCropInput() {
    return {
      cropper: this.cropper(),
      maxSize: this.maxSize(),
      transform: this.transform,
      loadedImage: this.loadedImage,
      options: {
        ...this.options
      }
    };
  }
}
var MoveTypes = /*#__PURE__*/function (MoveTypes) {
  MoveTypes["Drag"] = "drag";
  MoveTypes["Move"] = "move";
  MoveTypes["Resize"] = "resize";
  MoveTypes["Pinch"] = "pinch";
  return MoveTypes;
}(MoveTypes || {});
/*
 * Hermite resize - fast image resize/resample using Hermite filter.
 * https://github.com/viliusle/Hermite-resize
 */
function resizeCanvas(canvas, width, height) {
  const width_source = canvas.width;
  const height_source = canvas.height;
  width = Math.round(width);
  height = Math.round(height);
  const ratio_w = width_source / width;
  const ratio_h = height_source / height;
  const ratio_w_half = Math.ceil(ratio_w / 2);
  const ratio_h_half = Math.ceil(ratio_h / 2);
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const img = ctx.getImageData(0, 0, width_source, height_source);
    const img2 = ctx.createImageData(width, height);
    const data = img.data;
    const data2 = img2.data;
    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        const x2 = (i + j * width) * 4;
        const center_y = j * ratio_h;
        let weight = 0;
        let weights = 0;
        let weights_alpha = 0;
        let gx_r = 0;
        let gx_g = 0;
        let gx_b = 0;
        let gx_a = 0;
        const xx_start = Math.floor(i * ratio_w);
        const yy_start = Math.floor(j * ratio_h);
        let xx_stop = Math.ceil((i + 1) * ratio_w);
        let yy_stop = Math.ceil((j + 1) * ratio_h);
        xx_stop = Math.min(xx_stop, width_source);
        yy_stop = Math.min(yy_stop, height_source);
        for (let yy = yy_start; yy < yy_stop; yy++) {
          const dy = Math.abs(center_y - yy) / ratio_h_half;
          const center_x = i * ratio_w;
          const w0 = dy * dy; //pre-calc part of w
          for (let xx = xx_start; xx < xx_stop; xx++) {
            const dx = Math.abs(center_x - xx) / ratio_w_half;
            const w = Math.sqrt(w0 + dx * dx);
            if (w >= 1) {
              //pixel too far
              continue;
            }
            //hermite filter
            weight = 2 * w * w * w - 3 * w * w + 1;
            const pos_x = 4 * (xx + yy * width_source);
            //alpha
            gx_a += weight * data[pos_x + 3];
            weights_alpha += weight;
            //colors
            if (data[pos_x + 3] < 255) weight = weight * data[pos_x + 3] / 250;
            gx_r += weight * data[pos_x];
            gx_g += weight * data[pos_x + 1];
            gx_b += weight * data[pos_x + 2];
            weights += weight;
          }
        }
        data2[x2] = gx_r / weights;
        data2[x2 + 1] = gx_g / weights;
        data2[x2 + 2] = gx_b / weights;
        data2[x2 + 3] = gx_a / weights_alpha;
      }
    }
    canvas.width = width;
    canvas.height = height;
    //draw
    ctx.putImageData(img2, 0, 0);
  }
}
function percentage(percent, totalValue) {
  return percent / 100 * totalValue;
}
class CropService {
  crop(input, output) {
    const imagePosition = this.getImagePosition(input);
    const width = imagePosition.x2 - imagePosition.x1;
    const height = imagePosition.y2 - imagePosition.y1;
    const cropCanvas = document.createElement('canvas');
    cropCanvas.width = width;
    cropCanvas.height = height;
    const ctx = cropCanvas.getContext('2d');
    if (!ctx) {
      return null;
    }
    if (input.options?.backgroundColor != null) {
      ctx.fillStyle = input.options.backgroundColor;
      ctx.fillRect(0, 0, width, height);
    }
    const scaleX = (input.transform?.scale || 1) * (input.transform?.flipH ? -1 : 1);
    const scaleY = (input.transform?.scale || 1) * (input.transform?.flipV ? -1 : 1);
    const {
      translateH,
      translateV
    } = this.getCanvasTranslate(input);
    const transformedImage = input.loadedImage.transformed;
    ctx.setTransform(scaleX, 0, 0, scaleY, transformedImage.size.width / 2 + translateH, transformedImage.size.height / 2 + translateV);
    ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
    ctx.rotate((input.transform?.rotate || 0) * Math.PI / 180);
    ctx.drawImage(transformedImage.image, -transformedImage.size.width / 2, -transformedImage.size.height / 2);
    const result = {
      width,
      height,
      imagePosition,
      cropperPosition: {
        ...input.cropper
      }
    };
    if (input.options?.containWithinAspectRatio) {
      result.offsetImagePosition = this.getOffsetImagePosition(input);
    }
    const resizeRatio = this.getResizeRatio(width, height, input.options);
    if (resizeRatio !== 1) {
      result.width = Math.round(width * resizeRatio);
      result.height = input.options?.maintainAspectRatio ? Math.round(result.width / (input.options?.aspectRatio ?? 1)) : Math.round(height * resizeRatio);
      resizeCanvas(cropCanvas, result.width, result.height);
    }
    if (output === 'blob') {
      return this.cropToBlob(result, cropCanvas, input);
    } else {
      result.base64 = cropCanvas.toDataURL('image/' + (input.options?.format ?? 'png'), this.getQuality(input.options));
      return result;
    }
  }
  cropToBlob(output, cropCanvas, input) {
    var _this = this;
    return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      output.blob = yield new Promise(resolve => cropCanvas.toBlob(resolve, 'image/' + (input.options?.format ?? 'png'), _this.getQuality(input.options)));
      if (output.blob) {
        output.objectUrl = URL.createObjectURL(output.blob);
      }
      return output;
    })();
  }
  getCanvasTranslate(input) {
    if (input.transform?.translateUnit === 'px') {
      const ratio = this.getRatio(input);
      return {
        translateH: (input.transform?.translateH || 0) * ratio,
        translateV: (input.transform?.translateV || 0) * ratio
      };
    } else {
      return {
        translateH: input.transform?.translateH ? percentage(input.transform.translateH, input.loadedImage.transformed.size.width) : 0,
        translateV: input.transform?.translateV ? percentage(input.transform.translateV, input.loadedImage.transformed.size.height) : 0
      };
    }
  }
  getRatio(input) {
    return input.loadedImage.transformed.size.width / input.maxSize.width;
  }
  getImagePosition(cropperState) {
    const ratio = this.getRatio(cropperState);
    const out = {
      x1: Math.round(cropperState.cropper.x1 * ratio),
      y1: Math.round(cropperState.cropper.y1 * ratio),
      x2: Math.round(cropperState.cropper.x2 * ratio),
      y2: Math.round(cropperState.cropper.y2 * ratio)
    };
    if (!cropperState.options?.containWithinAspectRatio) {
      out.x1 = Math.max(out.x1, 0);
      out.y1 = Math.max(out.y1, 0);
      out.x2 = Math.min(out.x2, cropperState.loadedImage.transformed.size.width);
      out.y2 = Math.min(out.y2, cropperState.loadedImage.transformed.size.height);
    }
    return out;
  }
  getOffsetImagePosition(input) {
    const canvasRotation = (input.options?.canvasRotation ?? 0) + input.loadedImage.exifTransform.rotate;
    const ratio = this.getRatio(input);
    let offsetX;
    let offsetY;
    if (canvasRotation % 2) {
      offsetX = (input.loadedImage.transformed.size.width - input.loadedImage.original.size.height) / 2;
      offsetY = (input.loadedImage.transformed.size.height - input.loadedImage.original.size.width) / 2;
    } else {
      offsetX = (input.loadedImage.transformed.size.width - input.loadedImage.original.size.width) / 2;
      offsetY = (input.loadedImage.transformed.size.height - input.loadedImage.original.size.height) / 2;
    }
    const cropper = input.cropper;
    const out = {
      x1: Math.round(cropper.x1 * ratio) - offsetX,
      y1: Math.round(cropper.y1 * ratio) - offsetY,
      x2: Math.round(cropper.x2 * ratio) - offsetX,
      y2: Math.round(cropper.y2 * ratio) - offsetY
    };
    if (!input.options?.containWithinAspectRatio) {
      out.x1 = Math.max(out.x1, 0);
      out.y1 = Math.max(out.y1, 0);
      out.x2 = Math.min(out.x2, input.loadedImage.transformed.size.width);
      out.y2 = Math.min(out.y2, input.loadedImage.transformed.size.height);
    }
    return out;
  }
  getResizeRatio(width, height, options) {
    const ratios = new Array();
    if (options?.resizeToWidth && options.resizeToWidth > 0) {
      ratios.push(options.resizeToWidth / width);
    }
    if (options?.resizeToHeight && options.resizeToHeight > 0) {
      ratios.push(options.resizeToHeight / height);
    }
    const result = ratios.length === 0 ? 1 : Math.min(...ratios);
    if (result > 1 && !options?.onlyScaleDown) {
      return result;
    }
    return Math.min(result, 1);
  }
  getQuality(options) {
    return Math.min(1, Math.max(0, (options?.imageQuality ?? 92) / 100));
  }
}

// Black 2x1 JPEG, with the following meta information set:
// - EXIF Orientation: 6 (Rotated 90° CCW)
// Source: https://github.com/blueimp/JavaScript-Load-Image
const testAutoOrientationImageByteArray = [new Uint8Array([255, 216, 255, 225, 0, 34, 69, 120, 105, 102, 0, 0, 77, 77, 0, 42, 0, 0, 0, 8, 0, 1, 1, 18, 0, 3, 0, 0, 0, 1, 0, 6, 0, 0, 0, 0, 0, 0, 255, 219, 0, 132, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 255, 192, 0, 17, 8, 0, 1, 0, 2, 3, 1, 17, 0, 2, 17, 1, 3, 17, 1, 255, 196, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 218, 0, 12, 3, 1, 0, 2, 17, 3, 17, 0, 63, 0, 63, 240, 127, 255, 217])];
const testAutoOrientationImageURL = URL.createObjectURL(new Blob(testAutoOrientationImageByteArray, {
  type: 'image/jpeg'
}));
function supportsAutomaticRotation() {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      // Check if browser supports automatic image orientation:
      const supported = img.width === 1 && img.height === 2;
      resolve(supported);
    };
    img.src = testAutoOrientationImageURL;
  });
}
function getTransformationsFromExifData(exifRotationOrArrayBuffer) {
  if (typeof exifRotationOrArrayBuffer === 'object') {
    exifRotationOrArrayBuffer = getExifRotation(exifRotationOrArrayBuffer);
  }
  switch (exifRotationOrArrayBuffer) {
    case 2:
      return {
        rotate: 0,
        flip: true
      };
    case 3:
      return {
        rotate: 2,
        flip: false
      };
    case 4:
      return {
        rotate: 2,
        flip: true
      };
    case 5:
      return {
        rotate: 1,
        flip: true
      };
    case 6:
      return {
        rotate: 1,
        flip: false
      };
    case 7:
      return {
        rotate: 3,
        flip: true
      };
    case 8:
      return {
        rotate: 3,
        flip: false
      };
    default:
      return {
        rotate: 0,
        flip: false
      };
  }
}
function getExifRotation(arrayBuffer) {
  const view = new DataView(arrayBuffer);
  if (view.getUint16(0, false) !== 0xFFD8) {
    return -2;
  }
  const length = view.byteLength;
  let offset = 2;
  while (offset < length) {
    if (view.getUint16(offset + 2, false) <= 8) return -1;
    const marker = view.getUint16(offset, false);
    offset += 2;
    if (marker == 0xFFE1) {
      if (view.getUint32(offset += 2, false) !== 0x45786966) {
        return -1;
      }
      const little = view.getUint16(offset += 6, false) == 0x4949;
      offset += view.getUint32(offset + 4, little);
      const tags = view.getUint16(offset, little);
      offset += 2;
      for (let i = 0; i < tags; i++) {
        if (view.getUint16(offset + i * 12, little) == 0x0112) {
          return view.getUint16(offset + i * 12 + 8, little);
        }
      }
    } else if ((marker & 0xFF00) !== 0xFF00) {
      break;
    } else {
      offset += view.getUint16(offset, false);
    }
  }
  return -1;
}
class LoadImageService {
  constructor() {
    this.autoRotateSupported = supportsAutomaticRotation();
  }
  loadImageFile(file, options) {
    var _this2 = this;
    return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const arrayBuffer = yield file.arrayBuffer();
      if (options.checkImageType) {
        return yield _this2.checkImageTypeAndLoadImageFromArrayBuffer(arrayBuffer, file.type, options);
      }
      return yield _this2.loadImageFromArrayBuffer(arrayBuffer, options);
    })();
  }
  checkImageTypeAndLoadImageFromArrayBuffer(arrayBuffer, imageType, options) {
    if (!this.isValidImageType(imageType)) {
      return Promise.reject(new Error('Invalid image type'));
    }
    return this.loadImageFromArrayBuffer(arrayBuffer, options, imageType);
  }
  isValidImageType(type) {
    return /image\/(png|jpg|jpeg|heic|bmp|gif|tiff|svg|webp|x-icon|vnd.microsoft.icon)/.test(type);
  }
  loadImageFromURL(url, options) {
    var _this3 = this;
    return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield fetch(url);
      const blob = yield res.blob();
      const buffer = yield blob.arrayBuffer();
      return yield _this3.loadImageFromArrayBuffer(buffer, options, blob.type);
    })();
  }
  loadBase64Image(imageBase64, options) {
    const arrayBuffer = this.base64ToArrayBuffer(imageBase64);
    return this.loadImageFromArrayBuffer(arrayBuffer, options);
  }
  base64ToArrayBuffer(imageBase64) {
    imageBase64 = imageBase64.replace(/^data:([^;]+);base64,/gmi, '');
    const binaryString = atob(imageBase64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }
  loadImageFromArrayBuffer(arrayBuffer, options, imageType) {
    var _this4 = this;
    return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield new Promise(/*#__PURE__*/function () {
        var _ref = (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          try {
            const blob = new Blob([arrayBuffer], imageType ? {
              type: imageType
            } : undefined);
            const objectUrl = URL.createObjectURL(blob);
            const originalImage = new Image();
            const isSvg = imageType === 'image/svg+xml';
            const originalImageSize = isSvg ? yield _this4.getSvgImageSize(blob) : undefined;
            originalImage.onload = () => resolve({
              originalImage,
              originalImageSize,
              originalObjectUrl: objectUrl,
              originalArrayBuffer: arrayBuffer
            });
            originalImage.onerror = reject;
            originalImage.src = objectUrl;
          } catch (e) {
            reject(e);
          }
        });
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
      return yield _this4.transformImageFromArrayBuffer(res, options, res.originalImageSize != null);
    })();
  }
  getSvgImageSize(blob) {
    return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const parser = new DOMParser();
      const doc = parser.parseFromString(yield blob.text(), 'image/svg+xml');
      const svgElement = doc.querySelector('svg');
      if (!svgElement) {
        throw Error('Failed to parse SVG image');
      }
      const widthAttr = svgElement.getAttribute('width');
      const heightAttr = svgElement.getAttribute('height');
      if (widthAttr && heightAttr) {
        return null;
      }
      const viewBoxAttr = svgElement.getAttribute('viewBox') || svgElement.getAttribute('viewbox');
      if (viewBoxAttr) {
        const viewBox = viewBoxAttr.split(' ');
        return {
          width: +viewBox[2],
          height: +viewBox[3]
        };
      }
      throw Error('Failed to load SVG image. SVG must have width + height or viewBox definition.');
    })();
  }
  transformImageFromArrayBuffer(_x3, _x4) {
    var _this5 = this;
    return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res, options, forceTransform = false) {
      const autoRotate = yield _this5.autoRotateSupported;
      const exifTransform = getTransformationsFromExifData(autoRotate ? -1 : res.originalArrayBuffer);
      if (!res.originalImage || !res.originalImage.complete) {
        return Promise.reject(new Error('No image loaded'));
      }
      const loadedImage = {
        original: {
          objectUrl: res.originalObjectUrl,
          image: res.originalImage,
          size: res.originalImageSize ?? {
            width: res.originalImage.naturalWidth,
            height: res.originalImage.naturalHeight
          }
        },
        exifTransform
      };
      return _this5.transformLoadedImage(loadedImage, options, forceTransform);
    }).apply(this, arguments);
  }
  transformLoadedImage(_x5, _x6) {
    var _this6 = this;
    return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (loadedImage, options, forceTransform = false) {
      const canvasRotation = (options.canvasRotation ?? 0) + loadedImage.exifTransform.rotate;
      const originalSize = loadedImage.original.size;
      if (!forceTransform && canvasRotation === 0 && !loadedImage.exifTransform.flip && !options.containWithinAspectRatio) {
        return {
          original: {
            objectUrl: loadedImage.original.objectUrl,
            image: loadedImage.original.image,
            size: {
              ...originalSize
            }
          },
          transformed: {
            objectUrl: loadedImage.original.objectUrl,
            image: loadedImage.original.image,
            size: {
              ...originalSize
            }
          },
          exifTransform: loadedImage.exifTransform
        };
      }
      const transformedSize = _this6.getTransformedSize(originalSize, loadedImage.exifTransform, options);
      const canvas = document.createElement('canvas');
      canvas.width = transformedSize.width;
      canvas.height = transformedSize.height;
      const ctx = canvas.getContext('2d');
      ctx?.setTransform(loadedImage.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
      ctx?.rotate(Math.PI * (canvasRotation / 2));
      ctx?.drawImage(loadedImage.original.image, -originalSize.width / 2, -originalSize.height / 2);
      const blob = yield new Promise(resolve => canvas.toBlob(resolve, 'image/' + (options.format ?? 'png')));
      if (!blob) {
        throw new Error('Failed to get Blob for transformed image.');
      }
      const objectUrl = URL.createObjectURL(blob);
      const transformedImage = yield _this6.loadImageFromObjectUrl(objectUrl);
      return {
        original: {
          objectUrl: loadedImage.original.objectUrl,
          image: loadedImage.original.image,
          size: {
            ...originalSize
          }
        },
        transformed: {
          objectUrl: objectUrl,
          image: transformedImage,
          size: {
            width: transformedImage.width,
            height: transformedImage.height
          }
        },
        exifTransform: loadedImage.exifTransform
      };
    }).apply(this, arguments);
  }
  loadImageFromObjectUrl(objectUrl) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = objectUrl;
    });
  }
  getTransformedSize(originalSize, exifTransform, options) {
    const canvasRotation = (options.canvasRotation ?? 0) + exifTransform.rotate;
    if (options.containWithinAspectRatio) {
      if (canvasRotation % 2) {
        const minWidthToContain = originalSize.width * (options.aspectRatio ?? 1);
        const minHeightToContain = originalSize.height / (options.aspectRatio ?? 1);
        return {
          width: Math.max(originalSize.height, minWidthToContain),
          height: Math.max(originalSize.width, minHeightToContain)
        };
      } else {
        const minWidthToContain = originalSize.height * (options.aspectRatio ?? 1);
        const minHeightToContain = originalSize.width / (options.aspectRatio ?? 1);
        return {
          width: Math.max(originalSize.width, minWidthToContain),
          height: Math.max(originalSize.height, minHeightToContain)
        };
      }
    }
    if (canvasRotation % 2) {
      return {
        height: originalSize.width,
        width: originalSize.height
      };
    }
    return {
      width: originalSize.width,
      height: originalSize.height
    };
  }
}
function getPositionForKey(key) {
  switch (key) {
    case 'ArrowUp':
      return 'top';
    case 'ArrowRight':
      return 'right';
    case 'ArrowDown':
      return 'bottom';
    case 'ArrowLeft':
    default:
      return 'left';
  }
}
function getInvertedPositionForKey(key) {
  switch (key) {
    case 'ArrowUp':
      return 'bottom';
    case 'ArrowRight':
      return 'left';
    case 'ArrowDown':
      return 'top';
    case 'ArrowLeft':
    default:
      return 'right';
  }
}
function getEventForKey(key, stepSize) {
  switch (key) {
    case 'ArrowUp':
      return {
        clientX: 0,
        clientY: stepSize * -1
      };
    case 'ArrowRight':
      return {
        clientX: stepSize,
        clientY: 0
      };
    case 'ArrowDown':
      return {
        clientX: 0,
        clientY: stepSize
      };
    case 'ArrowLeft':
    default:
      return {
        clientX: stepSize * -1,
        clientY: 0
      };
  }
}
let ImageCropperComponent = /*#__PURE__*/(() => {
  class ImageCropperComponent {
    get alignImageStyle() {
      return this.state.options.alignImage;
    }
    constructor(sanitizer) {
      this.sanitizer = sanitizer;
      this.pinchStart$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      this.cropService = new CropService();
      this.loadImageService = new LoadImageService();
      this.setImageMaxSizeRetries = 0;
      this.resizedWhileHidden = false;
      this.moveTypes = MoveTypes;
      this.state = new CropperState();
      this.safeImgDataUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(undefined);
      this.safeTransformStyle = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(undefined);
      this.marginLeft = '0px';
      this.imageVisible = false;
      this.allowMoveImage = false;
      this.checkImageType = true;
      this.disabled = false;
      this.hidden = false;
      this.imageCropped = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
      this.startCropImage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
      this.imageLoaded = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
      this.cropperReady = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
      this.loadImageFailed = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
      this.transformChange = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
      this.cropperChange = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
      this.reset();
    }
    ngOnInit() {
      this.state.stepSize = this.initialStepSize || this.state.stepSize;
    }
    ngOnChanges(changes) {
      const previousCropperPosition = this.state.cropper();
      const previousTransform = this.state.transform;
      const previousBackgroundColor = this.state.options.backgroundColor;
      this.state.setOptionsFromChanges(changes);
      this.onChangesInputImage(changes);
      if (changes['transform'] && this.transform) {
        this.state.transform = this.transform;
        this.setCssTransform();
      }
      if (!this.state.loadedImage?.transformed.image.complete || !this.state.maxSize) {
        return;
      }
      if (this.containWithinAspectRatio && changes['aspectRatio'] || changes['containWithinAspectRatio'] || changes['canvasRotation']) {
        this.loadImageService.transformLoadedImage(this.state.loadedImage, this.state.options).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
        return;
      }
      if (changes['cropper'] && this.cropper) {
        this.state.cropper.set(checkCropperPosition(this.cropper, this.state, true));
      }
      const cropperChanged = !this.state.equalsCropperPosition(previousCropperPosition);
      if (cropperChanged && (!this.cropper || !this.state.equalsCropperPosition(this.cropper))) {
        this.cropperChange.emit(this.state.cropper());
      }
      if (cropperChanged || !this.state.equalsTransform(previousTransform) || this.state.options.backgroundColor !== previousBackgroundColor) {
        this.doAutoCrop();
      }
      if (changes['hidden'] && this.resizedWhileHidden && !this.hidden) {
        setTimeout(() => {
          this.onResize();
          this.resizedWhileHidden = false;
        });
      }
    }
    onChangesInputImage(changes) {
      if (changes['imageChangedEvent'] || changes['imageURL'] || changes['imageBase64'] || changes['imageFile']) {
        this.reset();
      }
      if (changes['imageChangedEvent'] && this.isValidImageChangedEvent()) {
        this.loadImageFile(this.imageChangedEvent.target.files[0]);
      }
      if (changes['imageURL'] && this.imageURL) {
        this.loadImageFromURL(this.imageURL);
      }
      if (changes['imageBase64'] && this.imageBase64) {
        this.loadBase64Image(this.imageBase64);
      }
      if (changes['imageFile'] && this.imageFile) {
        this.loadImageFile(this.imageFile);
      }
    }
    isValidImageChangedEvent() {
      const files = this.imageChangedEvent?.target?.files;
      return files instanceof FileList && files.length > 0;
    }
    reset() {
      this.state.loadedImage = undefined;
      this.state.maxSize.set({
        width: 0,
        height: 0
      });
      this.imageVisible = false;
    }
    loadImageFile(file) {
      this.loadImageService.loadImageFile(file, this.state.options).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
    }
    loadBase64Image(imageBase64) {
      this.loadImageService.loadBase64Image(imageBase64, this.state.options).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
    }
    loadImageFromURL(url) {
      this.loadImageService.loadImageFromURL(url, this.state.options).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
    }
    setLoadedImage(loadedImage) {
      this.state.loadedImage = loadedImage;
      this.safeImgDataUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(loadedImage.transformed.objectUrl));
    }
    loadImageError(error) {
      console.error(error);
      this.loadImageFailed.emit();
    }
    setCssTransform() {
      const translateUnit = this.state.transform?.translateUnit || '%';
      this.safeTransformStyle.set(this.sanitizer.bypassSecurityTrustStyle(`translate(${this.state.transform.translateH || 0}${translateUnit}, ${this.state.transform.translateV || 0}${translateUnit})` + ' scaleX(' + (this.state.transform.scale || 1) * (this.state.transform.flipH ? -1 : 1) + ')' + ' scaleY(' + (this.state.transform.scale || 1) * (this.state.transform.flipV ? -1 : 1) + ')' + ' rotate(' + (this.state.transform.rotate || 0) + 'deg)'));
    }
    imageLoadedInView() {
      if (this.state.loadedImage != null) {
        this.imageLoaded.emit(this.state.loadedImage);
        this.setImageMaxSizeRetries = 0;
        setTimeout(() => this.checkImageMaxSizeRecursively());
      }
    }
    checkImageMaxSizeRecursively() {
      if (this.setImageMaxSizeRetries > 40) {
        this.loadImageFailed.emit();
      } else if (this.sourceImageLoaded()) {
        this.setMaxSize();
        if (this.cropper && (!this.maintainAspectRatio || this.state.aspectRatioIsCorrect())) {
          this.state.cropper.set(checkCropperPosition(this.cropper, this.state, true));
          this.emitCropperPositionChange(this.cropper);
        } else {
          this.state.cropper.set(checkCropperPosition(this.state.maxSizeCropperPosition(), this.state, true));
          this.cropperChange.emit(this.state.cropper());
        }
        this.imageVisible = true;
        this.cropperReady.emit(this.state.maxSize());
        this.doAutoCrop();
      } else {
        this.setImageMaxSizeRetries++;
        setTimeout(() => this.checkImageMaxSizeRecursively(), 50);
      }
    }
    sourceImageLoaded() {
      return this.sourceImage?.nativeElement?.offsetWidth > 1;
    }
    onResize() {
      if (!this.state.loadedImage) {
        return;
      }
      if (this.hidden) {
        this.resizedWhileHidden = true;
      } else {
        const oldMaxSize = this.state.maxSize();
        this.setMaxSize();
        this.state.resizeCropperPosition(oldMaxSize);
      }
    }
    keyboardAccess(event) {
      this.changeKeyboardStepSize(event);
      this.keyboardMoveCropper(event);
    }
    changeKeyboardStepSize(event) {
      const key = +event.key;
      if (key >= 1 && key <= 9) {
        this.state.stepSize = key;
      }
    }
    keyboardMoveCropper(event) {
      const keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
      if (!keyboardWhiteList.includes(event.key)) {
        return;
      }
      const moveType = event.shiftKey ? MoveTypes.Resize : MoveTypes.Move;
      const position = event.altKey ? getInvertedPositionForKey(event.key) : getPositionForKey(event.key);
      const moveEvent = getEventForKey(event.key, this.state.stepSize);
      event.preventDefault();
      event.stopPropagation();
      this.moveStart = {
        type: moveType,
        position,
        clientX: 0,
        clientY: 0,
        transform: this.state.transform,
        cropper: this.state.cropper()
      };
      this.handleMouseMove(moveEvent);
      this.handleMouseUp();
    }
    startMove(event, moveType, position = null) {
      if (this.disabled || this.moveStart && this.moveStart.type === MoveTypes.Pinch || moveType === MoveTypes.Drag && !this.allowMoveImage) {
        return;
      }
      if ('preventDefault' in event) {
        event.preventDefault();
      }
      this.moveStart = {
        type: moveType,
        position,
        clientX: getClientX(event),
        clientY: getClientY(event),
        transform: this.state.transform,
        cropper: this.state.cropper()
      };
      this.initMouseMove();
    }
    initMouseMove() {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(document, 'mousemove'), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(document, 'touchmove')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(document, 'mouseup'), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(document, 'touchend'), this.pinchStart$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)()))).subscribe({
        next: event => this.handleMouseMove(event),
        complete: () => this.handleMouseUp()
      });
    }
    handleMouseMove(event) {
      if (!this.moveStart) {
        return;
      }
      if ('stopPropagation' in event) {
        event.stopPropagation();
      }
      if ('preventDefault' in event) {
        event.preventDefault();
      }
      if (this.moveStart.type === MoveTypes.Move) {
        this.state.cropper.set(checkCropperWithinMaxSizeBounds(moveCropper(event, this.moveStart), this.state, true));
      } else if (this.moveStart.type === MoveTypes.Resize) {
        if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
          this.state.cropper.set(checkCropperWithinMaxSizeBounds(resizeCropper(event, this.moveStart, this.state), this.state, false));
        }
      } else if (this.moveStart.type === MoveTypes.Drag) {
        const diffX = getClientX(event) - this.moveStart.clientX;
        const diffY = getClientY(event) - this.moveStart.clientY;
        this.state.transform = {
          ...this.state.transform,
          translateH: (this.moveStart.transform?.translateH || 0) + diffX,
          translateV: (this.moveStart.transform?.translateV || 0) + diffY
        };
        this.setCssTransform();
      }
    }
    handleMouseUp() {
      if (!this.moveStart || this.moveStart.type === MoveTypes.Pinch) {
        return;
      }
      if (!this.state.equalsCropperPosition(this.moveStart.cropper) || this.moveStart.transform && !this.state.equalsTransform(this.moveStart.transform)) {
        if (this.moveStart.type === MoveTypes.Drag) {
          this.transformChange.emit(this.state.transform);
        } else {
          this.cropperChange.emit(this.state.cropper());
        }
        this.doAutoCrop();
      }
      this.moveStart = undefined;
    }
    startPinch(event) {
      if (this.disabled || !this.sourceImageLoaded() || event.touches.length < 2) {
        return;
      }
      if ('preventDefault' in event) {
        event.preventDefault();
      }
      const cropper = this.state.cropper();
      this.moveStart = {
        type: MoveTypes.Pinch,
        position: 'center',
        clientX: cropper.x1 + (cropper.x2 - cropper.x1) / 2,
        clientY: cropper.y1 + (cropper.y2 - cropper.y1) / 2,
        cropper: cropper
      };
      this.initPinch();
    }
    initPinch() {
      this.pinchStart$.next();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(document, 'touchmove').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(document, 'touchend'))).subscribe({
        next: event => this.handlePinchMove(event),
        complete: () => this.handlePinchStop()
      });
    }
    handlePinchMove(event) {
      if (!this.moveStart) {
        return;
      }
      if (event.preventDefault) {
        event.preventDefault();
      }
      if (this.moveStart.type === MoveTypes.Pinch) {
        if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
          this.state.cropper.set(checkCropperWithinMaxSizeBounds(resizeCropper(event, this.moveStart, this.state), this.state, false));
        }
      }
    }
    handlePinchStop() {
      if (!this.moveStart) {
        return;
      }
      if (!this.state.equalsCropperPosition(this.moveStart.cropper)) {
        this.emitCropperPositionChange(this.moveStart.cropper);
        this.doAutoCrop();
      }
      this.moveStart = undefined;
    }
    setMaxSize() {
      if (this.sourceImage) {
        const sourceImageStyle = getComputedStyle(this.sourceImage.nativeElement);
        this.state.setMaxSize(parseFloat(sourceImageStyle.width), parseFloat(sourceImageStyle.height));
        this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.state.maxSize().width / 2 + 'px)');
      }
    }
    emitCropperPositionChange(previousPosition) {
      if (!this.state.equalsCropperPosition(previousPosition)) {
        this.cropperChange.emit(this.state.cropper());
      }
    }
    doAutoCrop() {
      if (this.state.options.autoCrop) {
        void this.crop();
      }
    }
    crop(output = this.state.options.output) {
      if (this.state.loadedImage?.transformed?.image != null) {
        this.startCropImage.emit();
        if (output === 'blob') {
          return this.cropToBlob();
        } else if (output === 'base64') {
          return this.cropToBase64();
        }
      }
      return null;
    }
    cropToBlob() {
      var _this7 = this;
      return new Promise(/*#__PURE__*/function () {
        var _ref2 = (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          const result = yield _this7.cropService.crop(_this7.state.toCropInput(), 'blob');
          if (result) {
            _this7.imageCropped.emit(result);
            resolve(result);
          } else {
            reject('Crop image failed');
          }
        });
        return function (_x7, _x8) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
    cropToBase64() {
      const result = this.cropService.crop(this.state.toCropInput(), 'base64');
      if (result) {
        this.imageCropped.emit(result);
        return result;
      }
      return null;
    }
    resetCropperPosition() {
      this.state.cropper.set(checkCropperPosition(this.state.maxSizeCropperPosition(), this.state, true));
      this.cropperChange.emit(this.state.cropper());
    }
    ngOnDestroy() {
      this.pinchStart$.complete();
    }
    static {
      this.ɵfac = function ImageCropperComponent_Factory(t) {
        return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ImageCropperComponent,
        selectors: [["image-cropper"]],
        viewQuery: function ImageCropperComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sourceImage = _t.first);
          }
        },
        hostVars: 6,
        hostBindings: function ImageCropperComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function ImageCropperComponent_resize_HostBindingHandler() {
              return ctx.onResize();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("text-align", ctx.alignImageStyle);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.disabled)("ngx-ic-hidden", ctx.hidden);
          }
        },
        inputs: {
          imageChangedEvent: "imageChangedEvent",
          imageURL: "imageURL",
          imageBase64: "imageBase64",
          imageFile: "imageFile",
          imageAltText: "imageAltText",
          options: "options",
          cropperFrameAriaLabel: "cropperFrameAriaLabel",
          output: "output",
          format: "format",
          autoCrop: "autoCrop",
          cropper: "cropper",
          transform: "transform",
          maintainAspectRatio: "maintainAspectRatio",
          aspectRatio: "aspectRatio",
          resetCropOnAspectRatioChange: "resetCropOnAspectRatioChange",
          resizeToWidth: "resizeToWidth",
          resizeToHeight: "resizeToHeight",
          cropperMinWidth: "cropperMinWidth",
          cropperMinHeight: "cropperMinHeight",
          cropperMaxHeight: "cropperMaxHeight",
          cropperMaxWidth: "cropperMaxWidth",
          cropperStaticWidth: "cropperStaticWidth",
          cropperStaticHeight: "cropperStaticHeight",
          canvasRotation: "canvasRotation",
          initialStepSize: "initialStepSize",
          roundCropper: "roundCropper",
          onlyScaleDown: "onlyScaleDown",
          imageQuality: "imageQuality",
          backgroundColor: "backgroundColor",
          containWithinAspectRatio: "containWithinAspectRatio",
          hideResizeSquares: "hideResizeSquares",
          allowMoveImage: "allowMoveImage",
          checkImageType: "checkImageType",
          alignImage: "alignImage",
          disabled: "disabled",
          hidden: "hidden"
        },
        outputs: {
          imageCropped: "imageCropped",
          startCropImage: "startCropImage",
          imageLoaded: "imageLoaded",
          cropperReady: "cropperReady",
          loadImageFailed: "loadImageFailed",
          transformChange: "transformChange",
          cropperChange: "cropperChange"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 4,
        vars: 10,
        consts: [["sourceImage", ""], [3, "touchstart"], ["class", "ngx-ic-source-image", "role", "presentation", 3, "src", "visibility", "transform", "ngx-ic-draggable", "load", "mousedown", "touchstart", "error", 4, "ngIf"], [1, "ngx-ic-overlay"], ["class", "ngx-ic-cropper", "tabindex", "0", 3, "ngx-ic-round", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], ["role", "presentation", 1, "ngx-ic-source-image", 3, "load", "mousedown", "touchstart", "error", "src"], ["tabindex", "0", 1, "ngx-ic-cropper", 3, "keydown"], ["role", "presentation", 1, "ngx-ic-move", 3, "mousedown", "touchstart"], [4, "ngIf"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-topleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-square"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-topright", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-bottomright", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-bottomleft", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-top", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-top", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-right", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-right", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-bottom", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-bottom", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-left", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-left", 3, "mousedown", "touchstart"]],
        template: function ImageCropperComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("touchstart", function ImageCropperComponent_Template_div_touchstart_0_listener($event) {
              return ctx.startPinch($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ImageCropperComponent_img_1_Template, 2, 8, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ImageCropperComponent_div_3_Template, 3, 16, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.imageVisible && ctx.state.options.backgroundColor);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.safeImgDataUrl());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.state.maxSize().width || 0, "px")("height", ctx.state.maxSize().height || 0, "px")("margin-left", ctx.state.options.alignImage === "center" ? ctx.marginLeft : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageVisible);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
        styles: ["[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image[_ngcontent-%COMP%]{display:inline;max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image.ngx-ic-draggable[_ngcontent-%COMP%]{user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:grab}[_nghost-%COMP%]   .ngx-ic-overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color, white) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:var(--cropper-color, #53535C);background:transparent;outline:var(--cropper-outline-color, rgba(255, 255, 255, .3)) solid 100vw;touch-action:none}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{outline-width:100vh}}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:after{position:absolute;content:\"\";inset:0;pointer-events:none;border:dashed 1px;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{width:100%;cursor:move;border:var(--cropper-border, 1px solid rgba(255, 255, 255, .5))}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:hover   .ngx-ic-move[_ngcontent-%COMP%]{border:var(--cropper-hover-border, var(--cropper-border, 1px solid rgba(255, 255, 255, .5)))}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:focus   .ngx-ic-move[_ngcontent-%COMP%]{border:var(--cropper-focus-border, 2px solid dodgerblue)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:focus   .ngx-ic-resize[_ngcontent-%COMP%]   .ngx-ic-square[_ngcontent-%COMP%]{background:var(--cropper-resize-square-focus-bg, var(--cropper-resize-square-bg, #53535C));border:var(--cropper-resize-square-focus-border, var(--cropper-resize-square-border, 1px solid rgba(255, 255, 255, .5)))}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]   .ngx-ic-square[_ngcontent-%COMP%]{display:inline-block;width:6px;height:6px;box-sizing:content-box;background:var(--cropper-resize-square-bg, #53535C);border:var(--cropper-resize-square-border, 1px solid rgba(255, 255, 255, .5))}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]:hover   .ngx-ic-square[_ngcontent-%COMP%]{background:var(--cropper-resize-square-hover-bg, var(--cropper-resize-square-bg, #53535C));border:var(--cropper-resize-square-hover-border, var(--cropper-resize-square-border, 1px solid rgba(255, 255, 255, .5)))}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw var(--cropper-outline-color, rgba(255, 255, 255, .3))}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh var(--cropper-outline-color, rgba(255, 255, 255, .3))}}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{display:none}.ngx-ic-hidden[_nghost-%COMP%]{display:none}"],
        changeDetection: 0
      });
    }
  }
  return ImageCropperComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function base64ToFile(base64Image) {
  const split = base64Image.split(',');
  const type = split[0].replace('data:', '').replace(';base64', '');
  const byteString = atob(split[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], {
    type
  });
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-image-cropper.mjs.map

/***/ }),

/***/ 6125:
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/package.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"tesseract.js","version":"4.1.4","description":"Pure Javascript Multilingual OCR","main":"src/index.js","types":"src/index.d.ts","unpkg":"dist/tesseract.min.js","jsdelivr":"dist/tesseract.min.js","scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json","prepublishOnly":"npm run build","wait":"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html","lint":"eslint src","lint:fix":"eslint --fix src","postinstall":"opencollective-postinstall || true"},"browser":{"./src/worker/node/index.js":"./src/worker/browser/index.js"},"author":"","contributors":["jeromewu"],"license":"Apache-2.0","devDependencies":{"@babel/core":"^7.21.4","@babel/eslint-parser":"^7.21.3","@babel/preset-env":"^7.21.4","@rollup/plugin-commonjs":"^24.1.0","acorn":"^8.8.2","babel-loader":"^9.1.2","buffer":"^6.0.3","cors":"^2.8.5","eslint":"^7.32.0","eslint-config-airbnb-base":"^14.2.1","eslint-plugin-import":"^2.27.5","expect.js":"^0.3.1","express":"^4.18.2","mocha":"^10.2.0","mocha-headless-chrome":"^4.0.0","npm-run-all":"^4.1.5","nyc":"^15.1.0","rimraf":"^5.0.0","rollup":"^3.20.7","wait-on":"^7.0.1","webpack":"^5.79.0","webpack-bundle-analyzer":"^4.8.0","webpack-cli":"^5.0.1","webpack-dev-middleware":"^6.0.2","rollup-plugin-sourcemaps":"^0.6.3"},"dependencies":{"bmp-js":"^0.1.0","idb-keyval":"^6.2.0","is-electron":"^2.2.2","is-url":"^1.2.4","node-fetch":"^2.6.9","opencollective-postinstall":"^2.0.3","regenerator-runtime":"^0.13.3","tesseract.js-core":"^4.0.4","wasm-feature-detect":"^1.2.11","zlibjs":"^0.3.1"},"overrides":{"@rollup/pluginutils":"^5.0.2"},"repository":{"type":"git","url":"https://github.com/naptha/tesseract.js.git"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"homepage":"https://github.com/naptha/tesseract.js","collective":{"type":"opencollective","url":"https://opencollective.com/tesseractjs"}}');

/***/ })

}]);