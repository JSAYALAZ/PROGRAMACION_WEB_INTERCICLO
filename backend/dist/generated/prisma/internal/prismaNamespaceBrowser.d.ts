import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly User: "User";
    readonly ProgrammerProfile: "ProgrammerProfile";
    readonly ProgrammerAvailability: "ProgrammerAvailability";
    readonly SocialLink: "SocialLink";
    readonly Portfolio: "Portfolio";
    readonly Project: "Project";
    readonly Booking: "Booking";
    readonly Notification: "Notification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly firebaseUid: "firebaseUid";
    readonly email: "email";
    readonly displayName: "displayName";
    readonly picture: "picture";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deleted: "deleted";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ProgrammerProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly name: "name";
    readonly specialty: "specialty";
    readonly bio: "bio";
    readonly avatarUrl: "avatarUrl";
    readonly contactLinks: "contactLinks";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deleted: "deleted";
};
export type ProgrammerProfileScalarFieldEnum = (typeof ProgrammerProfileScalarFieldEnum)[keyof typeof ProgrammerProfileScalarFieldEnum];
export declare const ProgrammerAvailabilityScalarFieldEnum: {
    readonly id: "id";
    readonly programmerId: "programmerId";
    readonly day: "day";
    readonly startMinutes: "startMinutes";
    readonly endMinutes: "endMinutes";
};
export type ProgrammerAvailabilityScalarFieldEnum = (typeof ProgrammerAvailabilityScalarFieldEnum)[keyof typeof ProgrammerAvailabilityScalarFieldEnum];
export declare const SocialLinkScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly provider: "provider";
    readonly url: "url";
    readonly label: "label";
    readonly order: "order";
    readonly createdAt: "createdAt";
};
export type SocialLinkScalarFieldEnum = (typeof SocialLinkScalarFieldEnum)[keyof typeof SocialLinkScalarFieldEnum];
export declare const PortfolioScalarFieldEnum: {
    readonly id: "id";
    readonly ownerId: "ownerId";
    readonly title: "title";
    readonly description: "description";
    readonly sections: "sections";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deleted: "deleted";
};
export type PortfolioScalarFieldEnum = (typeof PortfolioScalarFieldEnum)[keyof typeof PortfolioScalarFieldEnum];
export declare const ProjectScalarFieldEnum: {
    readonly id: "id";
    readonly portfolioId: "portfolioId";
    readonly title: "title";
    readonly description: "description";
    readonly section: "section";
    readonly participation: "participation";
    readonly technologies: "technologies";
    readonly repositoryUrl: "repositoryUrl";
    readonly liveDemoUrl: "liveDemoUrl";
    readonly images: "images";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deleted: "deleted";
};
export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];
export declare const BookingScalarFieldEnum: {
    readonly id: "id";
    readonly requesterId: "requesterId";
    readonly programmerId: "programmerId";
    readonly date: "date";
    readonly weekday: "weekday";
    readonly hour: "hour";
    readonly durationMin: "durationMin";
    readonly comment: "comment";
    readonly status: "status";
    readonly responseMessage: "responseMessage";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deleted: "deleted";
};
export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly profileId: "profileId";
    readonly title: "title";
    readonly body: "body";
    readonly meta: "meta";
    readonly read: "read";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map