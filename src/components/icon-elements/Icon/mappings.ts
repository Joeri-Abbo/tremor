import colorTheme from '@utils/colorTheme';

import { getColorVariantsFromColorTheme } from '@utils/classname-utils';

export type IconElementProporions = {
    paddingX: string,
    paddingY: string,
    iconSize: string,
}

export const proportinsMapping: {[size: string]: IconElementProporions} = {
    xs: {
        paddingX: 'px-1.5',
        paddingY: 'py-1.5',
        iconSize: 'w-3 h-3',
    },
    sm: {
        paddingX: 'px-1.5',
        paddingY: 'py-1.5',
        iconSize: 'w-5 h-5',
    },
    md: {
        paddingX: 'px-2',
        paddingY: 'py-2',
        iconSize: 'w-5 h-5',
    },
    lg: {
        paddingX: 'px-2',
        paddingY: 'py-2',
        iconSize: 'w-7 h-7',
    },
    xl: {
        paddingX: 'px-2.5',
        paddingY: 'py-2.5',
        iconSize: 'w-9 h-9',
    },
};

export type IconElementShapeTypes = {
    rounded: string,
    border: string,
    ring: string,
    shadow: string
}

export const shapeMapping: {[style: string]: IconElementShapeTypes} = {
    'simple': {
        rounded: '',
        border: '',
        ring: '',
        shadow: '',
    },
    'light': {
        rounded: 'rounded-lg',
        border: '',
        ring: '',
        shadow: '',
    },
    'shadow': {
        rounded: 'rounded-lg',
        border: 'border',
        ring: '',
        shadow: 'shadow',
    },
    'solid': {
        rounded: 'rounded-lg',
        border: 'border-2',
        ring: 'ring-1',
        shadow: '',
    },
    'circled': {
        rounded: 'rounded-lg',
        border: 'border',
        ring: 'ring-2',
        shadow: '',
    },
};

export type IconElementColorTypes = {
    textColor: string,
    bgColor: string,
    borderColor: string,
    ringColor: string,
}

