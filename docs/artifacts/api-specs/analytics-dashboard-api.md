# API Specs: Analytics Dashboard

## Overview
This is a frontend-only POC. All data is mock — defined as TypeScript constants in `src/lib/mock-data.ts`. No backend API exists. This document defines the data shapes as if an API existed, so the mock data can be swapped with real API calls later.

## Mock Data Strategy
- All mock data exported from `src/lib/mock-data.ts`
- Data is typed with interfaces from `src/lib/types.ts`
- Functions that simulate API calls can be added in `src/lib/api.ts` if needed (e.g., `getCustomers(page, search)` filtering mock data)

---

## Endpoints (Mock)

### GET /api/dashboard/kpis
Returns the 4 KPI metrics for the dashboard cards.

**Response:**
```json
{
  "totalRevenue": { "value": 24780, "change": 12.5 },
  "activeSubscribers": { "value": 1245, "change": 3.2, "sparkline": [980, 1020, 1100, 1150, 1200, 1245] },
  "mrr": { "value": 14320, "change": 8.1 },
  "refundRate": { "value": 2.4, "change": -0.8 }
}
```

### GET /api/dashboard/revenue?period=monthly|weekly
Revenue over time for the area chart.

**Response:**
```json
{
  "period": "monthly",
  "data": [
    { "date": "2025-01", "revenue": 18200 },
    { "date": "2025-02", "revenue": 19400 },
    ...
  ]
}
```

### GET /api/dashboard/sales-refunds
Monthly sales vs refunds for the bar chart.

**Response:**
```json
{
  "data": [
    { "month": "Jan", "sales": 18200, "refunds": 420 },
    { "month": "Feb", "sales": 19400, "refunds": 380 },
    ...
  ]
}
```

### GET /api/dashboard/activity?limit=10
Recent activity feed.

**Response:**
```json
{
  "activities": [
    {
      "id": "a1",
      "type": "signup",
      "customerName": "Sarah Johnson",
      "description": "Created a new account",
      "timestamp": "2025-12-15T14:30:00Z"
    },
    ...
  ]
}
```
Activity types: `signup`, `upgrade`, `downgrade`, `cancellation`, `payment`

### GET /api/dashboard/top-customers?limit=5
Top customers by spend.

**Response:**
```json
{
  "customers": [
    {
      "id": "c1",
      "name": "Acme Corp",
      "email": "billing@acme.com",
      "totalSpent": 12450,
      "plan": "Enterprise",
      "status": "active"
    },
    ...
  ]
}
```

### GET /api/dashboard/regions
Revenue by region for doughnut chart.

**Response:**
```json
{
  "regions": [
    { "name": "North America", "revenue": 12400 },
    { "name": "Europe", "revenue": 8200 },
    { "name": "Asia Pacific", "revenue": 5100 },
    { "name": "Latin America", "revenue": 2800 },
    { "name": "Other", "revenue": 1280 }
  ]
}
```

### GET /api/analytics/user-growth?from=&to=
User growth over time.

**Response:**
```json
{
  "data": [
    { "date": "2025-01", "users": 820 },
    { "date": "2025-02", "users": 890 },
    ...
  ]
}
```

### GET /api/analytics/churn?from=&to=
Churn rate trend.

**Response:**
```json
{
  "data": [
    { "date": "2025-01", "rate": 3.2 },
    { "date": "2025-02", "rate": 2.8 },
    ...
  ]
}
```

### GET /api/analytics/arpu?from=&to=
Average Revenue Per User.

**Response:**
```json
{
  "data": [
    { "date": "2025-01", "arpu": 22.10 },
    { "date": "2025-02", "arpu": 23.40 },
    ...
  ]
}
```

### GET /api/customers?page=1&limit=10&search=
Paginated customer list.

**Response:**
```json
{
  "customers": [...],
  "total": 87,
  "page": 1,
  "totalPages": 9
}
```

**Customer object:**
```json
{
  "id": "c1",
  "name": "Acme Corp",
  "email": "billing@acme.com",
  "plan": "Enterprise",
  "mrr": 299,
  "status": "active",
  "joinedDate": "2024-03-15",
  "address": "123 Main St, San Francisco, CA",
  "lastActivity": "2025-12-14T09:00:00Z"
}
```
