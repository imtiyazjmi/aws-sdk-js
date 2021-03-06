import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class PersonalizeEvents extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: PersonalizeEvents.Types.ClientConfiguration)
  config: Config & PersonalizeEvents.Types.ClientConfiguration;
  /**
   * Records user interaction event data. For more information see event-record-api.
   */
  putEvents(params: PersonalizeEvents.Types.PutEventsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Records user interaction event data. For more information see event-record-api.
   */
  putEvents(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace PersonalizeEvents {
  export type _Date = Date;
  export interface Event {
    /**
     * An ID associated with the event. If an event ID is not provided, Amazon Personalize generates a unique ID for the event. An event ID is not used as an input to the model. Amazon Personalize uses the event ID to distinquish unique events. Any subsequent events after the first with the same event ID are not used in model training.
     */
    eventId?: StringType;
    /**
     * The type of event. This property corresponds to the EVENT_TYPE field of the Interactions schema.
     */
    eventType: StringType;
    /**
     * The event value that corresponds to the EVENT_VALUE field of the Interactions schema.
     */
    eventValue?: FloatType;
    /**
     * The item ID key that corresponds to the ITEM_ID field of the Interactions schema.
     */
    itemId?: ItemId;
    /**
     * A string map of event-specific data that you might choose to record. For example, if a user rates a movie on your site, other than movie ID (itemId) and rating (eventValue) , you might also send the number of movie ratings made by the user. Each item in the map consists of a key-value pair. For example,  {"numberOfRatings": "12"}  The keys use camel case names that match the fields in the Interactions schema. In the above example, the numberOfRatings would match the 'NUMBER_OF_RATINGS' field defined in the Interactions schema.
     */
    properties?: EventPropertiesJSON;
    /**
     * The timestamp (in Unix time) on the client side when the event occurred.
     */
    sentAt: _Date;
    /**
     * The ID of the recommendation.
     */
    recommendationId?: RecommendationId;
    /**
     * A list of item IDs that represents the sequence of items you have shown the user. For example, ["itemId1", "itemId2", "itemId3"].
     */
    impression?: Impression;
  }
  export type EventList = Event[];
  export type EventPropertiesJSON = string;
  export type FloatType = number;
  export type Impression = ItemId[];
  export type ItemId = string;
  export interface PutEventsRequest {
    /**
     * The tracking ID for the event. The ID is generated by a call to the CreateEventTracker API.
     */
    trackingId: StringType;
    /**
     * The user associated with the event.
     */
    userId?: UserId;
    /**
     * The session ID associated with the user's visit. Your application generates the sessionId when a user first visits your website or uses your application. Amazon Personalize uses the sessionId to associate events with the user before they log in. For more information see event-record-api.
     */
    sessionId: StringType;
    /**
     * A list of event data from the session.
     */
    eventList: EventList;
  }
  export type RecommendationId = string;
  export type StringType = string;
  export type UserId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-03-22"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the PersonalizeEvents client.
   */
  export import Types = PersonalizeEvents;
}
export = PersonalizeEvents;
