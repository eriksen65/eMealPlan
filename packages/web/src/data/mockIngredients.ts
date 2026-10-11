export interface MockIngredient {
    id: string;
    name: string;
    /** Mock placeholder icon; real product photos follow later. */
    emoji: string;
}

export const MOCK_INGREDIENTS: MockIngredient[] = [
    { id: 'hakket-svinekoed', name: 'Hakket svinekød', emoji: '🥩' },
    { id: 'ingefaerpure', name: 'Ingefærpuré', emoji: '🫚' },
    { id: 'citrongraes', name: 'Citrongræs', emoji: '🌿' },
    { id: 'chilipulver', name: 'Ginger Ninja', emoji: '🧂' },
    { id: 'soed-chilisauce', name: 'Sød chilisauce', emoji: '🫙' },
    { id: 'sojasauce', name: 'Sojasauce', emoji: '🍶' },
    { id: 'udon-nudler', name: 'Udon nudler, tørrede', emoji: '🍜' },
    { id: 'gulerod-julienne', name: 'Gulerod, julienne', emoji: '🥕' },
    { id: 'mynte', name: 'Mynte', emoji: '🌱' },
    { id: 'citrusfrugt', name: 'Citrusfrugt', emoji: '🍋' },
    { id: 'spidskaal', name: 'Spidskål, skåret', emoji: '🥬' },
    { id: 'chili', name: 'Chili', emoji: '🌶️' },
    { id: 'sukkeraerter', name: 'Sukkerærter', emoji: '🫛' }
];
