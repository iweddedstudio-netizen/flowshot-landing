# FlowShot Landing Page — Remediation Tasks

**Directory:** `/Users/alex/Documents/FlowShot/Landos/landing/`
**Tech Stack:** Next.js 14 + React 18 + Tailwind CSS 3 + Framer Motion + Shadcn/ui
**Goal:** Довести каждый аспект лендинга до 10/10 — конверсия, копирайтинг, структура, дизайн.

**Контекст продукта:**
- Стадия: ждём одобрения платёжной системы (pre-launch, waitlist)
- Social proof: нет отзывов, нет метрик
- Demo-видео: нет, но будет записано позже
- Структуру секций можно менять (удалять, объединять, реорганизовывать)

---

## TASK-01: Hero Section — Переписать заголовок и CTA

**Файлы:** `src/components/sections/Hero.tsx`, `src/components/modals/WaitlistModal.tsx`

**Проблема:**
- Заголовок "The operating system for wedding filmmakers" — слишком узкий (отсекает commercial/photo studios) и абстрактный (метафора "OS" непонятна при первом контакте)
- CTA "Try FlowShot free" ведёт на waitlist-модалку — разрыв ожиданий убивает доверие
- Нет конкретной ценности в подзаголовке — "everything's pre-configured" не объясняет что именно делает продукт

**Что сделать:**

1. **Заголовок (H1):** Переписать — должен содержать конкретную ценность, покрывать photo + video, не использовать абстрактные метафоры. Ориентир стиля: "Manage every shoot from brief to delivery" или "One workspace for your entire production — projects, team, clients, reviews". Сохранить italic amber-акцент на ключевом слове.

2. **Подзаголовок:** Переписать — перечислить 3-4 конкретных вещи, которые заменяет FlowShot: "Replace scattered chats, spreadsheets, and cloud folders with one platform. Projects, crew scheduling, client questionnaires, video review, and delivery — all connected." 

3. **CTA кнопка:** Изменить текст на честный — "Join the Waitlist" или "Get Early Access". После одобрения платёжной системы текст будет заменён на "Start Free Trial".

4. **Waitlist модалка:** Обновить копирайтинг — добавить конкретику о том, что получат ранние пользователи (early pricing, priority onboarding, etc.)

5. **Tagline над заголовком:** Расширить с "For wedding & commercial studios" на что-то типа "For photo & video studios, solo creators, and freelancers" — чтобы покрыть всю целевую аудиторию.

**Не трогать:** Визуальный дизайн hero (фон, overlays, grain, off-grid "26", анимации, мокап). Только текстовый контент.

---

## TASK-02: Убрать Marquee секцию

**Файлы:** `src/components/sections/Marquee.tsx`, `src/app/page.tsx`

**Проблема:**
Бегущая строка с "wedding films · commercial shoots · music videos" — чистая декорация. Не несёт информационной нагрузки, не убеждает, не конвертирует. Занимает экранное пространство и разрывает связь между Hero и Problem секцией.

**Что сделать:**

1. Удалить `<Marquee />` из `page.tsx`
2. Файл `Marquee.tsx` можно удалить или оставить (на усмотрение)
3. Убедиться, что spacing между Hero и следующей секцией корректный после удаления

---

## TASK-03: Problem Section — Переписать на niche-specific боли

**Файлы:** `src/components/sections/ProblemSolution.tsx`

**Проблема:**
Текущие боли generic — "Lost in chats", "Spreadsheets everywhere", "Templates that never fit", "Endless setup". Это описание любого project management tool. Нет специфики видео/фотопродакшена.

**Что сделать:**

Переписать 4 pain-point карточки на **реальные боли** из индустрии видео/фотопродакшена:

1. **"Client revisions scattered everywhere"** (MessageSquare icon) — "Feedback split between WhatsApp, email, and Dropbox comments. By the time you find the right thread — the deadline has passed."

2. **"Shooting day chaos"** (Calendar icon) — "The crew arrives and nobody knows the timeline. Locations, contacts, and shot lists are buried in different apps."

3. **"Manual folder creation for every project"** (FolderOpen icon) — "Google Drive, Dropbox — new project means new folders, same structure, copy-paste, rename. Every. Single. Time."

4. **"No single place for the full picture"** (Layout icon) — "Project details in one app, chat in another, files in a third. Nothing connects — and things fall through the cracks."

