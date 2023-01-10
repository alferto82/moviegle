import { EventData } from '../data/data';
import { eventbus } from '../utils/eventBus';

export const watchLaterEventChannel = eventbus<{
  onRemoveWatchLaterClick: (payload: EventData) => void
}>()