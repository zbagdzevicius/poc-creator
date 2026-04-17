# User Stories: Analytics Dashboard

## Epic 1: Main Dashboard

### US-1.1: View KPI Cards
**As a** SaaS product manager,
**I want to** see key business metrics (Total Revenue, Active Subscribers, MRR, Refund Rate) as cards at the top of the dashboard,
**so that** I can assess business health at a glance within seconds.

**Acceptance Criteria:**
- 4 KPI cards displayed in a horizontal row on desktop, stacked 2x2 on mobile
- Each card shows: metric label, current value, percentage change vs previous period
- Positive change shown in green with up arrow, negative in red with down arrow
- Active Subscribers card includes a small sparkline trend line
- Values are formatted with proper currency/number formatting (e.g., $24,780, 1,245)

### US-1.2: View Revenue Over Time Chart
**As a** finance team member,
**I want to** see a line/area chart of revenue over the last 12 months,
**so that** I can identify revenue trends and seasonality.

**Acceptance Criteria:**
- Area chart with filled gradient under the line
- X-axis: months (Jan–Dec), Y-axis: revenue in dollars
- Toggle between weekly and monthly view
- Hover tooltip shows exact value for the data point
- Chart is responsive and scales properly on mobile

### US-1.3: View Sales vs Refunds Chart
**As a** sales team lead,
**I want to** see a bar chart comparing monthly sales and refunds,
**so that** I can monitor the refund ratio and spot problem months.

**Acceptance Criteria:**
- Grouped bar chart with two bars per month (sales in blue, refunds in red/orange)
- X-axis: months, Y-axis: dollar amounts
- Legend identifying each bar color
- Hover tooltip with exact values

### US-1.4: View Activity Feed
**As a** product manager,
**I want to** see a real-time feed of recent customer actions,
**so that** I can stay aware of signups, upgrades, and cancellations as they happen.

**Acceptance Criteria:**
- Timeline/list showing the 10 most recent activities
- Each item shows: icon (type-specific), customer name, action description, timestamp
- Activity types: signup, upgrade, downgrade, cancellation, payment
- Timestamps shown as relative time ("2 hours ago", "yesterday")
- Scrollable if more than 5 items visible

### US-1.5: View Top Customers Table
**As a** sales team lead,
**I want to** see a table of top customers sorted by total spend,
**so that** I can identify and prioritize high-value accounts.

**Acceptance Criteria:**
- Table columns: Customer Name, Email, Total Spent, Plan, Status
- Status shown as a colored badge (green for active, red for churned)
- Sortable by clicking column headers (at least Total Spent)
- Shows top 5 customers on the dashboard
- Responsive: horizontal scroll on mobile or stacked card layout

### US-1.6: View Sales by Region Chart
**As an** operations lead,
**I want to** see a doughnut chart showing revenue breakdown by region,
**so that** I can understand geographic distribution of sales.

**Acceptance Criteria:**
- Doughnut/pie chart with 4-6 regions (North America, Europe, Asia, etc.)
- Each segment has a distinct color
- Legend with region name and percentage
- Center of doughnut shows total revenue

---

## Epic 2: Navigation & Layout

### US-2.1: Sidebar Navigation
**As a** user,
**I want to** navigate between Dashboard, Analytics, Customers, Orders, and Settings pages via a sidebar,
**so that** I can quickly access different sections.

**Acceptance Criteria:**
- Sidebar with icon + label for each nav item
- Active page highlighted with distinct background/color
- Collapsible to icon-only mode on desktop (toggle button)
- Mobile: sidebar hidden by default, opens as overlay drawer via hamburger menu
- Sidebar has dark/indigo theme

### US-2.2: Top Header Bar
**As a** user,
**I want to** see a header bar with search, notifications, and user menu,
**so that** I can search, check alerts, and access account settings.

**Acceptance Criteria:**
- Search input with magnifying glass icon (visual only for POC — no search logic)
- Notification bell icon with unread count badge (static number)
- User avatar that opens a dropdown menu with: Profile, Settings, Sign Out
- Dropdown closes on click outside
- Header is sticky at the top

---

## Epic 3: Analytics Page

### US-3.1: View Detailed Analytics
**As a** product manager,
**I want to** see deeper charts for user growth, churn rate, and ARPU on a dedicated Analytics page,
**so that** I can analyze trends beyond the high-level dashboard.

**Acceptance Criteria:**
- 3 charts: User Growth (line), Churn Rate (line), ARPU (bar)
- Date range filter with date picker (select start and end date)
- Charts update visual range based on selected dates (mock behavior — filter the mock data)
- Each chart in its own card with title and subtitle

---

## Epic 4: Customers Page

### US-4.1: View Customer Table
**As a** sales team lead,
**I want to** see a full list of customers in a searchable, paginated table,
**so that** I can browse and find specific customer records.

**Acceptance Criteria:**
- Table columns: Name, Email, Plan, MRR, Status (badge), Joined Date
- Search bar filters table by name or email (client-side)
- Pagination with 10 rows per page, prev/next buttons, page indicator
- Click a row to expand an inline detail panel (shows additional info like address, last activity)
- Responsive: table scrolls horizontally on mobile

---

## Epic 5: Theme

### US-5.1: Dark/Light Theme Toggle
**As a** user,
**I want to** toggle between dark and light themes,
**so that** I can use the dashboard comfortably in any lighting condition.

**Acceptance Criteria:**
- Toggle button in the header (sun/moon icon)
- Theme applies globally — sidebar, content area, cards, charts all adapt
- Preference persisted in localStorage
- Default to light theme
