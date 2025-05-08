<div align="center">
  <a href="https://www.symbiot.dev/">
    <img alt="Logo" src="https://github.com/symbiotdev/react-native-timegrid/blob/main/brand_logo.png" width="100px" />
  </a>
  <h1>React Native TimeGrid 🗓️ 🚀</h1>

  <div align="center">
    <img alt="NPM downloads" src="https://img.shields.io/npm/dw/@symbiot.dev/react-native-timegrid?logo=npm&label=npm&cacheSeconds=3600"/>
    <img alt="NPM version" src="https://img.shields.io/npm/v/@symbiot.dev/react-native-timegrid?logo=npm&label=npm&cacheSeconds=3600"/>
    <img alt="Bundle size" src="https://img.shields.io/bundlephobia/minzip/@symbiot.dev/react-native-timegrid?label=size&cacheSeconds=3600"/>
    <img alt="Typescript" src="https://img.shields.io/static/v1?label=&message=TS&color=blue"/>
  </div>
</div>

> A powerful and flexible time grid and calendar component for **React Native**, designed to work seamlessly across **iOS**, **Android**, **Web**, **Expo**, and **Expo Go**. Built for performance and customization, react-native-timegrid enables developers to implement rich, interactive calendar views for a wide range of scheduling and planning needs.

---

## [✨ **Key Features**](#features)

📆 **Time-Based Grid Layout** – Intuitive hourly/daily layout ideal for agenda, schedule, or shift views.

🎨 **Fully Customizable** – Modify headers, time slots, event appearance, and grid styling to fit any design system.

🧠 **Lightweight** – Minimal dependencies and optimized bundle size for faster load times and efficient performance.

🚀 **Cross-Platform Compatibility** – Works out of the box with:

- **React Native CLI**
- **Expo**
- **Expo Go**
- **React Native Web** for browser support

⚙️ **Optimized Performance** – Supports virtual scrolling and large datasets with smooth interactions.

✋ **Interactive Features** – Tap, drag, and dynamic updates for real-time scheduling apps.

📱 **Responsive Design** – Adapts to various screen sizes and device orientations.

🧩 **Modular Integration** – Use as a standalone calendar or integrate into more complex scheduling systems.

---

## 🛠 [**Ideal For**](#for)

- 📅 Personal or team calendars
- 🛎️ Booking and reservation systems (salons, gyms, clinics)
- 👥 Employee shift and availability planners
- 📆 Event timeline visualizations
- 🧑‍🏫 Class schedules and academic timetables
- 🧠 Task and time management tools
- 🏥 Appointment scheduling for healthcare or therapy
- 📦 Delivery or logistics scheduling
- 💼 Project planning dashboards with time allocation
- 🛠 Maintenance or service job assignment trackers
- 🎓 Student agendas or learning planners
- 🎤 Conference session planners and expo booth schedules
- 🔥 and more ...

Whether you're building a cross-platform scheduling app or integrating a responsive calendar view into an existing project, react-native-timegrid provides a modern, customizable, and performant solution for all major platforms.

---

## [👩🏿‍💻 **Installation**](#installation)

```bash
npm install @symbiot.dev/react-native-timegrid react-native-reanimated react-native-gesture-handler date-fns
# or
yarn add @symbiot.dev/react-native-timegrid react-native-reanimated react-native-gesture-handler date-fns

# for web support
npm i react-native-web
# or
yarn add react-native-web

# to support recurring events
npm i rrule
# or
yarn add rrule
```

```tsx
import { TimeGrid } from '@symbiot.dev/react-native-timegrid';

// ... and voilà 💫
<TimeGrid />
```

> Just import it and boom — you’ve got a slick, cross-platform calendar view.
> Fast setup, full control, and zero headaches. 💪🏻💥

---

## 🎨 `TimeGridThemeProps` – [Theming & Appearance](#theme)

Customize the look and feel of the `TimeGrid` with flexible styling options. You can define global styles, override them based on theme (`light` or `dark`), or combine both approaches.

### 🧩 Structure

The `TimeGridThemeProps` type supports three layers:

1. **Global Styling (applies to all schemes unless overridden)**
2. **Per-scheme Overrides** – Use `light` and `dark` keys to define specific values
3. **Theme Scheme Selector** – Control active theme using `scheme`