export const colorMapping: {[style: string]: {[baseColor: string]: IconElementColorTypes}} = {
    'simple': {
        'slate': { 
            textColor:'text-slate-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'gray': { 
            textColor:'text-gray-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'zinc': { 
            textColor:'text-zinc-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'neutral': { 
            textColor:'text-neutral-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'stone': { 
            textColor:'text-stone-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'red': { 
            textColor:'text-red-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'orange': { 
            textColor:'text-amber-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'amber': { 
            textColor:'text-amber-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'yellow': { 
            textColor:'text-yellow-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'lime': { 
            textColor:'text-lime-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'green': { 
            textColor:'text-green-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'emerald': { 
            textColor:'text-emerald-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'teal': { 
            textColor:'text-teal-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'cyan': { 
            textColor:'text-cyan-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'sky': { 
            textColor:'text-sky-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'blue': { 
            textColor:'text-blue-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'indigo': { 
            textColor:'text-indigo-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'violet': { 
            textColor:'text-violet-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'purple': { 
            textColor:'text-purple-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'fuchsia': { 
            textColor:'text-fuchsia-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'pink': { 
            textColor:'text-pink-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        },
        'rose': { 
            textColor:'text-rose-500',
            bgColor:'',
            borderColor: '',
            ringColor: '',
        }
    },
    'light': {
        'slate': { 
            textColor: 'text-slate-500',
            bgColor: 'bg-slate-100',
            borderColor: '',
            ringColor: '',
        },
        'gray': { 
            textColor: 'text-gray-500',
            bgColor: 'bg-gray-100',
            borderColor: '',
            ringColor: '',
        },
        'zinc': { 
            textColor: 'text-zinc-500',
            bgColor: 'bg-zinc-100',
            borderColor: '',
            ringColor: '',
        },
        'neutral': { 
            textColor: 'text-neutral-500',
            bgColor: 'bg-neutral-100',
            borderColor: '',
            ringColor: '',
        },
        'stone': { 
            textColor: 'text-stone-500',
            bgColor: 'bg-stone-100',
            borderColor: '',
            ringColor: '',
        },
        'red': { 
            textColor: 'text-red-500',
            bgColor: 'bg-red-100',
            borderColor: '',
            ringColor: '',
        },
        'orange': { 
            textColor: 'text-amber-500',
            bgColor: 'bg-orange-100',
            borderColor: '',
            ringColor: '',
        },
        'amber': { 
            textColor: 'text-amber-500',
            bgColor: 'bg-amber-100',
            borderColor: '',
            ringColor: '',
        },
        'yellow': { 
            textColor: 'text-yellow-500',
            bgColor: 'bg-yellow-100',
            borderColor: '',
            ringColor: '',
        },
        'lime': { 
            textColor: 'text-lime-500',
            bgColor: 'bg-lime-100',
            borderColor: '',
            ringColor: '',
        },
        'green': { 
            textColor: 'text-green-500',
            bgColor: 'bg-green-100',
            borderColor: '',
            ringColor: '',
        },
        'emerald': { 
            textColor: 'text-emerald-500',
            bgColor: 'bg-emerald-100',
            borderColor: '',
            ringColor: '',
        },
        'teal': { 
            textColor: 'text-teal-500',
            bgColor: 'bg-teal-100',
            borderColor: '',
            ringColor: '',
        },
        'cyan': { 
            textColor: 'text-cyan-500',
            bgColor: 'bg-cyan-100',
            borderColor: '',
            ringColor: '',
        },
        'sky': { 
            textColor: 'text-sky-500',
            bgColor: 'bg-sky-100',
            borderColor: '',
            ringColor: '',
        },
        'blue': { 
            textColor: 'text-blue-500',
            bgColor: 'bg-blue-100',
            borderColor: '',
            ringColor: '',
        },
        'indigo': { 
            textColor: 'text-indigo-500',
            bgColor: 'bg-indigo-100',
            borderColor: '',
            ringColor: '',
        },
        'violet': { 
            textColor: 'text-violet-500',
            bgColor: 'bg-violet-100',
            borderColor: '',
            ringColor: '',
        },
        'purple': { 
            textColor: 'text-purple-500',
            bgColor: 'bg-purple-100',
            borderColor: '',
            ringColor: '',
        },
        'fuchsia': { 
            textColor: 'text-fuchsia-500',
            bgColor: 'bg-fuchsia-100',
            borderColor: '',
            ringColor: '',
        },
        'pink': { 
            textColor: 'text-pink-500',
            bgColor: 'bg-pink-100',
            borderColor: '',
            ringColor: '',
        },
        'rose': { 
            textColor: 'text-rose-500',
            bgColor: 'bg-rose-100',
            borderColor: '',
            ringColor: '',
        }
    },
    'shadow': {
        'slate': { 
            textColor: 'text-slate-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'gray': { 
            textColor: 'text-gray-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'zinc': { 
            textColor: 'text-zinc-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'neutral': { 
            textColor: 'text-neutral-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'stone': { 
            textColor: 'text-stone-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'red': { 
            textColor: 'text-red-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'orange': { 
            textColor: 'text-amber-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'amber': { 
            textColor: 'text-amber-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'yellow': { 
            textColor: 'text-yellow-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'lime': { 
            textColor: 'text-lime-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'green': { 
            textColor: 'text-green-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'emerald': { 
            textColor: 'text-emerald-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'teal': { 
            textColor: 'text-teal-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'cyan': { 
            textColor: 'text-cyan-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'sky': { 
            textColor: 'text-sky-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'blue': { 
            textColor: 'text-blue-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'indigo': { 
            textColor: 'text-indigo-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'violet': { 
            textColor: 'text-violet-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'purple': { 
            textColor: 'text-purple-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'fuchsia': { 
            textColor: 'text-fuchsia-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'pink': { 
            textColor: 'text-pink-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        },
        'rose': { 
            textColor: 'text-rose-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-200',
            ringColor: '',
        }
    },
    'solid': {
        'slate': { 
            textColor: 'text-white',
            bgColor: 'bg-slate-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'gray': { 
            textColor: 'text-white',
            bgColor: 'bg-slate-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'zinc': { 
            textColor: 'text-white',
            bgColor: 'bg-zinc-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'neutral': { 
            textColor: 'text-white',
            bgColor: 'bg-neutral-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'stone': { 
            textColor: 'text-white',
            bgColor: 'bg-stone-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'red': { 
            textColor: 'text-white',
            bgColor: 'bg-red-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'orange': { 
            textColor: 'text-white',
            bgColor: 'bg-orange-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'amber': { 
            textColor: 'text-white',
            bgColor: 'bg-amber-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'yellow': { 
            textColor: 'text-white',
            bgColor: 'bg-yellow-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'lime': { 
            textColor: 'text-white',
            bgColor: 'bg-lime-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'green': { 
            textColor: 'text-white',
            bgColor: 'bg-green-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'emerald': { 
            textColor: 'text-white',
            bgColor: 'bg-emerald-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'teal': { 
            textColor: 'text-white',
            bgColor: 'bg-teal-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'cyan': { 
            textColor: 'text-white',
            bgColor: 'bg-cyan-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'sky': { 
            textColor: 'text-white',
            bgColor: 'bg-sky-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'blue': { 
            textColor: 'text-white',
            bgColor: 'bg-blue-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'indigo': { 
            textColor: 'text-white',
            bgColor: 'bg-indigo-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'violet': { 
            textColor: 'text-white',
            bgColor: 'bg-violet-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'purple': { 
            textColor: 'text-white',
            bgColor: 'bg-purple-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'fuchsia': { 
            textColor: 'text-white',
            bgColor: 'bg-fuchsia-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'pink': { 
            textColor: 'text-white',
            bgColor: 'bg-pink-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        },
        'rose': { 
            textColor: 'text-white',
            bgColor: 'bg-rose-500',
            borderColor: 'border-white',
            ringColor: 'ring-gray-200',
        }
    },
    'circled': {
        'slate': { 
            textColor: 'text-slate-500',
            bgColor: 'bg-white',
            borderColor: 'border-slate-500',
            ringColor: 'ring-slate-200',
        },
        'gray': { 
            textColor: 'text-gray-500',
            bgColor: 'bg-white',
            borderColor: 'border-gray-500',
            ringColor: 'ring-gray-200',
        },
        'zinc': { 
            textColor: 'text-zinc-500',
            bgColor: 'bg-white',
            borderColor: 'border-zinc-500',
            ringColor: 'ring-zinc-200',
        },
        'neutral': { 
            textColor: 'text-neutral-500',
            bgColor: 'bg-white',
            borderColor: 'border-neutral-500',
            ringColor: 'ring-neutral-200',
        },
        'stone': { 
            textColor: 'text-stone-500',
            bgColor: 'bg-white',
            borderColor: 'border-stone-500',
            ringColor: 'ring-stone-200',
        },
        'red': { 
            textColor: 'text-red-500',
            bgColor: 'bg-white',
            borderColor: 'border-red-500',
            ringColor: 'ring-red-200',
        },
        'orange': { 
            textColor: 'text-amber-500',
            bgColor: 'bg-white',
            borderColor: 'border-orange-500',
            ringColor: 'ring-orange-200',
        },
        'amber': { 
            textColor: 'text-amber-500',
            bgColor: 'bg-white',
            borderColor: 'border-amber-500',
            ringColor: 'ring-amber-200',
        },
        'yellow': { 
            textColor: 'text-yellow-500',
            bgColor: 'bg-white',
            borderColor: 'border-yellow-500',
            ringColor: 'ring-yellow-200',
        },
        'lime': { 
            textColor: 'text-lime-500',
            bgColor: 'bg-white',
            borderColor: 'border-lime-500',
            ringColor: 'ring-lime-200',
        },
        'green': { 
            textColor: 'text-green-500',
            bgColor: 'bg-white',
            borderColor: 'border-green-500',
            ringColor: 'ring-green-200',
        },
        'emerald': { 
            textColor: 'text-emerald-500',
            bgColor: 'bg-white',
            borderColor: 'border-emerald-500',
            ringColor: 'ring-emerald-200',
        },
        'teal': { 
            textColor: 'text-teal-500',
            bgColor: 'bg-white',
            borderColor: 'border-teal-500',
            ringColor: 'ring-teal-200',
        },
        'cyan': { 
            textColor: 'text-cyan-500',
            bgColor: 'bg-white',
            borderColor: 'border-cyan-500',
            ringColor: 'ring-cyan-200',
        },
        'sky': { 
            textColor: 'text-sky-500',
            bgColor: 'bg-white',
            borderColor: 'border-sky-500',
            ringColor: 'ring-sky-200',
        },
        'blue': { 
            textColor: 'text-blue-500',
            bgColor: 'bg-white',
            borderColor: 'border-blue-500',
            ringColor: 'ring-blue-200',
        },
        'indigo': { 
            textColor: 'text-indigo-500',
            bgColor: 'bg-white',
            borderColor: 'border-indigo-500',
            ringColor: 'ring-indigo-200',
        },
        'violet': { 
            textColor: 'text-violet-500',
            bgColor: 'bg-white',
            borderColor: 'border-violet-500',
            ringColor: 'ring-violet-200',
        },
        'purple': { 
            textColor: 'text-purple-500',
            bgColor: 'bg-white',
            borderColor: 'border-purple-500',
            ringColor: 'ring-purple-200',
        },
        'fuchsia': { 
            textColor: 'text-fuchsia-500',
            bgColor: 'bg-white',
            borderColor: 'border-fuchsia-500',
            ringColor: 'ring-fuchsia-200',
        },
        'pink': { 
            textColor: 'text-pink-500',
            bgColor: 'bg-white',
            borderColor: 'border-pink-500',
            ringColor: 'ring-pink-200',
        },
        'rose': { 
            textColor: 'text-rose-500',
            bgColor: 'bg-white',
            borderColor: 'border-rose-500',
            ringColor: 'ring-rose-200',
        }
    },
};