Сохранить визуальный дизайн карточек (amber borders, numbering, stagger layout). Обновить заголовок секции — вместо "We know the pain — so we built FlowShot" что-то более direct: "Sound familiar?" или "The tools weren't built for us."

---

## TASK-04: Объединить 3 фичерных секции в одну мощную

**Файлы:** `src/components/sections/ProjectJourney.tsx`, `src/components/sections/StandoutFeatures.tsx`, `src/components/sections/FeaturesAndExperience.tsx`, `src/app/page.tsx`

**Проблема:**
Три отдельных секции про фичи (Journey, StandoutFeatures, FeaturesAndExperience) — избыточно. К третьей секции пользователь уже не помнит что было в первой. Нет "aha-moment" — ни один блок не показывает USP.

**Что сделать:**

Создать **одну** новую секцию `Features.tsx` (или переработать одну из существующих), которая покрывает ключевые фичи продукта в формате **tabs или cards**. Структура:

### Категории фич (6-8 карточек или табов):

1. **Cloud Folder Sync** (NEW — не было на лендинге!)
   - Icon: Cloud/FolderSync
   - Title: "Auto-create project folders"
   - Copy: "Connect Google Drive or Dropbox once. Every new project automatically gets a folder with your custom structure — subfolders for RAW, edits, delivery, and more. No more copy-paste-rename."
   - Highlight: "Works with Google Drive & Dropbox"

2. **Client Questionnaires** (NEW — не было на лендинге!)
   - Icon: ClipboardList
   - Title: "Branded questionnaires"
   - Copy: "Send beautiful, branded questionnaires to clients before the shoot. Wedding timelines, style preferences, shot lists — collected in one place. 5 industry templates included. Drag-and-drop builder for custom forms."
   - Highlight: "5 preset templates: Wedding, Corporate, Real Estate, Portrait, Product"

3. **Video Review** (было упомянуто поверхностно — расширить)
   - Icon: PlayCircle
   - Title: "Frame-accurate video review"
   - Copy: "Upload drafts, draw directly on frames, leave timestamped annotations. Your team and clients review in one place — no more 'at around 2 minutes, the color looks off' messages."
   - Highlight: "Drawing tools, @mentions, multi-version comparison"

4. **Delivery Page** (было упомянуто поверхностно — расширить)
   - Icon: Share2
   - Title: "Cinematic delivery experience"
   - Copy: "Deliver final films and galleries through a branded page with password protection, download controls, and expiration dates. Cover page with your branding, tab navigation, photo collections."
   - Highlight: "Password-protected, branded, with analytics"

5. **Project Management** (переработать из Journey)
   - Icon: Kanban/Layout
   - Title: "Visual project board"
   - Copy: "Kanban board built for production. Drag projects through your pipeline — from inquiry to delivery. Photo, video, or linked projects. Custom fields, priorities, crew assignments."
   - Highlight: "Linked photo + video projects"

6. **Team Collaboration** (переработать из Features)
   - Icon: Users
   - Title: "Your whole crew, one workspace"
   - Copy: "Invite editors, shooters, assistants with granular roles. Project chat keeps discussions in context. Calendar view with smart notifications for every deadline."
   - Highlight: "7 roles, project-based chat, calendar sync"

7. **Preset Library** (переработать из Journey)
   - Icon: Package
   - Title: "Offer presets — no setup"
   - Copy: "Pre-configured packages, add-ons, and deliverables. Select a preset when creating a project — pricing, deliverables, and timeline auto-fill. Customize once, reuse forever."

8. **Brand Kit** (переработать из Features)
   - Icon: Palette
   - Title: "Brand kit for your team"
   - Copy: "Save style guides, color palettes, asset links, and brand rules. Editors and shooters stay aligned without asking 'what font do we use?' every time."

### Визуальный формат:
- Рекомендуется: **табы** (Tabs компонент) или **bento grid** layout
- Каждая фича: иконка + заголовок + 2-3 предложения + highlight badge
- Cloud Folder Sync и Questionnaires выделить визуально (NEW badge или amber border) — это фичи, которых нет у конкурентов
- Сохранить тёмную тему с amber акцентами
- После фич — один большой скриншот продукта (Screenshot_2.png) как уже есть

