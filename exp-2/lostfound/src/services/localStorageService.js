const ITEMS_KEY = 'lf_portal_items';
const CLAIMS_KEY = 'lf_portal_claims';

const safeParse = (value, fallback = []) => {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn('Storage parse failed', error);
    return fallback;
  }
};

const persist = (key, payload) => {
  localStorage.setItem(key, JSON.stringify(payload));
  return payload;
};

const generateId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `lf-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
};

export const seedItems = (seed = []) => {
  if (typeof window === 'undefined') return;
  const existing = localStorage.getItem(ITEMS_KEY);
  if (!existing) {
    persist(ITEMS_KEY, seed);
  }
};

export const getItems = () => safeParse(localStorage.getItem(ITEMS_KEY));

export const saveItems = (items) => persist(ITEMS_KEY, items);

export const addItem = (payload) => {
  const items = getItems();
  const nextItem = {
    id: generateId(),
    status: payload.status || 'Lost',
    createdAt: new Date().toISOString(),
    ...payload,
  };
  items.unshift(nextItem);
  saveItems(items);
  return nextItem;
};

export const updateItem = (id, updater) => {
  const items = getItems();
  const nextItems = items.map((item) => {
    if (item.id !== id) return item;
    const changes = typeof updater === 'function' ? updater(item) : updater;
    return { ...item, ...changes };
  });
  return saveItems(nextItems);
};

export const markItemClaimed = (id, claimDetails = {}) => {
  return updateItem(id, (item) => ({
    ...item,
    status: 'Claimed',
    claimDetails,
    claimedAt: new Date().toISOString(),
  }));
};

export const getClaims = () => safeParse(localStorage.getItem(CLAIMS_KEY));

export const addClaim = (payload) => {
  const claims = getClaims();
  const nextClaim = {
    id: generateId(),
    createdAt: new Date().toISOString(),
    ...payload,
  };
  claims.unshift(nextClaim);
  persist(CLAIMS_KEY, claims);
  return nextClaim;
};
