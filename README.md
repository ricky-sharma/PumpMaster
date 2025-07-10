# 🚀 PumpMaster

**PumpMaster** is a full-stack application designed to manage concrete pump operations, including pump tracking, alerts, and reporting. It leverages modern web technologies to provide a fast, responsive, and maintainable solution.

<br>

## ✨ Features

* 🧪 Unit tests with **xUnit** (.NET) and **Jest + Testing Library** (React)
* ⚙️ Backend with **.NET Core Web API**
* 🖥 Frontend with **React** and **Tailwind CSS**
* 🧩 Uses **react-data-grid-lite** for tabular UI
* 🔒 Secured endpoints with mock JWT-based **\[Authorize]** attributes
* 📡 API communication via **Axios**
* ✅ Vite for fast build & HMR
* 🧰 No external database — uses mock in-memory data

<br>

<p align="center">
  <img src="https://github.com/user-attachments/assets/dbe6a5e4-15e3-4362-82f2-8116ffb62f0a" alt="PumpMaster Demo GIF" width="100%" />
</p>

<br>

## 🛠 Tech Stack

### Frontend

* ✅ React 19+
* 🎨 Tailwind CSS
* 📊 react-data-grid-lite
* 🔁 React Router DOM
* 📬 Axios
* 🧪 Jest, @testing-library/react
* 💻 Node.js v20.19.0+
* ✅ Vite v7.0.3

### Backend

* 🔧 ASP.NET Core 9.0
* 🔄 Mock data
* 🧪 xUnit, Moq for unit testing

---

## 🗂 Folder Structure

```
PumpMaster/
│
├── PumpMaster.Api/                 # .NET Core Web API
│   ├── Controllers/                # API endpoints (e.g., PumpsController)
│   ├── Models/                     # Data models (Pump.cs)
│   ├── Services/                   # Business logic (PumpService.cs)
│   ├── Services/Interfaces/        # Interfaces (IPumpService.cs)
│   └── Data/                       # MockPumpData.cs
│
├── PumpMaster.Api.Tests/          # xUnit Tests for API
│   └── Controllers/               # Tests for controllers
│
├── pumpmaster-frontend/           # React Frontend
│   ├── src/
│   │   ├── pages/                 # Pages like PumpList.jsx
│   │   ├── components/           # UI components
│   │   ├── services/             # Axios API logic
│   │   └── __tests__/            # Jest + RTL test files
│
├── README.md
└── PumpMaster.sln                 # .NET solution file
```

---

## 🏁 Getting Started

### ✅ Backend Setup

1. Navigate to the backend folder:

   ```bash
   cd PumpMaster.Api
   ```

2. Restore and run the API:

   ```bash
   dotnet restore
   dotnet run
   ```

3. The API should be live at: `https://localhost:5284/api/pumps`

> ⚠️ No database setup required – mock data is used in memory (`MockPumpData.cs`).

---

### ✅ Frontend Setup

1. Navigate to the frontend folder:

   ```bash
   cd pumpmaster-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. App will run at: `http://localhost:5173`

---

## 🔌 API Usage

### `GET /api/pumps`

Returns a list of mock pumps.

### `PUT /api/pumps/{id}`

Updates pump data by ID.

**Request Body Example**:

```json
{
  "id": "1",
  "name": "Updated Pump"
}
```

---

## 🧪 Testing

### 🔍 Backend Tests

```bash
cd PumpMaster.Api.Tests
dotnet test
```

Tests use:

* xUnit
* Moq

### 🔍 Frontend Tests

```bash
cd pumpmaster-frontend
npm test
```

Tests use:

* Jest
* @testing-library/react
* `jest.mock` for mocking `react-router-dom` and Axios

---

## 📄 License

This project is licensed under the MIT License.