### Удалить:
- `ProjectJourney.tsx` — убрать из `page.tsx`
- `StandoutFeatures.tsx` — убрать из `page.tsx` 
- `FeaturesAndExperience.tsx` — убрать из `page.tsx`
- Файлы можно оставить в проекте (не удалять физически), просто не рендерить

---

## TASK-05: Founder Story — Добавить конкретику и trust signals

**Файлы:** `src/components/sections/FounderStory.tsx`

**Проблема:**
Секция хорошая, но "After 10 years in the industry..." слишком обтекаемо. Нет деталей, которые создают подлинность и доверие. Нет конкретного момента "почему я это создал".

**Что сделать:**

1. **Blockquote:** Переписать на более конкретный — вместо "Creative people need tools made by creatives — not by tech companies" что-то типа: "I spent 10 years editing wedding films and managing projects in WhatsApp groups and Google Sheets. Every tool I tried was built for tech companies, not for us. So I built the one I always wanted."

2. **Body text:** Добавить 1-2 конкретных детали — "After editing 3,000+ weddings across [city/country], I knew exactly what a production workspace should look like. FlowShot is that workspace — built from real experience, not assumptions."

3. **Stats:** Обновить если есть новые цифры. Текущие (10+ years, 3000+ weddings, Built by creators) — ок, но "Built by creators" — слабый третий stat. Заменить на что-то вроде "100% Self-funded" или "Solo founder" — что угодно конкретное.

4. **Добавить social proof placeholder:** Под stats добавить блок "As seen in" или "Trusted by" — пока с текстом "Beta program opening soon — [Join the waitlist]". Это создаёт ощущение эксклюзивности.

**Не трогать:** Визуальный дизайн (cream background, фото, floating badge, стиль).

---

## TASK-06: Pricing — Добавить waitlist-state и улучшить messaging

**Файлы:** `src/components/sections/PricingTeaser.tsx`

**Проблема:**
- Pricing показывает конкретные цены и CTA "Try for free", но подписку купить нельзя (waitlist)
- "Client Portal — COMING SOON" в списке фич — продаём то, чего нет
- Нет бесплатного тира — для нового SaaS это проблема adoption

**Что сделать:**

1. **Waitlist state:** Вместо конкретных цен показать "Early Access Pricing" с пометкой "Final pricing will be announced at launch". Или оставить цены, но изменить CTA на карточках с "Try for free" → "Join Waitlist" / "Get Early Access".

2. **COMING SOON фичи:** Убрать "Client Portal" из списка фич в pricing, либо не помечать как "coming soon" а просто не включать. Фичи в pricing должны быть те, которые уже работают.

3. **Early adopter incentive:** Добавить баннер над/под pricing: "Early adopters get [X months free / locked-in pricing / priority onboarding]" — конкретный стимул записаться в waitlist.

4. **Trial note:** Обновить "14-day free trial on all plans" на что-то адекватное текущей стадии: "All early access users start with a free extended trial."

**Не трогать:** Визуальный дизайн карточек, структуру тиров, toggle monthly/yearly.

---

## TASK-07: FAQ — Расширить и переписать

**Файлы:** `src/components/sections/FAQ.tsx`

**Проблема:**
5 FAQ слишком мало, ответы поверхностные. "What happens if we cancel? — You can export your data anytime." — одно предложение, не снимает тревогу. Нет вопросов про ключевые фичи (cloud sync, questionnaires, delivery).

**Что сделать:**

Расширить до **8-10 вопросов**, разбить на категории. Каждый ответ — 2-4 предложения:

### Product:
1. **"What makes FlowShot different from Trello, Asana, or Monday?"**
   — "FlowShot is built specifically for photo and video production. Unlike generic project tools, it has built-in video review with drawing tools, client questionnaires, branded delivery pages, automatic Google Drive/Dropbox folder creation, and a preset library designed for shoots — not sprints."

2. **"Can FlowShot handle both photo and video projects?"**
   — "Yes. Every project supports photo, video, or both. You can link photo and video projects together, and they'll share the same cloud folder, client info, and timeline. Crew assignments, packages, and deliverables are format-specific."

3. **"How does the Google Drive / Dropbox integration work?"**
   — "Connect your account once in Settings. When you create a new project, FlowShot automatically creates a folder with your custom subfolder structure (e.g., RAW, Edited, Delivery). You can customize the folder name template and subfolders per provider."