```ts
type TimeGridThemeProps = TimeGridStyling & {
  scheme?: 'light' | 'dark'; // system default
  light?: TimeGridStyling;
  dark?: TimeGridStyling;
};
```

### 🧱 Available Styling Props

| Prop Name                             | Description                                        | iOS | Android | Web | Default Value                         |
|---------------------------------------|----------------------------------------------------|:---:|:-------:|:---:|---------------------------------------|
| `backgroundColor`                     | Main background color of the grid view             |  ✅  |    ✅    |  ✅  | light: `#FFFFFF`, dark: `#000000`     |
| `dayHeaderBackgroundColor`            | Background for the day-of-week header bar          |  ✅  |    ✅    |  ✅  | light: `#FFFFFF`, dark: `#000000`     |
| `dayHeaderTextColor`                  | Text color for day-of-week labels                  |  ✅  |    ✅    |  ✅  | light: `#000000`, dark: `#FFFFFF`     |
| `headerSafeAreaBackgroundColor`       | Background for top safe area (e.g., notch spacing) |  ✅  |    ✅    |  ✅  | light: `#FFFFFF`, dark: `#000000`     |
| `allDayEventsSafeAreaBackgroundColor` | Background for all-day events safe area            |  ✅  |    ✅    |  ✅  | light: `#FFFFFF`, dark: `#000000`     |
| `allDayEventsSafeAreaTextColor`       | Text color for all-day events safe area            |  ✅  |    ✅    |  ✅  | light: `#000000`, dark: `#FFFFFF`     |
| `timelineBackgroundColor`             | Background color for timeline column               |  ✅  |    ✅    |  ✅  | light: `#FFFFFF`, dark: `#000000`     |
| `timelineTextColor`                   | Text color for hour/time labels                    |  ✅  |    ✅    |  ✅  | light: `#A9A9A9`, dark: `#A9A9A9`     |
| `verticalLineColor`                   | Color of vertical time slot dividers               |  ✅  |    ✅    |  ✅  | light: `#F1F1F1`, dark: `#303030`     |
| `horizontalLineColor`                 | Color of horizontal grid lines                     |  ✅  |    ✅    |  ✅  | light: `#F1F1F1`, dark: `#303030`     |
| `nowIndicatorColor`                   | Color of the “now” line showing current time       |  ✅  |    ✅    |  ✅  | `#FF6F61`                             |
| `unavailableTimeBackgroundColor`      | Color for visually marking unavailable time blocks |  ✅  |    ✅    |  ✅  | light: `#F1F1F170`, dark: `#30303070` |
| `dropZoneBackgroundColor`             | Background for areas that accept dragged events    |  ✅  |    ✅    |  ✅  | `transparent`                         |
| `eventBackgroundColor`                | Default background for event blocks                |  ✅  |    ✅    |  ✅  | light: `#D8E4F1`, dark: `#475867`     |
| `eventTextColor`                      | Text color used in event blocks                    |  ✅  |    ✅    |  ✅  | light: `#000000`, dark: `#FFFFFF`     |
| `eventBorderColor`                    | Border color for events                            |  ✅  |    ✅    |  ✅  | light: `#FFFFFF`, dark: `#000000`     |

```tsx
<TimeGrid
  //...
  theme={{
    backgroundColor: '#f0f0f0', // for light and dark mode
  }}
/>

// ----

<TimeGrid
  //...
  theme={{
    backgroundColor: '#f0f0f0', // only applies to light mode
    eventTextColor: '#323232', // only applies to dark mode
    dark: {
      backgroundColor: '#020202',
    },
    light: {
      eventTextColor: '#505050',
    }
  }}
/>
```

---

## 📐 `TimeGridDimensionsProps` – [Layout & Dimensions](#dimensions)

Control the physical dimensions of key areas inside the `TimeGrid`. All values are in **pixels** and optional — sensible defaults are provided.

### 🧱 Available Dimension Props

