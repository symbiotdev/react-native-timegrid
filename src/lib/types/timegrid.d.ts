import { Day } from 'date-fns/types';
import { Locale } from 'date-fns/locale/types';
export type TimeGridScheme = 'light' | 'dark';
export type TimeGridStyling = {
    backgroundColor?: string;
    dayHeaderBackgroundColor?: string;
    dayHeaderTextColor?: string;
    headerSafeAreaBackgroundColor?: string;
    allDayEventsSafeAreaBackgroundColor?: string;
    allDayEventsSafeAreaTextColor?: string;
    timelineBackgroundColor?: string;
    timelineTextColor?: string;
    verticalLineColor?: string;
    horizontalLineColor?: string;
    nowIndicatorColor?: string;
    unavailableTimeBackgroundColor?: string;
    dropZoneBackgroundColor?: string;
    eventBackgroundColor?: string;
    eventTextColor?: string;
    eventBorderColor?: string;
};
export type TimeGridThemeProps = TimeGridStyling & {
    scheme?: TimeGridScheme;
} & {
    [key in TimeGridScheme]?: TimeGridStyling;
};
export type TimeGridDimensionsProps = {
    width?: number;
    dayHeaderHeight?: number;
    allDayEventHeight?: number;
    timelineWidth?: number;
    horizontalLineSize?: number;
    nowIndicatorHeight?: number;
    gridVerticalPadding?: number;
    eventBorderWidth?: number;
    eventBorderRadius?: number;
};
export type TimeGridDatetimeProps = {
    startDate?: Date;
    weekStartsOn?: Day;
    hiddenDays?: Day[];
    numberOfDays?: number;
    timeFrom?: number;
    timeTo?: number;
    timeInterval?: number;
    timeStep?: number;
    minDate?: Date;
    maxDate?: Date;
    timezone?: string;
};
export type TimeGridControllerProps = {
    swipeable?: boolean;
    snappable?: boolean;
    draggable?: boolean;
    debounceable?: boolean;
    rtl?: boolean;
    isDayHeaderVisible?: boolean;
    isTimelineVisible?: boolean;
    isNowIndicatorVisible?: boolean;
    isAllDayEventsEnabled?: boolean;
    isAllDayEventsVisible?: boolean;
};
export type TimeGridFormatterProps = {
    dayHeaderTextFormat?: string;
    timelineTextFormat?: string;
    locale?: Locale;
};
export type TimeGridUnavailableTime = {
    from: number;
    to: number;
    start?: Date | string;
    end?: Date | string;
} & ({
    weekday?: Day;
    date?: never;
} | {
    date?: Date | string;
    weekday?: never;
});
export type TimeGridUnavailableTimeProps = {
    unavailableTime?: TimeGridUnavailableTime[];
};
export type TimeGridEvent = {
    id: string;
    start: Date | string | number;
    end: Date | string | number;
    text?: string;
    backgroundColor?: string;
    textColor?: string;
    timezone?: string;
    readonly?: boolean;
    rrule?: string;
};
export type TimeGridEventsProps = {
    createEventDuration?: number;
    allDayEventsSafeAreaText?: string;
    events?: TimeGridEvent[];
};
export type TimeGridRefNavigationParams = {
    animated?: boolean;
    ignoreLimit?: boolean;
};
export type TimeGridRefDatetimeParams = {
    animated?: boolean;
    ignoreTime?: boolean;
};
export type TimeGridCreateEventParams = {
    date: Date;
    text?: string;
    backgroundColor?: string;
    textColor?: string;
};
export type TimeGridRef = {
    getPrevDate: (params?: {
        ignoreLimit?: boolean;
    }) => Date | undefined;
    getNextDate: (params?: {
        ignoreLimit?: boolean;
    }) => Date | undefined;
    prevDate: (params?: TimeGridRefNavigationParams) => void;
    nextDate: (params?: TimeGridRefNavigationParams) => void;
    back: (params?: TimeGridRefNavigationParams) => void;
    forward: (params?: TimeGridRefNavigationParams) => void;
    toDatetime: (date: Date, params?: TimeGridRefDatetimeParams) => void;
    createEvent: (params: TimeGridCreateEventParams) => void;
};
export type DateParams = {
    date: Date;
    tzDate: Date;
};
export type TimeGridCreatedEvent = {
    start: Date;
    end: Date;
};
export type TimeGridActionsProps = {
    onChangeDate?: (date: Date) => void;
    onHeaderSafeAreaPress?: () => void;
    onAllDayEventsSafeAreaPress?: () => void;
    onDayHeaderPress?: (params: DateParams) => void;
    onLoad?: () => void;
    onUnavailableTimePress?: (params: DateParams) => void;
    onUnavailableTimeLongPress?: (params: DateParams) => void;
    onDatetimeContextMenu?: (params: DateParams & {
        x: number;
        y: number;
    }) => void;
    onDatetimePress?: (params: DateParams) => void;
    onDatetimeLongPress?: (params: DateParams) => void;
    onEventPress?: (params: {
        event: TimeGridEvent;
    }) => void;
    onEventLongPress?: (params: {
        event: TimeGridEvent;
    }) => void;
    onEventUpdated?: (params: {
        event: TimeGridEvent;
    }) => Promise<boolean>;
    onEventCreated?: (params: {
        event: TimeGridCreatedEvent;
    }) => Promise<boolean>;
};
export type TimeGridProps = TimeGridDatetimeProps & TimeGridControllerProps & TimeGridDimensionsProps & TimeGridEventsProps & TimeGridActionsProps & TimeGridFormatterProps & TimeGridUnavailableTimeProps & {
    theme?: TimeGridThemeProps;
    ref?: TimeGridRef;
};