4. **"Can I send questionnaires to my clients?"**
   — "Yes. FlowShot includes a drag-and-drop questionnaire builder with 5 industry templates (Wedding, Corporate, Real Estate, Portrait, Product). Send branded questionnaires via email, track responses, and send reminders — all from the project drawer."

### Team:
5. **"How do I invite freelancers and crew members?"**
   — (Переписать текущий ответ) "Send email invitations with specific roles — Owner, Co-Owner, Videographer, Video Editor, Photographer, Photo Editor, or Assistant. Each role sees only what's relevant. Freelancers join your workspace instantly via invite link."

6. **"Is there a limit on team members?"**
   — "Each plan includes a set number of seats (1 on Starter, 3 on Pro, 10 on Business). Seats are per organization. You can manage multiple organizations on Pro and Business plans."

### Billing & Data:
7. **"Is my data secure?"**
   — "FlowShot runs on Google Cloud (Firebase) with end-to-end encryption, multi-tenant data isolation, and strict security rules. Your data is scoped to your organization — no one outside your team can access it."

8. **"What happens if I cancel my subscription?"**
   — "You can export your project data anytime. After cancellation, your account switches to read-only mode for 30 days, then data is archived. Cloud storage folders (Google Drive/Dropbox) are yours and are never deleted."

9. **"Do you offer a free plan?"**
   — "We offer an extended free trial for early access users. After launch, all plans include a 14-day free trial. No credit card required to start."

10. **"Can I switch plans later?"**
    — "Yes, you can upgrade or downgrade anytime. Changes take effect at the start of your next billing cycle. No penalty for switching."

---

## TASK-08: Final CTA — Усилить и добавить urgency

**Файлы:** `src/components/sections/FinalCTA.tsx`

**Проблема:**
Текущий CTA "Start your FlowShot today" + "Try for free" — не работает для waitlist-стадии. Trust badges ("Cancel anytime · Export data") хорошие, но недостаточно для финального push.

**Что сделать:**

1. **Заголовок:** Изменить на что-то с urgency для waitlist: "Be the first to try FlowShot" или "Join the early access — limited spots."

2. **Подзаголовок:** Добавить конкретную выгоду раннего доступа: "Early adopters get extended free trial and locked-in pricing. No credit card required."

3. **CTA кнопка:** "Get Early Access" (не "Try for free")

4. **Social proof counter (опционально):** Добавить строку "X creators already on the waitlist" — даже если число небольшое, это создаёт momentum. Если данных нет — пропустить.

5. **Trust badges:** Оставить "Cancel anytime · Export data", добавить "Built on Google Cloud" (если уместно).

**Не трогать:** Footer structure, визуальный дизайн (amber vignette, grain, анимации).

---

## TASK-09: Navbar — Обновить навигацию под новую структуру

**Файлы:** `src/components/Navbar.tsx`, `src/app/page.tsx`

**Проблема:**
После реструктуризации секций (удаление Marquee, объединение 3 фичерных секций) anchor links в навбаре станут невалидными. Также CTA в навбаре говорит "Try for free" — нужно обновить.

**Что сделать:**

1. **Обновить nav links** под новую структуру секций:
   - "Features" → `#features` (новая объединённая секция)
   - "Pricing" → `#pricing` (без изменений)
   - "Our Story" → `#story` (без изменений)
   - "FAQ" → `#faq` (без изменений)

2. **CTA кнопка в навбаре:** "Try for free" → "Get Early Access"

3. **Убедиться**, что мобильное меню тоже обновлено (те же ссылки)

**Зависимость:** Выполнять после TASK-02 (удаление Marquee) и TASK-04 (объединение фич секций), чтобы anchor IDs совпадали.

---

## TASK-10: SEO — Обновить метаданные и structured data

**Файлы:** `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/sitemap.ts`

**Проблема:**
- Keywords слишком generic
- Title не отражает полный спектр продукта
- Structured data показывает "price: 0, Free during beta" — неактуально

**Что сделать:**

1. **Title:** "FlowShot — Project Management for Photo & Video Studios" (шире, чем текущий)

2. **Description:** Переписать с конкретными фичами: "All-in-one workspace for photo and video production teams. Kanban project board, video review with annotations, client questionnaires, branded delivery pages, Google Drive & Dropbox sync. Built by creators, for creators."