| Prop Name             | Description                                           | iOS | Android | Web | Default Value |
|-----------------------|-------------------------------------------------------|:---:|:-------:|:---:|---------------|
| `width`               | TimeGrid width                                        |  ✅  |    ✅    |  ✅  | `system`      |
| `dayHeaderHeight`     | Height of the day header (weekday labels)             |  ✅  |    ✅    |  ✅  | `50`          |
| `allDayEventHeight`   | Height for all-day events                             |  ✅  |    ✅    |  ✅  | `25`          |
| `timelineWidth`       | Width of the left-side timeline area                  |  ✅  |    ✅    |  ✅  | `58`          |
| `horizontalLineSize`  | Height of horizontal divider lines                    |  ✅  |    ✅    |  ✅  | `0.5`         |
| `nowIndicatorHeight`  | Thickness of the “now” line                           |  ✅  |    ✅    |  ✅  | `0.5`         |
| `gridVerticalPadding` | Defines the vertical spacing (top and bottom padding) |  ✅  |    ✅    |  ✅  | `0`           |
| `eventBorderWidth`    | Width of the border around an event element           |  ✅  |    ✅    |  ✅  | `1`           |
| `eventBorderRadius`   | Radius of the border corners for an event element     |  ✅  |    ✅    |  ✅  | `5`           |

```tsx
<TimeGrid
  //...
  timelineWidth={60}
/>
```

___

## 📅 `TimeGridDatetimeProps` – [Date & Time Configuration](#datetime)

Set the visible time range, number of days, start date, timezone, and other calendar-related behaviors.  
These props give you precise control over how the `TimeGrid` renders days and time slots.

### 🧱 Available Datetime Props

| Prop Name      | Description                                                              | iOS | Android | Web | Default Value |
|----------------|--------------------------------------------------------------------------|:---:|:-------:|:---:|---------------|
| `startDate`    | The starting datetime for the visible grid (defaults to current date)    |  ✅  |    ✅    |  ✅  | `new Date()`  |
| `weekStartsOn` | Day the week starts on (0=Sun, 1=Mon, etc.)                              |  ✅  |    ✅    |  ✅  | `0` (Sunday)  |
| `hiddenDays`   | Days of the week to hide (e.g., `[0, 6]` to hide Sun & Sat)              |  ✅  |    ✅    |  ✅  | `[]`          |
| `numberOfDays` | Number of days to render in the view                                     |  ✅  |    ✅    |  ✅  | `1`           |
| `timeFrom`     | Start of the visible time range (in **minutes**, e.g., `480` = 8:00 AM)  |  ✅  |    ✅    |  ✅  | `0`           |
| `timeTo`       | End of the visible time range (in **minutes**, e.g., `1200` = 8:00 PM)   |  ✅  |    ✅    |  ✅  | `1440`        |
| `timeInterval` | Minutes between each horizontal time line                                |  ✅  |    ✅    |  ✅  | `60`          |
| `timeStep`     | Time rounding when placing events (in minutes)                           |  ✅  |    ✅    |  ✅  | `15`          |
| `minDate`      | Earliest date to allow navigation                                        |  ✅  |    ✅    |  ✅  | `—`           |
| `maxDate`      | Latest date to allow navigation                                          |  ✅  |    ✅    |  ✅  | `—`           |
| `timezone`     | Timezone name (e.g., `'America/New_York', '+02:00'`) for offset handling |  ✅  |    ✅    |  ✅  | `local`       |

```tsx
<TimeGrid
  //...
  weekStartsOn={1} // starts on Monday
  numberOfDays={3}
  hiddenDays={[0, 6]} // exclude weekends (Sun,Sut)
/>
```

___

## 🗓️ `TimeGridEventsProps` – [Events, Rendering & Recurrence](#events)

Configure how events appear and behave inside the calendar. Supports custom colors, recurring events, readonly mode, and timezone-specific scheduling.

> 🟦🟨  **Overlapping Events**  
> Events that share time ranges are **fully supported out-of-the-box**.  
> The grid will automatically stack or split them side-by-side depending on layout space.

### 🧱 Available Event Props

| Prop Name                  | Description                                                        | iOS | Android | Web | Default Value |
|----------------------------|--------------------------------------------------------------------|:---:|:-------:|:---:|---------------|
| `createEventDuration`      | Duration (in **minutes**) to assign when user creates a new event. |  ✅  |    ✅    |  ✅  | `60`          |
| `allDayEventsSafeAreaText` | Placeholder for all-day events safe area                           |  ✅  |    ✅    |  ✅  | `All-day`     |
| `events`                   | Array of `TimeGridEvent` to render inside the time grid            |  ✅  |    ✅    |  ✅  | `[]`          |

