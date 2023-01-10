import { EventData } from '../data/data';
import { eventbus } from '../utils/eventBus';

export const favoriteEventChannel = eventbus<{
  onRemoveFavoriteClick: (payload: EventData) => void
}>()