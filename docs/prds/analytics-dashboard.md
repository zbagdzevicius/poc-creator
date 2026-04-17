# PRD: Analytics Dashboard for SaaS Product

## Problem Statement
SaaS product managers and team leads need a centralized dashboard to monitor key business metrics — revenue, active users, customer activity, and sales performance — at a glance. Currently, data is scattered across multiple tools (Stripe, Google Analytics, CRM), making it slow to get a unified picture of business health.

## Target Users
- **SaaS founders / product managers** — check daily KPIs each morning
- **Sales team leads** — monitor pipeline, recent activity, and top customers
- **Operations / finance** — track revenue trends, MRR, refunds

## Key Features

### 1. Main Dashboard (Home)
- **KPI cards row** at the top showing:
  - Total Revenue (with % change vs last period)
  - Active Subscribers (with trend sparkline)
  - MRR (Monthly Recurring Revenue)
  - Refund Rate
- **Revenue chart** — line/area chart showing revenue over time (last 12 months), with ability to toggle between weekly/monthly view
- **Sales vs Refunds** — bar chart comparing sales and refunds by month
- **Real-time activity feed** — recent customer actions (signups, upgrades, cancellations) shown as a timeline/list with timestamps
- **Top Customers table** — sortable table showing customer name, email, total spent, plan, and status badge (active/churned)
- **Sales by Region** — doughnut/pie chart breaking down revenue by geography

### 2. Sidebar Navigation
- Dashboard (home)
- Analytics
- Customers
- Orders
- Settings
- Collapsible sidebar on desktop, drawer on mobile

### 3. Top Header Bar
- Search input
- Notification bell with unread count badge
- User avatar with dropdown menu (profile, settings, sign out)
- Dark/light theme toggle

### 4. Analytics Page (secondary)
- Deeper charts: user growth over time, churn rate trend, average revenue per user (ARPU)
- Filterable by date range using a date picker

### 5. Customers Page
- Full-width data table with columns: Name, Email, Plan, MRR, Status, Joined Date
- Search/filter bar
- Pagination
- Click row to expand details

## Non-Functional Requirements
- Responsive: must work well on desktop (1280px+) and mobile (375px)
- Fast: dashboard should feel instant with no layout shifts
- Accessible: proper color contrast, keyboard navigable
- Professional look: clean typography, consistent spacing, subtle shadows and borders

## Design Direction
Inspired by modern SaaS admin dashboards like Mosaic (Cruip), with:
- Clean white/light gray background
- Sidebar with dark or indigo theme
- Card-based widget layout with subtle shadows
- Chart.js or similar for data visualization
- Inter or system font stack
- Consistent 4px/8px spacing grid

## Success Metrics
- User can identify all key KPIs within 5 seconds of page load
- Dashboard renders fully in under 2 seconds
- All pages usable on mobile without horizontal scroll

## Constraints
- Frontend only — all data is mock/static
- No authentication required
- No backend API — mock data as TypeScript constants
- Must use React + TailwindCSS