### `TimeGridEvent`

| Field Name        | Description                                     | Type                       | Required | Default      |
|-------------------|-------------------------------------------------|----------------------------|----------|--------------|
| `id`              | Unique identifier for the event                 | `string`                   | ✅        | —            |
| `start`           | Start datetime of the event                     | `Date \| string \| number` | ✅        | —            |
| `end`             | End datetime of the event                       | `Date \| string \| number` | ✅        | —            |
| `text`            | Event title or description                      | `string`                   | optional | `datetime`   |
| `backgroundColor` | Override default event background color         | `string`                   | optional | `theme`      |
| `textColor`       | Override text color inside the event            | `string`                   | optional | `theme`      |
| `timezone`        | IANA timezone name for localized event handling | `string`                   | optional | `grid-level` |
| `readonly`        | Prevent this event from being dragged           | `boolean`                  | optional | `false`      |
| `rrule`           | RRULE string (e.g., `'RRULE:FREQ=DAILY'`)       | `string`                   | optional | —            |

> ℹ️ **Need help creating a recurrence rule?**  
> Use the visual generator at [rrule.js playground](https://jkbrzt.github.io/rrule/) to quickly create and test valid RRULE strings.

```tsx
<TimeGrid
  //...
  createEventDuration={30} // new created events equals 30 mins
  events={[
    //...
    {
      id: 'timestamp',
      start: '2025-04-25T18:00:00.500Z',
      end: '2025-04-25T19:00:00.800Z',
      backgroundColor: '#DDDDDD',
      textColor: '#000000',
      readonly: true // prevent from being dragged
    }
  ]}
/>
```

___

## 🚫 `TimeGridUnavailableTimeProps` – [Blocking Unavailable Times](unavailable-time)

Mark specific time ranges as **unavailable** — either for a specific date or recurring on weekdays.  
These periods can block event creation, display with a distinct background and could be used with a different combinations.

```ts
export type TimeGridUnavailableTime = {
  from: number; // in minutes (e.g. 480 = 8:00 AM)
  to: number;   // in minutes (e.g. 1020 = 5:00 PM)
  start?: Date | string;
  end?: Date | string;
} & (
  | {
  weekday?: Day;   // 0 (Sunday) to 6 (Saturday)
  date?: never;
}
  | {
  date?: Date | string;
  weekday?: never;
}
  );

export type TimeGridUnavailableTimeProps = {
  unavailableTime?: TimeGridUnavailableTime[];
};
```

### 🧱 Available Unavailable Time Props

| Prop Name         | Description                                                                                                  | iOS | Android | Web | Default Value |
|-------------------|--------------------------------------------------------------------------------------------------------------|:---:|:-------:|:---:|---------------|
| `unavailableTime` | Array of time rules (by weekday or specific date). Uses `from`/`to` in **minutes**; Priority: date, weekday; |  ✅  |    ✅    |  ✅  | `[]`          |

```tsx
<TimeGrid
  //...
  unavailableTime={[
    { from: 0, to: 480 } // everyday 00:00 (12:00 AM) -> 08:00 AM
  ]}
/>

// ----

<TimeGrid
  //...
  unavailableTime={[
    { from: 0, to: 480, start: '2025-04-25T18:00:00.500Z' } // daily, starting April 25
  ]}
/>

// ----

<TimeGrid
  //...
  unavailableTime={[
    { from: 0, to: 480, start: '2025-04-25T00:00:00.500Z', end: '2025-04-26T00:00:00.500Z' } // only 2 days - April 25 and 26
  ]}
/>

// ----
// Priority behaviour

<TimeGrid
  //...
  unavailableTime={[
    { from: 0, to: 480 }, // daily
    { from: 1020, to: 1440, weekday: 1 }, // ignore the first element of the array and apply every Monday
    { from: 480, to: 900, date: '2025-04-28T18:00:00.500Z' } // ignore the first and second rules for Monday, April 28th
  ]}
/>

// ----
// Save behaviour

<TimeGrid
  //...
  unavailableTime={[
    { from: 0, to: 480 }, // daily
    { from: 0, to: 480, date: '2025-04-28T18:00:00.500Z' }, // save the daily rule for April 28
    { from: 480, to: 900, date: '2025-04-28T18:00:00.500Z' } // ignore the first and second rules for Monday, April 28th
  ]}
/>


```

___

## 🎮 `TimeGridControllerProps` – [Interaction & Display Toggles](#controller)

Control user interaction features like swiping, dragging, snapping, and visibility of UI components like the timeline, all-day events etc.

### 🧱 Available Controller Props

| Prop Name               | Description                                                    | iOS | Android | Web | Default Value |
|-------------------------|----------------------------------------------------------------|:---:|:-------:|:---:|---------------|
| `swipeable`             | Enable swiping between days or weeks                           |  ✅  |    ✅    |  ✅  | `false`       |
| `snappable`             | Snap scroll/drag to the nearest date                           |  ✅  |    ✅    |  ✅  | `false`       |
| `draggable`             | Allow dragging events to create/reschedule them                |  ✅  |    ✅    |  ✅  | `true`        |
| `debounceable`          | Delays date change handler to avoid rapid successive triggers. |  ✅  |    ✅    |  ✅  | `false`       |
| `rtl`                   | Enable right-to-left layout (for RTL languages)                |  ✅  |    ✅    |  ✅  | `false`       |
| `isDayHeaderVisible`    | Toggle visibility of the top day-of-week header                |  ✅  |    ✅    |  ✅  | `true`        |
| `isTimelineVisible`     | Toggle visibility of the left-side timeline                    |  ✅  |    ✅    |  ✅  | `true`        |
| `isNowIndicatorVisible` | Show/hide the "now" indicator line                             |  ✅  |    ✅    |  ✅  | `true`        |
| `isAllDayEventsEnabled` | Enable support for all-day events                              |  ✅  |    ✅    |  ✅  | `true`        |
| `isAllDayEventsVisible` | Toggle visibility of the all-day events                        |  ✅  |    ✅    |  ✅  | `true`        |

```tsx
<TimeGrid
  //...
  swipeable // swipe actions turned on
  draggable // user can drag events
  snappable // date snapping enabled
/>
```

___

## ⏱ `TimeGridFormatterProps` – [Text Formatting](#formatter)

Customize how dates and times appear within the TimeGrid component using format strings (e.g., `dd`, `HH:mm`, `EEE`).  
These follow [date-fns](https://date-fns.org/docs/format) formatting syntax.

### 🧱 Available Formatter Props

| Prop Name             | Description                                                    | iOS | Android | Web | Default Value |
|-----------------------|----------------------------------------------------------------|:---:|:-------:|:---:|---------------|
| `dayHeaderTextFormat` | Format for the day header labels (e.g., `Mon`, `Apr 20`)       |  ✅  |    ✅    |  ✅  | `EEEEEE dd`   |
| `timelineTextFormat`  | Format for the left-side time labels (e.g., `08:00`)           |  ✅  |    ✅    |  ✅  | `p`           |
| `locale`              | Locale object from `date-fns` for internationalized formatting |  ✅  |    ✅    |  ✅  | `en`          |

```tsx
import { zhCN } from 'date-fns/locale/zh-CN';

//...
<TimeGrid
  //...
  locale={zhCN} // Chinese localization
/>
```

___

## 🎯 `TimeGridActionsProps` – [User Interaction Callbacks](#actions)

Listen and respond to interactions like taps, long presses, event edits, and grid context menus.

### 🧱 Available Action Callbacks

| Prop Name                     | Description                                                                                    | iOS | Android | Web |
|-------------------------------|------------------------------------------------------------------------------------------------|:---:|:-------:|:---:|
| `onChangeDate`                | Called when the grid's date range changes                                                      |  ✅  |    ✅    |  ✅  |
| `onHeaderSafeAreaPress`       | Triggered when the top header area is tapped                                                   |  ✅  |    ✅    |  ✅  |
| `onAllDayEventsSafeAreaPress` | Triggered when the all-day events header area is tapped                                        |  ✅  |    ✅    |  ✅  |
| `onDayHeaderPress`            | Called when a specific day header is pressed                                                   |  ✅  |    ✅    |  ✅  |
| `onLoad`                      | Called once the grid is initialized and ready                                                  |  ✅  |    ✅    |  ✅  |
| `onUnavailableTimePress`      | Fired on tap inside an unavailable time block                                                  |  ✅  |    ✅    |  ✅  |
| `onUnavailableTimeLongPress`  | Fired on long press inside an unavailable time block                                           |  ✅  |    ✅    |  ✅  |
| `onDatetimeContextMenu`       | Right-click/context menu trigger at specific date/time (with x/y coords)                       | 🚫  |   🚫    |  ✅  |
| `onDatetimePress`             | Triggered on a tap inside an available time cell                                               |  ✅  |    ✅    |  ✅  |
| `onDatetimeLongPress`         | Triggered on long press inside an available time cell                                          |  ✅  |    ✅    |  ✅  |
| `onEventPress`                | Called when an event is tapped                                                                 |  ✅  |    ✅    |  ✅  |
| `onEventLongPress`            | Called when an event is long-pressed                                                           |  ✅  |    ✅    |  ✅  |
| `onEventUpdated`              | Triggered when an event is changed (drag); return `false` to keep updating, `reject` to cancel |  ✅  |    ✅    |  ✅  |
| `onEventCreated`              | Triggered when a new event is created by the user                                              |  ✅  |    ✅    |  ✅  |

```tsx
import { useState } from 'react';

//...
const [selectedDate, setSelectedDate] = useState(new Date());

//...
<TimeGrid
  //...
  onChangeDate={setSelectedDate} // selectedDate updated
/>
```

___

## 🔧 `TimeGridRef` – [Imperative Control API](#ref)

Control and interact with the TimeGrid instance programmatically using a React ref.  
Great for custom toolbars, buttons, or dynamic navigation.

### 🧱 Available Ref Methods

| Method          | Description                                                                     | Returns             |
|-----------------|---------------------------------------------------------------------------------|---------------------|
| `getPrevDate()` | Returns the previous valid date range (optionally ignoring `minDate`/`maxDate`) | `Date \| undefined` |
| `getNextDate()` | Returns the next valid date range (optionally ignoring `minDate`/`maxDate`)     | `Date \| undefined` |
| `prevDate()`    | Navigate to the previous available date                                         | `void`              |
| `nextDate()`    | Navigate to the next available date                                             | `void`              |
| `back()`        | Navigate backward through a specified number of days (`numberOfDays`)           | `void`              |
| `forward()`     | Navigate forward through a specified number of days (`numberOfDays`)            | `void`              |
| `toDatetime()`  | Scroll or jump to a specific date/time                                          | `void`              |
| `createEvent()` | Programmatically create a new event at a given datetime                         | `void`              |

```tsx
import { useRef } from 'react';
import { TimeGrid, TimeGridRef } from '@symbiot.dev/react-native-timegrid';

//...
const timeGridRef = useRef<TimeGridRef>(null);

//...
<TimeGrid
  //...
  ref={timeGridRef}
  onDatetimeLongPress={(params) => timeGridRef.current?.createEvent(params)}
/>
```

___

### [🌐 **Platform Support**](#support)

- ✅ iOS
- ✅ Android
- ✅ Web
- ✅ Expo & Expo Go

---

### [📦 **Bundle Size**](#size)

Lightweight and fast — see actual size on [Bundlephobia](https://bundlephobia.com/package/@symbiot.dev/react-native-timegrid).

---

### [💬 Contributing](#contributing)

Contributions welcome! Feel free to open issues, discussions, or suggestions.

---

### [🌟 Who's Using This?](#usage)

Using `react-native-timegrid` in your app or product?  
Feel free to share your project — it might be featured in this section!

> ✉️ Open pull request, or reach out directly to get included.

___

### [🚀 Got Ideas or Gaps to Fill?](#ideas)

Know of existing libraries or functionality that could be improved?  
Have an idea for something completely new?

**Symbiot** is ready to take on the challenge — feedback, feature requests, or collaboration ideas are always welcome!

> 🧠 Let’s build better tools together. Start the conversation or contact via [email](mailto:info@symbiot.dev).

___

### [🧾 License](#license)

MIT — Made with ❤️ by [Symbiot](https://symbiot.dev)