3. **Keywords:** Добавить long-tail:
   - "wedding videography project management"
   - "video review tool for filmmakers"
   - "client questionnaire for photographers"
   - "delivery page for video production"
   - "google drive automation for studios"
   - "photo video studio management software"

4. **Structured data (JSON-LD):** Обновить offers section — убрать "Free during beta", добавить "Free trial available" или "Starting from $25/month".

5. **OG Description:** Sync с новым description.

---

## TASK-11: Cream Section — Переработать "Who It's For"

**Файлы:** Новый файл `src/components/sections/Audience.tsx` или интегрировать в существующую секцию

**Проблема:**
После удаления FeaturesAndExperience (TASK-04) пропадает cream-секция с "Who It's For" (Studios, Solo Creators, Freelancers). Этот блок важен — он показывает, что продукт подходит разным сегментам аудитории. Также пропадает визуальный контраст (cream break от тёмного фона).

**Что сделать:**

1. **Создать отдельную секцию `Audience.tsx`** (или назвать `WhoItsFor.tsx`) на cream background
2. **Разместить между Features и Founder Story** в `page.tsx`
3. **Три карточки** (сохранить текущий дизайн с фото и sepia-фильтром):
   - **Studios** — "Multi-member teams managing 50+ projects a year. FlowShot replaces your project spreadsheet, client forms, and file sharing setup."
   - **Solo Creators** — "One-person setup covering everything from shoot to delivery. All your tools in one place — no juggling 5 apps."  
   - **Freelancers** — "Work with different teams on different projects. FlowShot keeps each collaboration organized without the chaos."

4. **Сохранить визуальный стиль:** Cream background (#F5F1EA), warm sepia filter на фото, amber accent bars, staggered layout. Можно добавить pull-quote из текущей FeaturesAndExperience.

**Зависимость:** Выполнять после TASK-04 (чтобы понимать финальную структуру).

---

## TASK-12: Mobile Responsiveness — Аудит и исправления

**Файлы:** Все секции — `src/components/sections/*.tsx`, `src/components/Navbar.tsx`

**Проблема:**
После всех изменений (новые секции, удалённые секции, новый контент) нужно убедиться, что мобильная версия работает корректно. Также текущие проблемы: слишком много скроллинга, Hero может быть проблемой на маленьких экранах.

**Что сделать:**

1. **Hero на мобильных:** Убедиться, что заголовок читаем на 375px ширине, CTA кнопка видна без скролла, мокап не обрезается критично
2. **Features секция (новая):** Tabs/cards должны корректно переключаться на мобильных, текст не обрезается
3. **Audience секция:** Карточки stack вертикально, фото масштабируются
4. **Founder Story:** Фото не скрывается на мобильных (или грамотно скрывается)
5. **Pricing:** Карточки stack вертикально, все фичи видны
6. **FAQ:** Accordion работает корректно на тач-устройствах
7. **Navbar:** Мобильное меню корректно открывается/закрывается с обновлёнными links
8. **Общий spacing:** После удаления секций проверить, что отступы между оставшимися секциями равномерные

**Зависимость:** Выполнять ПОСЛЕДНЕЙ — после всех остальных задач.

---

## Порядок выполнения

```
TASK-02 (удалить Marquee) — независимая, быстрая
TASK-03 (Problem Section) — независимая
TASK-05 (Founder Story) — независимая
TASK-07 (FAQ) — независимая
TASK-10 (SEO) — независимая

TASK-01 (Hero) → нужна перед TASK-09
TASK-04 (Features merge) → нужна перед TASK-09 и TASK-11
TASK-06 (Pricing) — независимая
TASK-08 (Final CTA) — независимая

TASK-11 (Audience/Who It's For) → после TASK-04
TASK-09 (Navbar) → после TASK-01, TASK-02, TASK-04

TASK-12 (Mobile audit) → ПОСЛЕДНЯЯ, после всех
```

### Параллельные группы:
- **Группа 1 (параллельно):** TASK-02, TASK-03, TASK-05, TASK-06, TASK-07, TASK-08, TASK-10
- **Группа 2 (параллельно):** TASK-01, TASK-04
- **Группа 3 (после группы 2):** TASK-09, TASK-11
- **Группа 4 (финал):** TASK-12
