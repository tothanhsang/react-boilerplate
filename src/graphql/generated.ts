import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  PaginationTake: any;
  Upload: any;
};

export type Anzsic = {
  __typename?: "ANZSIC";
  ANZSICCode?: Maybe<Scalars["String"]>;
  ANZSICDescription?: Maybe<Scalars["String"]>;
  Division?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
};

export type AnzsicCreateInput = {
  ANZSICCode?: InputMaybe<Scalars["String"]>;
  ANZSICDescription?: InputMaybe<Scalars["String"]>;
  Division?: InputMaybe<Scalars["String"]>;
};

export type AnzsicOrderByInput = {
  ANZSICCode?: InputMaybe<OrderDirection>;
  ANZSICDescription?: InputMaybe<OrderDirection>;
  Division?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type AnzsicUpdateArgs = {
  data: AnzsicUpdateInput;
  where: AnzsicWhereUniqueInput;
};

export type AnzsicUpdateInput = {
  ANZSICCode?: InputMaybe<Scalars["String"]>;
  ANZSICDescription?: InputMaybe<Scalars["String"]>;
  Division?: InputMaybe<Scalars["String"]>;
};

export type AnzsicWhereInput = {
  AND?: InputMaybe<Array<AnzsicWhereInput>>;
  ANZSICCode?: InputMaybe<StringNullableFilter>;
  ANZSICDescription?: InputMaybe<StringNullableFilter>;
  Division?: InputMaybe<StringFilter>;
  NOT?: InputMaybe<Array<AnzsicWhereInput>>;
  OR?: InputMaybe<Array<AnzsicWhereInput>>;
  id?: InputMaybe<IdFilter>;
};

export type AnzsicWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type ActivityLog = {
  __typename?: "ActivityLog";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<User>;
  id: Scalars["ID"];
  listContact?: Maybe<ListContact>;
  listContactName?: Maybe<Scalars["String"]>;
  numberContacts?: Maybe<Scalars["Int"]>;
  team?: Maybe<Team>;
  type?: Maybe<ActivityLogTypeType>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userFullName?: Maybe<Scalars["String"]>;
};

export type ActivityLogCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
  listContact?: InputMaybe<ListContactRelateToOneForCreateInput>;
  listContactName?: InputMaybe<Scalars["String"]>;
  numberContacts?: InputMaybe<Scalars["Int"]>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  type?: InputMaybe<ActivityLogTypeType>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  userFullName?: InputMaybe<Scalars["String"]>;
};

export type ActivityLogOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  listContactName?: InputMaybe<OrderDirection>;
  numberContacts?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  userFullName?: InputMaybe<OrderDirection>;
};

export enum ActivityLogTypeType {
  Added = "ADDED",
  Exported = "EXPORTED",
  Moved = "MOVED",
  Starred = "STARRED",
}

export type ActivityLogTypeTypeNullableFilter = {
  equals?: InputMaybe<ActivityLogTypeType>;
  in?: InputMaybe<Array<ActivityLogTypeType>>;
  not?: InputMaybe<ActivityLogTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<ActivityLogTypeType>>;
};

export type ActivityLogUpdateArgs = {
  data: ActivityLogUpdateInput;
  where: ActivityLogWhereUniqueInput;
};

export type ActivityLogUpdateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  listContact?: InputMaybe<ListContactRelateToOneForUpdateInput>;
  listContactName?: InputMaybe<Scalars["String"]>;
  numberContacts?: InputMaybe<Scalars["Int"]>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  type?: InputMaybe<ActivityLogTypeType>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  userFullName?: InputMaybe<Scalars["String"]>;
};

export type ActivityLogWhereInput = {
  AND?: InputMaybe<Array<ActivityLogWhereInput>>;
  NOT?: InputMaybe<Array<ActivityLogWhereInput>>;
  OR?: InputMaybe<Array<ActivityLogWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  listContact?: InputMaybe<ListContactWhereInput>;
  listContactName?: InputMaybe<StringFilter>;
  numberContacts?: InputMaybe<IntNullableFilter>;
  team?: InputMaybe<TeamWhereInput>;
  type?: InputMaybe<ActivityLogTypeTypeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userFullName?: InputMaybe<StringFilter>;
};

export type ActivityLogWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Address = {
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  line1?: InputMaybe<Scalars["String"]>;
  postalCode?: InputMaybe<Scalars["String"]>;
};

export type AddressResponse = {
  __typename?: "AddressResponse";
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  line1?: Maybe<Scalars["String"]>;
  postalCode?: Maybe<Scalars["String"]>;
};

export type AdvancedSettingInput = {
  enable2FA: Scalars["Boolean"];
  enableTrackData: Scalars["Boolean"];
};

export type AuthMutations = {
  __typename?: "AuthMutations";
  acceptMemberInvitation?: Maybe<Member>;
  activateUser?: Maybe<User>;
  changePassword?: Maybe<AuthenticatedUserSuccess>;
  checkExistEmail?: Maybe<Scalars["Boolean"]>;
  closeAccount?: Maybe<Scalars["Boolean"]>;
  login?: Maybe<AuthenticatedUserSuccess>;
  refreshNewToken?: Maybe<AuthenticatedUserSuccess>;
  register?: Maybe<RegisterResponse>;
  rejectMemberInvitation?: Maybe<Member>;
  requestResetPassword?: Maybe<Scalars["Boolean"]>;
  resend2FACodeEmail?: Maybe<Scalars["Boolean"]>;
  resendConfirmationEmail?: Maybe<Scalars["Boolean"]>;
  resetPassword?: Maybe<User>;
  updateUser?: Maybe<User>;
  updateUserPhoto?: Maybe<User>;
  verify2FACode?: Maybe<AuthenticatedUserSuccess>;
};

export type AuthMutationsAcceptMemberInvitationArgs = {
  invitationCode: Scalars["String"];
};

export type AuthMutationsActivateUserArgs = {
  confirmCode: Scalars["String"];
};

export type AuthMutationsChangePasswordArgs = {
  currentPassword: Scalars["String"];
  newPassword: Scalars["String"];
};

export type AuthMutationsCheckExistEmailArgs = {
  email: Scalars["String"];
};

export type AuthMutationsCloseAccountArgs = {
  reason?: InputMaybe<Scalars["String"]>;
  reasonTypes?: InputMaybe<Array<ReasonType>>;
};

export type AuthMutationsLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type AuthMutationsRefreshNewTokenArgs = {
  refreshToken?: InputMaybe<Scalars["String"]>;
};

export type AuthMutationsRegisterArgs = {
  email: Scalars["String"];
  firstName: Scalars["String"];
  invitationCode?: InputMaybe<Scalars["String"]>;
  isMarketingEmail?: InputMaybe<Scalars["Boolean"]>;
  jobTitle?: InputMaybe<Scalars["String"]>;
  lastName: Scalars["String"];
  password: Scalars["String"];
  phoneNumber?: InputMaybe<Scalars["String"]>;
};

export type AuthMutationsRejectMemberInvitationArgs = {
  invitationCode: Scalars["String"];
};

export type AuthMutationsRequestResetPasswordArgs = {
  email: Scalars["String"];
};

export type AuthMutationsResend2FaCodeEmailArgs = {
  email: Scalars["String"];
};

export type AuthMutationsResendConfirmationEmailArgs = {
  email: Scalars["String"];
};

export type AuthMutationsResetPasswordArgs = {
  newPassword: Scalars["String"];
  resetPasswordCode: Scalars["String"];
};

export type AuthMutationsUpdateUserArgs = {
  params: UserUpdateInputParams;
};

export type AuthMutationsUpdateUserPhotoArgs = {
  params: UserUpdateInput;
};

export type AuthMutationsVerify2FaCodeArgs = {
  code: Scalars["String"];
  email: Scalars["String"];
};

export type AuthQueries = {
  __typename?: "AuthQueries";
  getBuyingRoles?: Maybe<Array<StaticValuesOption>>;
  getCompany?: Maybe<Company>;
  getEmployeeTypes?: Maybe<Array<StaticValuesOption>>;
  getListMemberInvites?: Maybe<Array<Invitation>>;
  getMe?: Maybe<User>;
  getRevenueRangeTypes?: Maybe<Array<StaticValuesOption>>;
  getRoles?: Maybe<Array<Role>>;
  getTeamMembers?: Maybe<MemberInfos>;
  getTeams?: Maybe<Array<Team>>;
  getUserMembers?: Maybe<Array<Member>>;
  searchCompanyNames?: Maybe<Array<TextSearchOption>>;
  searchDepartments?: Maybe<Array<Maybe<StaticValuesOption>>>;
  searchIndustries?: Maybe<Array<Sic>>;
  searchPositions?: Maybe<Array<Maybe<StaticValuesOption>>>;
};

export type AuthQueriesGetCompanyArgs = {
  companyId: Scalars["String"];
};

export type AuthQueriesGetTeamMembersArgs = {
  teamId?: InputMaybe<Scalars["String"]>;
};

export type AuthQueriesSearchCompanyNamesArgs = {
  selected?: InputMaybe<Array<Scalars["String"]>>;
  textSearch: Scalars["String"];
};

export type AuthQueriesSearchDepartmentsArgs = {
  selected?: InputMaybe<Array<Scalars["String"]>>;
  textSearch: Scalars["String"];
};

export type AuthQueriesSearchIndustriesArgs = {
  selected?: InputMaybe<Array<Scalars["Int"]>>;
  textSearch: Scalars["String"];
};

export type AuthQueriesSearchPositionsArgs = {
  listId?: InputMaybe<Scalars["String"]>;
  scope?: ScopeSearchPositionEnum;
  selected?: InputMaybe<Array<Scalars["String"]>>;
  textSearch: Scalars["String"];
};

export type AuthenticatedItem = User;

export type AuthenticatedUserSuccess = {
  __typename?: "AuthenticatedUserSuccess";
  accessToken?: Maybe<Scalars["String"]>;
  isSent2FACode?: Maybe<Scalars["Boolean"]>;
  refreshToken?: Maybe<Scalars["String"]>;
};

export type BillingDetails = {
  abn?: InputMaybe<Scalars["String"]>;
  address?: InputMaybe<Address>;
  companyName?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
};

export type BillingDetailsResponse = {
  __typename?: "BillingDetailsResponse";
  abn?: Maybe<Scalars["String"]>;
  address?: Maybe<AddressResponse>;
  companyName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<BooleanFilter>;
};

export enum ChangeContactsActions {
  Add = "add",
  Remove = "remove",
}

export enum ChangeOwnerRoleActions {
  DeleteOldOwner = "DELETE_OLD_OWNER",
  DowngradeToEditor = "DOWNGRADE_TO_EDITOR",
}

export type Companies = {
  __typename?: "Companies";
  data?: Maybe<Array<Company>>;
  skip: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  total: Scalars["Int"];
};

export type Company = {
  __typename?: "Company";
  ABN?: Maybe<Scalars["String"]>;
  ACN?: Maybe<Scalars["String"]>;
  ANZSIC?: Maybe<Scalars["String"]>;
  ASXListed?: Maybe<Scalars["Boolean"]>;
  AboutUs?: Maybe<Scalars["String"]>;
  CompanyName?: Maybe<Scalars["String"]>;
  CompanyName2?: Maybe<Scalars["String"]>;
  CreatedBy?: Maybe<Scalars["String"]>;
  CreatedDateTime?: Maybe<Scalars["DateTime"]>;
  Employee_Range?: Maybe<Scalars["String"]>;
  IsActive?: Maybe<Scalars["Boolean"]>;
  Keywords?: Maybe<Scalars["String"]>;
  LastModifiedBy?: Maybe<Scalars["String"]>;
  LastModifiedDateTime?: Maybe<Scalars["DateTime"]>;
  LinkedInURL?: Maybe<Scalars["String"]>;
  Locations?: Maybe<Scalars["Int"]>;
  OverseasOwned?: Maybe<Scalars["Boolean"]>;
  ParentCountry?: Maybe<Scalars["String"]>;
  ParentID?: Maybe<Scalars["String"]>;
  Revenue_Range?: Maybe<Scalars["String"]>;
  SIC?: Maybe<Scalars["String"]>;
  Website?: Maybe<Scalars["String"]>;
  extCompanyId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

export type CompanyCreateInput = {
  ABN?: InputMaybe<Scalars["String"]>;
  ACN?: InputMaybe<Scalars["String"]>;
  ANZSIC?: InputMaybe<Scalars["String"]>;
  ASXListed?: InputMaybe<Scalars["Boolean"]>;
  AboutUs?: InputMaybe<Scalars["String"]>;
  CompanyName?: InputMaybe<Scalars["String"]>;
  CompanyName2?: InputMaybe<Scalars["String"]>;
  CreatedBy?: InputMaybe<Scalars["String"]>;
  CreatedDateTime?: InputMaybe<Scalars["DateTime"]>;
  Employee_Range?: InputMaybe<Scalars["String"]>;
  IsActive?: InputMaybe<Scalars["Boolean"]>;
  Keywords?: InputMaybe<Scalars["String"]>;
  LastModifiedBy?: InputMaybe<Scalars["String"]>;
  LastModifiedDateTime?: InputMaybe<Scalars["DateTime"]>;
  LinkedInURL?: InputMaybe<Scalars["String"]>;
  Locations?: InputMaybe<Scalars["Int"]>;
  OverseasOwned?: InputMaybe<Scalars["Boolean"]>;
  ParentCountry?: InputMaybe<Scalars["String"]>;
  ParentID?: InputMaybe<Scalars["String"]>;
  Revenue_Range?: InputMaybe<Scalars["String"]>;
  SIC?: InputMaybe<Scalars["String"]>;
  Website?: InputMaybe<Scalars["String"]>;
  extCompanyId?: InputMaybe<Scalars["Int"]>;
};

export type CompanyOrderByInput = {
  ABN?: InputMaybe<OrderDirection>;
  ACN?: InputMaybe<OrderDirection>;
  ANZSIC?: InputMaybe<OrderDirection>;
  ASXListed?: InputMaybe<OrderDirection>;
  AboutUs?: InputMaybe<OrderDirection>;
  CompanyName?: InputMaybe<OrderDirection>;
  CompanyName2?: InputMaybe<OrderDirection>;
  CreatedBy?: InputMaybe<OrderDirection>;
  CreatedDateTime?: InputMaybe<OrderDirection>;
  Employee_Range?: InputMaybe<OrderDirection>;
  IsActive?: InputMaybe<OrderDirection>;
  Keywords?: InputMaybe<OrderDirection>;
  LastModifiedBy?: InputMaybe<OrderDirection>;
  LastModifiedDateTime?: InputMaybe<OrderDirection>;
  LinkedInURL?: InputMaybe<OrderDirection>;
  Locations?: InputMaybe<OrderDirection>;
  OverseasOwned?: InputMaybe<OrderDirection>;
  ParentCountry?: InputMaybe<OrderDirection>;
  ParentID?: InputMaybe<OrderDirection>;
  Revenue_Range?: InputMaybe<OrderDirection>;
  SIC?: InputMaybe<OrderDirection>;
  Website?: InputMaybe<OrderDirection>;
  extCompanyId?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type CompanyRelateToOneForCreateInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  create?: InputMaybe<CompanyCreateInput>;
};

export type CompanyRelateToOneForUpdateInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  create?: InputMaybe<CompanyCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type CompanyUpdateArgs = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpdateInput = {
  ABN?: InputMaybe<Scalars["String"]>;
  ACN?: InputMaybe<Scalars["String"]>;
  ANZSIC?: InputMaybe<Scalars["String"]>;
  ASXListed?: InputMaybe<Scalars["Boolean"]>;
  AboutUs?: InputMaybe<Scalars["String"]>;
  CompanyName?: InputMaybe<Scalars["String"]>;
  CompanyName2?: InputMaybe<Scalars["String"]>;
  CreatedBy?: InputMaybe<Scalars["String"]>;
  CreatedDateTime?: InputMaybe<Scalars["DateTime"]>;
  Employee_Range?: InputMaybe<Scalars["String"]>;
  IsActive?: InputMaybe<Scalars["Boolean"]>;
  Keywords?: InputMaybe<Scalars["String"]>;
  LastModifiedBy?: InputMaybe<Scalars["String"]>;
  LastModifiedDateTime?: InputMaybe<Scalars["DateTime"]>;
  LinkedInURL?: InputMaybe<Scalars["String"]>;
  Locations?: InputMaybe<Scalars["Int"]>;
  OverseasOwned?: InputMaybe<Scalars["Boolean"]>;
  ParentCountry?: InputMaybe<Scalars["String"]>;
  ParentID?: InputMaybe<Scalars["String"]>;
  Revenue_Range?: InputMaybe<Scalars["String"]>;
  SIC?: InputMaybe<Scalars["String"]>;
  Website?: InputMaybe<Scalars["String"]>;
  extCompanyId?: InputMaybe<Scalars["Int"]>;
};

export type CompanyWhereInput = {
  ABN?: InputMaybe<StringNullableFilter>;
  ACN?: InputMaybe<StringNullableFilter>;
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  ANZSIC?: InputMaybe<StringNullableFilter>;
  ASXListed?: InputMaybe<BooleanFilter>;
  AboutUs?: InputMaybe<StringNullableFilter>;
  CompanyName?: InputMaybe<StringNullableFilter>;
  CompanyName2?: InputMaybe<StringNullableFilter>;
  CreatedBy?: InputMaybe<StringNullableFilter>;
  CreatedDateTime?: InputMaybe<DateTimeNullableFilter>;
  Employee_Range?: InputMaybe<StringNullableFilter>;
  IsActive?: InputMaybe<BooleanFilter>;
  Keywords?: InputMaybe<StringNullableFilter>;
  LastModifiedBy?: InputMaybe<StringNullableFilter>;
  LastModifiedDateTime?: InputMaybe<DateTimeNullableFilter>;
  LinkedInURL?: InputMaybe<StringNullableFilter>;
  Locations?: InputMaybe<IntNullableFilter>;
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  OverseasOwned?: InputMaybe<BooleanFilter>;
  ParentCountry?: InputMaybe<StringNullableFilter>;
  ParentID?: InputMaybe<StringNullableFilter>;
  Revenue_Range?: InputMaybe<StringNullableFilter>;
  SIC?: InputMaybe<StringNullableFilter>;
  Website?: InputMaybe<StringNullableFilter>;
  extCompanyId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
};

export type CompanyWhereUniqueInput = {
  extCompanyId?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type Contact = {
  __typename?: "Contact";
  AltMobilePhone?: Maybe<Scalars["String"]>;
  CompanyName?: Maybe<Scalars["String"]>;
  CompanyName2?: Maybe<Scalars["String"]>;
  ContactLinkedInURL?: Maybe<Scalars["String"]>;
  Email?: Maybe<Scalars["String"]>;
  FullName?: Maybe<Scalars["String"]>;
  GivenName?: Maybe<Scalars["String"]>;
  MobilePhone?: Maybe<Scalars["String"]>;
  PositionName?: Maybe<Scalars["String"]>;
  Surname?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<User>;
  creditUsed?: Maybe<Scalars["Int"]>;
  extCompanyId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  isRevealed?: Maybe<Scalars["Boolean"]>;
  isVIP?: Maybe<Scalars["Boolean"]>;
  lastUpdate?: Maybe<Scalars["DateTime"]>;
  nameCreatedBy?: Maybe<Scalars["String"]>;
  prospect?: Maybe<Prospect>;
  team?: Maybe<Team>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ContactCreateInput = {
  AltMobilePhone?: InputMaybe<Scalars["String"]>;
  CompanyName?: InputMaybe<Scalars["String"]>;
  CompanyName2?: InputMaybe<Scalars["String"]>;
  ContactLinkedInURL?: InputMaybe<Scalars["String"]>;
  Email?: InputMaybe<Scalars["String"]>;
  FullName?: InputMaybe<Scalars["String"]>;
  GivenName?: InputMaybe<Scalars["String"]>;
  MobilePhone?: InputMaybe<Scalars["String"]>;
  PositionName?: InputMaybe<Scalars["String"]>;
  Surname?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
  creditUsed?: InputMaybe<Scalars["Int"]>;
  extCompanyId?: InputMaybe<Scalars["Int"]>;
  isVIP?: InputMaybe<Scalars["Boolean"]>;
  lastUpdate?: InputMaybe<Scalars["DateTime"]>;
  nameCreatedBy?: InputMaybe<Scalars["String"]>;
  prospect?: InputMaybe<ProspectRelateToOneForCreateInput>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ContactManyRelationFilter = {
  every?: InputMaybe<ContactWhereInput>;
  none?: InputMaybe<ContactWhereInput>;
  some?: InputMaybe<ContactWhereInput>;
};

export type ContactOrderByInput = {
  AltMobilePhone?: InputMaybe<OrderDirection>;
  CompanyName?: InputMaybe<OrderDirection>;
  CompanyName2?: InputMaybe<OrderDirection>;
  ContactLinkedInURL?: InputMaybe<OrderDirection>;
  Email?: InputMaybe<OrderDirection>;
  FullName?: InputMaybe<OrderDirection>;
  GivenName?: InputMaybe<OrderDirection>;
  MobilePhone?: InputMaybe<OrderDirection>;
  PositionName?: InputMaybe<OrderDirection>;
  Surname?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  creditUsed?: InputMaybe<OrderDirection>;
  extCompanyId?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isVIP?: InputMaybe<OrderDirection>;
  lastUpdate?: InputMaybe<OrderDirection>;
  nameCreatedBy?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ContactRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ContactWhereUniqueInput>>;
  create?: InputMaybe<Array<ContactCreateInput>>;
};

export type ContactRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ContactWhereUniqueInput>>;
  create?: InputMaybe<Array<ContactCreateInput>>;
  disconnect?: InputMaybe<Array<ContactWhereUniqueInput>>;
  set?: InputMaybe<Array<ContactWhereUniqueInput>>;
};

export type ContactRelateToOneForCreateInput = {
  connect?: InputMaybe<ContactWhereUniqueInput>;
  create?: InputMaybe<ContactCreateInput>;
};

export type ContactRelateToOneForUpdateInput = {
  connect?: InputMaybe<ContactWhereUniqueInput>;
  create?: InputMaybe<ContactCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type ContactUpdateArgs = {
  data: ContactUpdateInput;
  where: ContactWhereUniqueInput;
};

export type ContactUpdateInput = {
  AltMobilePhone?: InputMaybe<Scalars["String"]>;
  CompanyName?: InputMaybe<Scalars["String"]>;
  CompanyName2?: InputMaybe<Scalars["String"]>;
  ContactLinkedInURL?: InputMaybe<Scalars["String"]>;
  Email?: InputMaybe<Scalars["String"]>;
  FullName?: InputMaybe<Scalars["String"]>;
  GivenName?: InputMaybe<Scalars["String"]>;
  MobilePhone?: InputMaybe<Scalars["String"]>;
  PositionName?: InputMaybe<Scalars["String"]>;
  Surname?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  creditUsed?: InputMaybe<Scalars["Int"]>;
  extCompanyId?: InputMaybe<Scalars["Int"]>;
  isVIP?: InputMaybe<Scalars["Boolean"]>;
  lastUpdate?: InputMaybe<Scalars["DateTime"]>;
  nameCreatedBy?: InputMaybe<Scalars["String"]>;
  prospect?: InputMaybe<ProspectRelateToOneForUpdateInput>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ContactUpdateInputParams = {
  isVIP?: InputMaybe<Scalars["Boolean"]>;
};

export type ContactWhereInput = {
  AND?: InputMaybe<Array<ContactWhereInput>>;
  AltMobilePhone?: InputMaybe<StringNullableFilter>;
  CompanyName?: InputMaybe<StringFilter>;
  CompanyName2?: InputMaybe<StringFilter>;
  ContactLinkedInURL?: InputMaybe<StringNullableFilter>;
  Email?: InputMaybe<StringNullableFilter>;
  FullName?: InputMaybe<StringFilter>;
  GivenName?: InputMaybe<StringNullableFilter>;
  MobilePhone?: InputMaybe<StringNullableFilter>;
  NOT?: InputMaybe<Array<ContactWhereInput>>;
  OR?: InputMaybe<Array<ContactWhereInput>>;
  PositionName?: InputMaybe<StringNullableFilter>;
  Surname?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  creditUsed?: InputMaybe<IntNullableFilter>;
  extCompanyId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isVIP?: InputMaybe<BooleanFilter>;
  lastUpdate?: InputMaybe<DateTimeNullableFilter>;
  nameCreatedBy?: InputMaybe<StringFilter>;
  prospect?: InputMaybe<ProspectWhereInput>;
  team?: InputMaybe<TeamWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type ContactWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Contacts = {
  __typename?: "Contacts";
  data?: Maybe<Array<Contact>>;
  skip: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  total: Scalars["Int"];
};

export type Coupon = {
  __typename?: "Coupon";
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  currency?: Maybe<Scalars["String"]>;
  discountType?: Maybe<CouponDiscountTypeType>;
  discountValue?: Maybe<Scalars["Float"]>;
  duration?: Maybe<CouponDurationType>;
  durationInMonths?: Maybe<Scalars["Int"]>;
  endDate?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  maxRedemptions?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  stripeCouponId?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  valid?: Maybe<Scalars["Boolean"]>;
};

export type CouponCreateInput = {
  code?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  currency?: InputMaybe<Scalars["String"]>;
  discountType?: InputMaybe<CouponDiscountTypeType>;
  discountValue?: InputMaybe<Scalars["Float"]>;
  duration?: InputMaybe<CouponDurationType>;
  durationInMonths?: InputMaybe<Scalars["Int"]>;
  endDate?: InputMaybe<Scalars["DateTime"]>;
  maxRedemptions?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["DateTime"]>;
  stripeCouponId?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  valid?: InputMaybe<Scalars["Boolean"]>;
};

export enum CouponDiscountTypeType {
  AmountOff = "amount_off",
  PercentOff = "percent_off",
}

export type CouponDiscountTypeTypeNullableFilter = {
  equals?: InputMaybe<CouponDiscountTypeType>;
  in?: InputMaybe<Array<CouponDiscountTypeType>>;
  not?: InputMaybe<CouponDiscountTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<CouponDiscountTypeType>>;
};

export enum CouponDurationType {
  Forever = "forever",
  Once = "once",
  Repeating = "repeating",
}

export type CouponDurationTypeNullableFilter = {
  equals?: InputMaybe<CouponDurationType>;
  in?: InputMaybe<Array<CouponDurationType>>;
  not?: InputMaybe<CouponDurationTypeNullableFilter>;
  notIn?: InputMaybe<Array<CouponDurationType>>;
};

export type CouponManyRelationFilter = {
  every?: InputMaybe<CouponWhereInput>;
  none?: InputMaybe<CouponWhereInput>;
  some?: InputMaybe<CouponWhereInput>;
};

export type CouponOrderByInput = {
  code?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  currency?: InputMaybe<OrderDirection>;
  discountType?: InputMaybe<OrderDirection>;
  discountValue?: InputMaybe<OrderDirection>;
  duration?: InputMaybe<OrderDirection>;
  durationInMonths?: InputMaybe<OrderDirection>;
  endDate?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  maxRedemptions?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  startDate?: InputMaybe<OrderDirection>;
  stripeCouponId?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  valid?: InputMaybe<OrderDirection>;
};

export type CouponRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CouponWhereUniqueInput>>;
  create?: InputMaybe<Array<CouponCreateInput>>;
};

export type CouponRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CouponWhereUniqueInput>>;
  create?: InputMaybe<Array<CouponCreateInput>>;
  disconnect?: InputMaybe<Array<CouponWhereUniqueInput>>;
  set?: InputMaybe<Array<CouponWhereUniqueInput>>;
};

export type CouponRelateToOneForCreateInput = {
  connect?: InputMaybe<CouponWhereUniqueInput>;
  create?: InputMaybe<CouponCreateInput>;
};

export type CouponRelateToOneForUpdateInput = {
  connect?: InputMaybe<CouponWhereUniqueInput>;
  create?: InputMaybe<CouponCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type CouponUpdateArgs = {
  data: CouponUpdateInput;
  where: CouponWhereUniqueInput;
};

export type CouponUpdateInput = {
  code?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  currency?: InputMaybe<Scalars["String"]>;
  discountType?: InputMaybe<CouponDiscountTypeType>;
  discountValue?: InputMaybe<Scalars["Float"]>;
  duration?: InputMaybe<CouponDurationType>;
  durationInMonths?: InputMaybe<Scalars["Int"]>;
  endDate?: InputMaybe<Scalars["DateTime"]>;
  maxRedemptions?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["DateTime"]>;
  stripeCouponId?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  valid?: InputMaybe<Scalars["Boolean"]>;
};

export type CouponWhereInput = {
  AND?: InputMaybe<Array<CouponWhereInput>>;
  NOT?: InputMaybe<Array<CouponWhereInput>>;
  OR?: InputMaybe<Array<CouponWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currency?: InputMaybe<StringFilter>;
  discountType?: InputMaybe<CouponDiscountTypeTypeNullableFilter>;
  discountValue?: InputMaybe<FloatFilter>;
  duration?: InputMaybe<CouponDurationTypeNullableFilter>;
  durationInMonths?: InputMaybe<IntNullableFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  maxRedemptions?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  stripeCouponId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  valid?: InputMaybe<BooleanFilter>;
};

export type CouponWhereUniqueInput = {
  code?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars["String"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type CreditHistories = {
  __typename?: "CreditHistories";
  data?: Maybe<Array<CreditHistory>>;
  skip: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  total: Scalars["Int"];
  totalCredits: Scalars["Int"];
};

export type CreditHistory = {
  __typename?: "CreditHistory";
  amount?: Maybe<Scalars["Int"]>;
  createDate?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<User>;
  creditBalance?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  isHasClaims?: Maybe<Scalars["Boolean"]>;
  metadata?: Maybe<Scalars["JSON"]>;
  team?: Maybe<Team>;
  type?: Maybe<CreditHistoryTypeType>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CreditHistoryCreateInput = {
  amount?: InputMaybe<Scalars["Int"]>;
  createDate?: InputMaybe<Scalars["DateTime"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
  creditBalance?: InputMaybe<Scalars["Int"]>;
  metadata?: InputMaybe<Scalars["JSON"]>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  type?: InputMaybe<CreditHistoryTypeType>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CreditHistoryOrderByInput = {
  amount?: InputMaybe<OrderDirection>;
  createDate?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  creditBalance?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CreditHistoryRelateToOneForCreateInput = {
  connect?: InputMaybe<CreditHistoryWhereUniqueInput>;
  create?: InputMaybe<CreditHistoryCreateInput>;
};

export type CreditHistoryRelateToOneForUpdateInput = {
  connect?: InputMaybe<CreditHistoryWhereUniqueInput>;
  create?: InputMaybe<CreditHistoryCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export enum CreditHistoryTypeType {
  All = "all",
  Monthly = "monthly",
  Return = "return",
  Rollover = "rollover",
  Topup = "topup",
  Used = "used",
}

export type CreditHistoryTypeTypeNullableFilter = {
  equals?: InputMaybe<CreditHistoryTypeType>;
  in?: InputMaybe<Array<CreditHistoryTypeType>>;
  not?: InputMaybe<CreditHistoryTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<CreditHistoryTypeType>>;
};

export type CreditHistoryUpdateArgs = {
  data: CreditHistoryUpdateInput;
  where: CreditHistoryWhereUniqueInput;
};

export type CreditHistoryUpdateInput = {
  amount?: InputMaybe<Scalars["Int"]>;
  createDate?: InputMaybe<Scalars["DateTime"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  creditBalance?: InputMaybe<Scalars["Int"]>;
  metadata?: InputMaybe<Scalars["JSON"]>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  type?: InputMaybe<CreditHistoryTypeType>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CreditHistoryWhereInput = {
  AND?: InputMaybe<Array<CreditHistoryWhereInput>>;
  NOT?: InputMaybe<Array<CreditHistoryWhereInput>>;
  OR?: InputMaybe<Array<CreditHistoryWhereInput>>;
  amount?: InputMaybe<IntNullableFilter>;
  createDate?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  creditBalance?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
  team?: InputMaybe<TeamWhereInput>;
  type?: InputMaybe<CreditHistoryTypeTypeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type CreditHistoryWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type CronLog = {
  __typename?: "CronLog";
  createdAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  message?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CronLogCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  message?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CronLogOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  message?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CronLogUpdateArgs = {
  data: CronLogUpdateInput;
  where: CronLogWhereUniqueInput;
};

export type CronLogUpdateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  message?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CronLogWhereInput = {
  AND?: InputMaybe<Array<CronLogWhereInput>>;
  NOT?: InputMaybe<Array<CronLogWhereInput>>;
  OR?: InputMaybe<Array<CronLogWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  message?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type CronLogWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type CronMutations = {
  __typename?: "CronMutations";
  handleDataClaimed?: Maybe<Scalars["Boolean"]>;
  jobRemoveSubscriptionExpired?: Maybe<Scalars["Boolean"]>;
  jobSendEmailCreditCardExpired?: Maybe<Scalars["Boolean"]>;
  jobUpdateCouponValid?: Maybe<Scalars["Boolean"]>;
  jobUpdatePaidInvoice?: Maybe<Scalars["Boolean"]>;
  jobUpdateRollOver?: Maybe<Scalars["Boolean"]>;
  syncProspectFields?: Maybe<Scalars["Boolean"]>;
  syncTeamInvoices?: Maybe<Scalars["Boolean"]>;
  updateContactsTotal?: Maybe<Scalars["Boolean"]>;
};

export type CronMutationsHandleDataClaimedArgs = {
  teamId: Scalars["String"];
};

export type CusDataClaimInput = {
  claimType?: InputMaybe<ClaimTypeEnums>;
  comment?: InputMaybe<Scalars["String"]>;
  contact?: InputMaybe<ContactRelateToOneForUpdateInput>;
  linkedinURL?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type CusPlanCreateInput = {
  codeName?: InputMaybe<Scalars["String"]>;
  couponExclude?: InputMaybe<CouponRelateToManyForCreateInput>;
  couponInclude?: InputMaybe<CouponRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  features?: InputMaybe<Scalars["JSON"]>;
  monthlyCredits?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  numberUsers?: InputMaybe<Scalars["Int"]>;
  stripeProductId?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<PlanTypeType>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CusPlanUpdateInput = {
  couponExclude?: InputMaybe<CouponRelateToManyForUpdateInput>;
  couponInclude?: InputMaybe<CouponRelateToManyForUpdateInput>;
  description?: InputMaybe<Scalars["String"]>;
  features?: InputMaybe<Scalars["JSON"]>;
  monthlyCredits?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  numberUsers?: InputMaybe<Scalars["Int"]>;
};

export type CusSubscriptionUpdateInput = {
  couponCode?: InputMaybe<Scalars["String"]>;
};

export type DataClaim = {
  __typename?: "DataClaim";
  claimAt?: Maybe<Scalars["DateTime"]>;
  claimType?: Maybe<DataClaimClaimTypeType>;
  comment?: Maybe<Scalars["String"]>;
  contact?: Maybe<Contact>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<User>;
  creditHistory?: Maybe<CreditHistory>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  linkedinURL?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<DataClaimStatusType>;
  team?: Maybe<Team>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export enum DataClaimClaimTypeType {
  Company = "company",
  Email = "email",
  Nodata = "nodata",
  Other = "other",
  Phone = "phone",
  Phone2 = "phone2",
}

export type DataClaimClaimTypeTypeNullableFilter = {
  equals?: InputMaybe<DataClaimClaimTypeType>;
  in?: InputMaybe<Array<DataClaimClaimTypeType>>;
  not?: InputMaybe<DataClaimClaimTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<DataClaimClaimTypeType>>;
};

export type DataClaimCreateInput = {
  claimAt?: InputMaybe<Scalars["DateTime"]>;
  claimType?: InputMaybe<DataClaimClaimTypeType>;
  comment?: InputMaybe<Scalars["String"]>;
  contact?: InputMaybe<ContactRelateToOneForCreateInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
  creditHistory?: InputMaybe<CreditHistoryRelateToOneForCreateInput>;
  email?: InputMaybe<Scalars["String"]>;
  linkedinURL?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<DataClaimStatusType>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type DataClaimOrderByInput = {
  claimAt?: InputMaybe<OrderDirection>;
  claimType?: InputMaybe<OrderDirection>;
  comment?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  linkedinURL?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export enum DataClaimStatusType {
  Pending = "pending",
  Resolved = "resolved",
}

export type DataClaimStatusTypeNullableFilter = {
  equals?: InputMaybe<DataClaimStatusType>;
  in?: InputMaybe<Array<DataClaimStatusType>>;
  not?: InputMaybe<DataClaimStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<DataClaimStatusType>>;
};

export type DataClaimUpdateArgs = {
  data: DataClaimUpdateInput;
  where: DataClaimWhereUniqueInput;
};

export type DataClaimUpdateInput = {
  claimAt?: InputMaybe<Scalars["DateTime"]>;
  claimType?: InputMaybe<DataClaimClaimTypeType>;
  comment?: InputMaybe<Scalars["String"]>;
  contact?: InputMaybe<ContactRelateToOneForUpdateInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  creditHistory?: InputMaybe<CreditHistoryRelateToOneForUpdateInput>;
  email?: InputMaybe<Scalars["String"]>;
  linkedinURL?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<DataClaimStatusType>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type DataClaimWhereInput = {
  AND?: InputMaybe<Array<DataClaimWhereInput>>;
  NOT?: InputMaybe<Array<DataClaimWhereInput>>;
  OR?: InputMaybe<Array<DataClaimWhereInput>>;
  claimAt?: InputMaybe<DateTimeNullableFilter>;
  claimType?: InputMaybe<DataClaimClaimTypeTypeNullableFilter>;
  comment?: InputMaybe<StringFilter>;
  contact?: InputMaybe<ContactWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  creditHistory?: InputMaybe<CreditHistoryWhereInput>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  linkedinURL?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<DataClaimStatusTypeNullableFilter>;
  team?: InputMaybe<TeamWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type DataClaimWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type DataClaims = {
  __typename?: "DataClaims";
  data?: Maybe<Array<DataClaim>>;
  skip: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  total: Scalars["Int"];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type EmployeeStatistic = {
  __typename?: "EmployeeStatistic";
  count?: Maybe<Scalars["Int"]>;
  label?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<FloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars["ID"]>;
  gt?: InputMaybe<Scalars["ID"]>;
  gte?: InputMaybe<Scalars["ID"]>;
  in?: InputMaybe<Array<Scalars["ID"]>>;
  lt?: InputMaybe<Scalars["ID"]>;
  lte?: InputMaybe<Scalars["ID"]>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars["ID"]>>;
};

export enum ImageExtension {
  Gif = "gif",
  Jpg = "jpg",
  Png = "png",
  Webp = "webp",
}

export type ImageFieldInput = {
  upload: Scalars["Upload"];
};

export type ImageFieldOutput = {
  __typename?: "ImageFieldOutput";
  extension: ImageExtension;
  filesize: Scalars["Int"];
  height: Scalars["Int"];
  id: Scalars["ID"];
  url: Scalars["String"];
  width: Scalars["Int"];
};

export type IntFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type Invitation = {
  __typename?: "Invitation";
  createdAt?: Maybe<Scalars["DateTime"]>;
  firstName?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  invitationCode?: Maybe<Scalars["String"]>;
  invitationCodeIat?: Maybe<Scalars["DateTime"]>;
  inviteStatus?: Maybe<InvitationInviteStatusType>;
  invitedEmail?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  role?: Maybe<Role>;
  team?: Maybe<Team>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<User>;
};

export type InvitationCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  invitationCode?: InputMaybe<Scalars["String"]>;
  invitationCodeIat?: InputMaybe<Scalars["DateTime"]>;
  inviteStatus?: InputMaybe<InvitationInviteStatusType>;
  invitedEmail?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<RoleRelateToOneForCreateInput>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export enum InvitationInviteStatusType {
  Accepted = "ACCEPTED",
  Pending = "PENDING",
  Rejected = "REJECTED",
}

export type InvitationInviteStatusTypeNullableFilter = {
  equals?: InputMaybe<InvitationInviteStatusType>;
  in?: InputMaybe<Array<InvitationInviteStatusType>>;
  not?: InputMaybe<InvitationInviteStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<InvitationInviteStatusType>>;
};

export type InvitationMemberInfo = {
  __typename?: "InvitationMemberInfo";
  invitation?: Maybe<Invitation>;
  isExpired?: Maybe<Scalars["Boolean"]>;
  isRegUser?: Maybe<Scalars["Boolean"]>;
};

export type InvitationOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  invitationCode?: InputMaybe<OrderDirection>;
  invitationCodeIat?: InputMaybe<OrderDirection>;
  inviteStatus?: InputMaybe<OrderDirection>;
  invitedEmail?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type InvitationUpdateArgs = {
  data: InvitationUpdateInput;
  where: InvitationWhereUniqueInput;
};

export type InvitationUpdateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  invitationCode?: InputMaybe<Scalars["String"]>;
  invitationCodeIat?: InputMaybe<Scalars["DateTime"]>;
  inviteStatus?: InputMaybe<InvitationInviteStatusType>;
  invitedEmail?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<RoleRelateToOneForUpdateInput>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type InvitationWhereInput = {
  AND?: InputMaybe<Array<InvitationWhereInput>>;
  NOT?: InputMaybe<Array<InvitationWhereInput>>;
  OR?: InputMaybe<Array<InvitationWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  invitationCode?: InputMaybe<StringNullableFilter>;
  invitationCodeIat?: InputMaybe<DateTimeNullableFilter>;
  inviteStatus?: InputMaybe<InvitationInviteStatusTypeNullableFilter>;
  invitedEmail?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  role?: InputMaybe<RoleWhereInput>;
  team?: InputMaybe<TeamWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type InvitationWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Invoice = {
  __typename?: "Invoice";
  amountPaid?: Maybe<Scalars["Float"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  invoicePDF?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["String"]>;
  period?: Maybe<Scalars["String"]>;
  stripeInvoiceId?: Maybe<Scalars["String"]>;
  stripeSubscriptionId?: Maybe<Scalars["String"]>;
  team?: Maybe<Team>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type InvoiceCreateInput = {
  amountPaid?: InputMaybe<Scalars["Float"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  invoicePDF?: InputMaybe<Scalars["String"]>;
  number?: InputMaybe<Scalars["String"]>;
  period?: InputMaybe<Scalars["String"]>;
  stripeInvoiceId?: InputMaybe<Scalars["String"]>;
  stripeSubscriptionId?: InputMaybe<Scalars["String"]>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type InvoiceOrderByInput = {
  amountPaid?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  invoicePDF?: InputMaybe<OrderDirection>;
  number?: InputMaybe<OrderDirection>;
  period?: InputMaybe<OrderDirection>;
  stripeInvoiceId?: InputMaybe<OrderDirection>;
  stripeSubscriptionId?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type InvoiceUpdateArgs = {
  data: InvoiceUpdateInput;
  where: InvoiceWhereUniqueInput;
};

export type InvoiceUpdateInput = {
  amountPaid?: InputMaybe<Scalars["Float"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  invoicePDF?: InputMaybe<Scalars["String"]>;
  number?: InputMaybe<Scalars["String"]>;
  period?: InputMaybe<Scalars["String"]>;
  stripeInvoiceId?: InputMaybe<Scalars["String"]>;
  stripeSubscriptionId?: InputMaybe<Scalars["String"]>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type InvoiceWhereInput = {
  AND?: InputMaybe<Array<InvoiceWhereInput>>;
  NOT?: InputMaybe<Array<InvoiceWhereInput>>;
  OR?: InputMaybe<Array<InvoiceWhereInput>>;
  amountPaid?: InputMaybe<FloatNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  invoicePDF?: InputMaybe<StringFilter>;
  number?: InputMaybe<StringFilter>;
  period?: InputMaybe<StringFilter>;
  stripeInvoiceId?: InputMaybe<StringFilter>;
  stripeSubscriptionId?: InputMaybe<StringFilter>;
  team?: InputMaybe<TeamWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type InvoiceWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Invoices = {
  __typename?: "Invoices";
  data?: Maybe<Array<Invoice>>;
  skip: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  total: Scalars["Int"];
};

export type KeystoneAdminMeta = {
  __typename?: "KeystoneAdminMeta";
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars["String"];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: "KeystoneAdminUIFieldGroupMeta";
  description?: Maybe<Scalars["String"]>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars["String"];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: "KeystoneAdminUIFieldMeta";
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  fieldMeta?: Maybe<Scalars["JSON"]>;
  isFilterable: Scalars["Boolean"];
  isOrderable: Scalars["Boolean"];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars["String"];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars["String"];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars["Int"];
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: "KeystoneAdminUIFieldMetaCreateView";
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: "KeystoneAdminUIFieldMetaItemView";
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
  Read = "read",
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = "form",
  Sidebar = "sidebar",
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: "KeystoneAdminUIFieldMetaListView";
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = "hidden",
  Read = "read",
}

export type KeystoneAdminUiListMeta = {
  __typename?: "KeystoneAdminUIListMeta";
  description?: Maybe<Scalars["String"]>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars["Boolean"];
  hideDelete: Scalars["Boolean"];
  initialColumns: Array<Scalars["String"]>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars["Boolean"];
  isSingleton: Scalars["Boolean"];
  itemQueryName: Scalars["String"];
  key: Scalars["String"];
  label: Scalars["String"];
  labelField: Scalars["String"];
  listQueryName: Scalars["String"];
  pageSize: Scalars["Int"];
  path: Scalars["String"];
  plural: Scalars["String"];
  singular: Scalars["String"];
};

export type KeystoneAdminUiSort = {
  __typename?: "KeystoneAdminUISort";
  direction: KeystoneAdminUiSortDirection;
  field: Scalars["String"];
};

export enum KeystoneAdminUiSortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export type KeystoneMeta = {
  __typename?: "KeystoneMeta";
  adminMeta: KeystoneAdminMeta;
};

export type ListContact = {
  __typename?: "ListContact";
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars["Int"]>;
  contactsTotal?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<User>;
  id: Scalars["ID"];
  isPublic?: Maybe<Scalars["Boolean"]>;
  isVIP?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  nameCreatedBy?: Maybe<Scalars["String"]>;
  team?: Maybe<Team>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ListContactContactsArgs = {
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: ContactWhereInput;
};

export type ListContactContactsCountArgs = {
  where?: ContactWhereInput;
};

export type ListContactCreateInput = {
  contacts?: InputMaybe<ContactRelateToManyForCreateInput>;
  contactsTotal?: InputMaybe<Scalars["Int"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
  isPublic?: InputMaybe<Scalars["Boolean"]>;
  isVIP?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  nameCreatedBy?: InputMaybe<Scalars["String"]>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ListContactOrderByInput = {
  contactsTotal?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isPublic?: InputMaybe<OrderDirection>;
  isVIP?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  nameCreatedBy?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ListContactRelateToOneForCreateInput = {
  connect?: InputMaybe<ListContactWhereUniqueInput>;
  create?: InputMaybe<ListContactCreateInput>;
};

export type ListContactRelateToOneForUpdateInput = {
  connect?: InputMaybe<ListContactWhereUniqueInput>;
  create?: InputMaybe<ListContactCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type ListContactUpdateArgs = {
  data: ListContactUpdateInput;
  where: ListContactWhereUniqueInput;
};

export type ListContactUpdateInput = {
  contacts?: InputMaybe<ContactRelateToManyForUpdateInput>;
  contactsTotal?: InputMaybe<Scalars["Int"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  isPublic?: InputMaybe<Scalars["Boolean"]>;
  isVIP?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  nameCreatedBy?: InputMaybe<Scalars["String"]>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ListContactUpdateInputParams = {
  isPublic?: InputMaybe<Scalars["Boolean"]>;
  isVIP?: InputMaybe<Scalars["Boolean"]>;
};

export type ListContactWhereInput = {
  AND?: InputMaybe<Array<ListContactWhereInput>>;
  NOT?: InputMaybe<Array<ListContactWhereInput>>;
  OR?: InputMaybe<Array<ListContactWhereInput>>;
  contacts?: InputMaybe<ContactManyRelationFilter>;
  contactsTotal?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  isPublic?: InputMaybe<BooleanFilter>;
  isVIP?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  nameCreatedBy?: InputMaybe<StringFilter>;
  team?: InputMaybe<TeamWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type ListContactWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type ListContacts = {
  __typename?: "ListContacts";
  data?: Maybe<Array<ListContact>>;
  skip: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  total: Scalars["Int"];
};

export type Location = {
  __typename?: "Location";
  Address?: Maybe<Scalars["String"]>;
  Company?: Maybe<Company>;
  Country?: Maybe<Scalars["String"]>;
  CreatedBy?: Maybe<Scalars["String"]>;
  CreatedDateTime?: Maybe<Scalars["DateTime"]>;
  FullAddress?: Maybe<Scalars["String"]>;
  GeneralEmailAddress?: Maybe<Scalars["String"]>;
  HeadOffice?: Maybe<Scalars["Boolean"]>;
  IsActive?: Maybe<Scalars["Boolean"]>;
  LastModifiedBy?: Maybe<Scalars["String"]>;
  LastModifiedDateTime?: Maybe<Scalars["DateTime"]>;
  Locality?: Maybe<Scalars["String"]>;
  LocationName?: Maybe<Scalars["String"]>;
  Phone?: Maybe<Scalars["String"]>;
  Postcode?: Maybe<Scalars["String"]>;
  State?: Maybe<Scalars["String"]>;
  extLocationId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

export type LocationCreateInput = {
  Address?: InputMaybe<Scalars["String"]>;
  Company?: InputMaybe<CompanyRelateToOneForCreateInput>;
  Country?: InputMaybe<Scalars["String"]>;
  CreatedBy?: InputMaybe<Scalars["String"]>;
  CreatedDateTime?: InputMaybe<Scalars["DateTime"]>;
  FullAddress?: InputMaybe<Scalars["String"]>;
  GeneralEmailAddress?: InputMaybe<Scalars["String"]>;
  HeadOffice?: InputMaybe<Scalars["Boolean"]>;
  IsActive?: InputMaybe<Scalars["Boolean"]>;
  LastModifiedBy?: InputMaybe<Scalars["String"]>;
  LastModifiedDateTime?: InputMaybe<Scalars["DateTime"]>;
  Locality?: InputMaybe<Scalars["String"]>;
  LocationName?: InputMaybe<Scalars["String"]>;
  Phone?: InputMaybe<Scalars["String"]>;
  Postcode?: InputMaybe<Scalars["String"]>;
  State?: InputMaybe<Scalars["String"]>;
  extLocationId?: InputMaybe<Scalars["Int"]>;
};

export type LocationOrderByInput = {
  Address?: InputMaybe<OrderDirection>;
  Country?: InputMaybe<OrderDirection>;
  CreatedBy?: InputMaybe<OrderDirection>;
  CreatedDateTime?: InputMaybe<OrderDirection>;
  FullAddress?: InputMaybe<OrderDirection>;
  GeneralEmailAddress?: InputMaybe<OrderDirection>;
  HeadOffice?: InputMaybe<OrderDirection>;
  IsActive?: InputMaybe<OrderDirection>;
  LastModifiedBy?: InputMaybe<OrderDirection>;
  LastModifiedDateTime?: InputMaybe<OrderDirection>;
  Locality?: InputMaybe<OrderDirection>;
  LocationName?: InputMaybe<OrderDirection>;
  Phone?: InputMaybe<OrderDirection>;
  Postcode?: InputMaybe<OrderDirection>;
  State?: InputMaybe<OrderDirection>;
  extLocationId?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type LocationRelateToOneForCreateInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  create?: InputMaybe<LocationCreateInput>;
};

export type LocationRelateToOneForUpdateInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  create?: InputMaybe<LocationCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type LocationUpdateArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};

export type LocationUpdateInput = {
  Address?: InputMaybe<Scalars["String"]>;
  Company?: InputMaybe<CompanyRelateToOneForUpdateInput>;
  Country?: InputMaybe<Scalars["String"]>;
  CreatedBy?: InputMaybe<Scalars["String"]>;
  CreatedDateTime?: InputMaybe<Scalars["DateTime"]>;
  FullAddress?: InputMaybe<Scalars["String"]>;
  GeneralEmailAddress?: InputMaybe<Scalars["String"]>;
  HeadOffice?: InputMaybe<Scalars["Boolean"]>;
  IsActive?: InputMaybe<Scalars["Boolean"]>;
  LastModifiedBy?: InputMaybe<Scalars["String"]>;
  LastModifiedDateTime?: InputMaybe<Scalars["DateTime"]>;
  Locality?: InputMaybe<Scalars["String"]>;
  LocationName?: InputMaybe<Scalars["String"]>;
  Phone?: InputMaybe<Scalars["String"]>;
  Postcode?: InputMaybe<Scalars["String"]>;
  State?: InputMaybe<Scalars["String"]>;
  extLocationId?: InputMaybe<Scalars["Int"]>;
};

export type LocationWhereInput = {
  AND?: InputMaybe<Array<LocationWhereInput>>;
  Address?: InputMaybe<StringNullableFilter>;
  Company?: InputMaybe<CompanyWhereInput>;
  Country?: InputMaybe<StringNullableFilter>;
  CreatedBy?: InputMaybe<StringNullableFilter>;
  CreatedDateTime?: InputMaybe<DateTimeNullableFilter>;
  FullAddress?: InputMaybe<StringNullableFilter>;
  GeneralEmailAddress?: InputMaybe<StringNullableFilter>;
  HeadOffice?: InputMaybe<BooleanFilter>;
  IsActive?: InputMaybe<BooleanFilter>;
  LastModifiedBy?: InputMaybe<StringNullableFilter>;
  LastModifiedDateTime?: InputMaybe<DateTimeNullableFilter>;
  Locality?: InputMaybe<StringNullableFilter>;
  LocationName?: InputMaybe<StringFilter>;
  NOT?: InputMaybe<Array<LocationWhereInput>>;
  OR?: InputMaybe<Array<LocationWhereInput>>;
  Phone?: InputMaybe<StringNullableFilter>;
  Postcode?: InputMaybe<StringNullableFilter>;
  State?: InputMaybe<StringNullableFilter>;
  extLocationId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
};

export type LocationWhereUniqueInput = {
  extLocationId?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type Locations = {
  __typename?: "Locations";
  data?: Maybe<Array<Location>>;
  skip: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  total: Scalars["Int"];
};

export type Member = {
  __typename?: "Member";
  createdAt?: Maybe<Scalars["DateTime"]>;
  creditsUsed?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  isDeleted?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<Role>;
  team?: Maybe<Team>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<User>;
};

export type MemberCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  creditsUsed?: InputMaybe<Scalars["Int"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  role?: InputMaybe<RoleRelateToOneForCreateInput>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type MemberInfo = {
  __typename?: "MemberInfo";
  creditsUsed?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  invitationStatus?: Maybe<Scalars["String"]>;
  invitationStatusText?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  photoUrl?: Maybe<Scalars["String"]>;
  role?: Maybe<Role>;
  team?: Maybe<Team>;
  userId?: Maybe<Scalars["ID"]>;
};

export type MemberInfos = {
  __typename?: "MemberInfos";
  data?: Maybe<Array<MemberInfo>>;
  total?: Maybe<Scalars["Int"]>;
};

export type MemberInvitationResponse = {
  __typename?: "MemberInvitationResponse";
  redirect: Scalars["String"];
};

export type MemberOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  creditsUsed?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isDeleted?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type MemberUpdateArgs = {
  data: MemberUpdateInput;
  where: MemberWhereUniqueInput;
};

export type MemberUpdateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  creditsUsed?: InputMaybe<Scalars["Int"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  role?: InputMaybe<RoleRelateToOneForUpdateInput>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type MemberWhereInput = {
  AND?: InputMaybe<Array<MemberWhereInput>>;
  NOT?: InputMaybe<Array<MemberWhereInput>>;
  OR?: InputMaybe<Array<MemberWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  creditsUsed?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isDeleted?: InputMaybe<BooleanFilter>;
  role?: InputMaybe<RoleWhereInput>;
  team?: InputMaybe<TeamWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type MemberWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  auth?: Maybe<AuthMutations>;
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createANZSIC?: Maybe<Anzsic>;
  createANZSICS?: Maybe<Array<Maybe<Anzsic>>>;
  createActivityLog?: Maybe<ActivityLog>;
  createActivityLogs?: Maybe<Array<Maybe<ActivityLog>>>;
  createCompanies?: Maybe<Array<Maybe<Company>>>;
  createCompany?: Maybe<Company>;
  createContact?: Maybe<Contact>;
  createContacts?: Maybe<Array<Maybe<Contact>>>;
  createCoupon?: Maybe<Coupon>;
  createCoupons?: Maybe<Array<Maybe<Coupon>>>;
  createCreditHistories?: Maybe<Array<Maybe<CreditHistory>>>;
  createCreditHistory?: Maybe<CreditHistory>;
  createCronLog?: Maybe<CronLog>;
  createCronLogs?: Maybe<Array<Maybe<CronLog>>>;
  createDataClaim?: Maybe<DataClaim>;
  createDataClaims?: Maybe<Array<Maybe<DataClaim>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createInvitation?: Maybe<Invitation>;
  createInvitations?: Maybe<Array<Maybe<Invitation>>>;
  createInvoice?: Maybe<Invoice>;
  createInvoices?: Maybe<Array<Maybe<Invoice>>>;
  createListContact?: Maybe<ListContact>;
  createListContacts?: Maybe<Array<Maybe<ListContact>>>;
  createLocation?: Maybe<Location>;
  createLocations?: Maybe<Array<Maybe<Location>>>;
  createMember?: Maybe<Member>;
  createMembers?: Maybe<Array<Maybe<Member>>>;
  createNote?: Maybe<Note>;
  createNotes?: Maybe<Array<Maybe<Note>>>;
  createPaymentMethod?: Maybe<PaymentMethod>;
  createPaymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  createPermission?: Maybe<Permission>;
  createPermissions?: Maybe<Array<Maybe<Permission>>>;
  createPlan?: Maybe<Plan>;
  createPlanOption?: Maybe<PlanOption>;
  createPlanOptions?: Maybe<Array<Maybe<PlanOption>>>;
  createPlans?: Maybe<Array<Maybe<Plan>>>;
  createProspect?: Maybe<Prospect>;
  createProspects?: Maybe<Array<Maybe<Prospect>>>;
  createRole?: Maybe<Role>;
  createRoles?: Maybe<Array<Maybe<Role>>>;
  createSIC?: Maybe<Sic>;
  createSICS?: Maybe<Array<Maybe<Sic>>>;
  createSearchLog?: Maybe<SearchLog>;
  createSearchLogs?: Maybe<Array<Maybe<SearchLog>>>;
  createStripeSubscription?: Maybe<StripeSubscription>;
  createStripeSubscriptions?: Maybe<Array<Maybe<StripeSubscription>>>;
  createSystemConfig?: Maybe<SystemConfig>;
  createSystemConfigs?: Maybe<Array<Maybe<SystemConfig>>>;
  createTeam?: Maybe<Team>;
  createTeams?: Maybe<Array<Maybe<Team>>>;
  createTopupCredit?: Maybe<TopupCredit>;
  createTopupCredits?: Maybe<Array<Maybe<TopupCredit>>>;
  createTopupTransaction?: Maybe<TopupTransaction>;
  createTopupTransactions?: Maybe<Array<Maybe<TopupTransaction>>>;
  createUser?: Maybe<User>;
  createUserToken?: Maybe<UserToken>;
  createUserTokens?: Maybe<Array<Maybe<UserToken>>>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  crontab?: Maybe<CronMutations>;
  deleteANZSIC?: Maybe<Anzsic>;
  deleteANZSICS?: Maybe<Array<Maybe<Anzsic>>>;
  deleteActivityLog?: Maybe<ActivityLog>;
  deleteActivityLogs?: Maybe<Array<Maybe<ActivityLog>>>;
  deleteCompanies?: Maybe<Array<Maybe<Company>>>;
  deleteCompany?: Maybe<Company>;
  deleteContact?: Maybe<Contact>;
  deleteContacts?: Maybe<Array<Maybe<Contact>>>;
  deleteCoupon?: Maybe<Coupon>;
  deleteCoupons?: Maybe<Array<Maybe<Coupon>>>;
  deleteCreditHistories?: Maybe<Array<Maybe<CreditHistory>>>;
  deleteCreditHistory?: Maybe<CreditHistory>;
  deleteCronLog?: Maybe<CronLog>;
  deleteCronLogs?: Maybe<Array<Maybe<CronLog>>>;
  deleteDataClaim?: Maybe<DataClaim>;
  deleteDataClaims?: Maybe<Array<Maybe<DataClaim>>>;
  deleteInvitation?: Maybe<Invitation>;
  deleteInvitations?: Maybe<Array<Maybe<Invitation>>>;
  deleteInvoice?: Maybe<Invoice>;
  deleteInvoices?: Maybe<Array<Maybe<Invoice>>>;
  deleteListContact?: Maybe<ListContact>;
  deleteListContacts?: Maybe<Array<Maybe<ListContact>>>;
  deleteLocation?: Maybe<Location>;
  deleteLocations?: Maybe<Array<Maybe<Location>>>;
  deleteMember?: Maybe<Member>;
  deleteMembers?: Maybe<Array<Maybe<Member>>>;
  deleteNote?: Maybe<Note>;
  deleteNotes?: Maybe<Array<Maybe<Note>>>;
  deletePaymentMethod?: Maybe<PaymentMethod>;
  deletePaymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  deletePermission?: Maybe<Permission>;
  deletePermissions?: Maybe<Array<Maybe<Permission>>>;
  deletePlan?: Maybe<Plan>;
  deletePlanOption?: Maybe<PlanOption>;
  deletePlanOptions?: Maybe<Array<Maybe<PlanOption>>>;
  deletePlans?: Maybe<Array<Maybe<Plan>>>;
  deleteProspect?: Maybe<Prospect>;
  deleteProspects?: Maybe<Array<Maybe<Prospect>>>;
  deleteRole?: Maybe<Role>;
  deleteRoles?: Maybe<Array<Maybe<Role>>>;
  deleteSIC?: Maybe<Sic>;
  deleteSICS?: Maybe<Array<Maybe<Sic>>>;
  deleteSearchLog?: Maybe<SearchLog>;
  deleteSearchLogs?: Maybe<Array<Maybe<SearchLog>>>;
  deleteStripeSubscription?: Maybe<StripeSubscription>;
  deleteStripeSubscriptions?: Maybe<Array<Maybe<StripeSubscription>>>;
  deleteSystemConfig?: Maybe<SystemConfig>;
  deleteSystemConfigs?: Maybe<Array<Maybe<SystemConfig>>>;
  deleteTeam?: Maybe<Team>;
  deleteTeams?: Maybe<Array<Maybe<Team>>>;
  deleteTopupCredit?: Maybe<TopupCredit>;
  deleteTopupCredits?: Maybe<Array<Maybe<TopupCredit>>>;
  deleteTopupTransaction?: Maybe<TopupTransaction>;
  deleteTopupTransactions?: Maybe<Array<Maybe<TopupTransaction>>>;
  deleteUser?: Maybe<User>;
  deleteUserToken?: Maybe<UserToken>;
  deleteUserTokens?: Maybe<Array<Maybe<UserToken>>>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars["Boolean"];
  stripeSubscription?: Maybe<SubscriptionMutation>;
  system?: Maybe<SystemConfigMutations>;
  team?: Maybe<TeamMutations>;
  updateANZSIC?: Maybe<Anzsic>;
  updateANZSICS?: Maybe<Array<Maybe<Anzsic>>>;
  updateActivityLog?: Maybe<ActivityLog>;
  updateActivityLogs?: Maybe<Array<Maybe<ActivityLog>>>;
  updateCompanies?: Maybe<Array<Maybe<Company>>>;
  updateCompany?: Maybe<Company>;
  updateContact?: Maybe<Contact>;
  updateContacts?: Maybe<Array<Maybe<Contact>>>;
  updateCoupon?: Maybe<Coupon>;
  updateCoupons?: Maybe<Array<Maybe<Coupon>>>;
  updateCreditHistories?: Maybe<Array<Maybe<CreditHistory>>>;
  updateCreditHistory?: Maybe<CreditHistory>;
  updateCronLog?: Maybe<CronLog>;
  updateCronLogs?: Maybe<Array<Maybe<CronLog>>>;
  updateDataClaim?: Maybe<DataClaim>;
  updateDataClaims?: Maybe<Array<Maybe<DataClaim>>>;
  updateInvitation?: Maybe<Invitation>;
  updateInvitations?: Maybe<Array<Maybe<Invitation>>>;
  updateInvoice?: Maybe<Invoice>;
  updateInvoices?: Maybe<Array<Maybe<Invoice>>>;
  updateListContact?: Maybe<ListContact>;
  updateListContacts?: Maybe<Array<Maybe<ListContact>>>;
  updateLocation?: Maybe<Location>;
  updateLocations?: Maybe<Array<Maybe<Location>>>;
  updateMember?: Maybe<Member>;
  updateMembers?: Maybe<Array<Maybe<Member>>>;
  updateNote?: Maybe<Note>;
  updateNotes?: Maybe<Array<Maybe<Note>>>;
  updatePaymentMethod?: Maybe<PaymentMethod>;
  updatePaymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  updatePermission?: Maybe<Permission>;
  updatePermissions?: Maybe<Array<Maybe<Permission>>>;
  updatePlan?: Maybe<Plan>;
  updatePlanOption?: Maybe<PlanOption>;
  updatePlanOptions?: Maybe<Array<Maybe<PlanOption>>>;
  updatePlans?: Maybe<Array<Maybe<Plan>>>;
  updateProspect?: Maybe<Prospect>;
  updateProspects?: Maybe<Array<Maybe<Prospect>>>;
  updateRole?: Maybe<Role>;
  updateRoles?: Maybe<Array<Maybe<Role>>>;
  updateSIC?: Maybe<Sic>;
  updateSICS?: Maybe<Array<Maybe<Sic>>>;
  updateSearchLog?: Maybe<SearchLog>;
  updateSearchLogs?: Maybe<Array<Maybe<SearchLog>>>;
  updateStripeSubscription?: Maybe<StripeSubscription>;
  updateStripeSubscriptions?: Maybe<Array<Maybe<StripeSubscription>>>;
  updateSystemConfig?: Maybe<SystemConfig>;
  updateSystemConfigs?: Maybe<Array<Maybe<SystemConfig>>>;
  updateTeam?: Maybe<Team>;
  updateTeams?: Maybe<Array<Maybe<Team>>>;
  updateTopupCredit?: Maybe<TopupCredit>;
  updateTopupCredits?: Maybe<Array<Maybe<TopupCredit>>>;
  updateTopupTransaction?: Maybe<TopupTransaction>;
  updateTopupTransactions?: Maybe<Array<Maybe<TopupTransaction>>>;
  updateUser?: Maybe<User>;
  updateUserToken?: Maybe<UserToken>;
  updateUserTokens?: Maybe<Array<Maybe<UserToken>>>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateAnzsicArgs = {
  data: AnzsicCreateInput;
};

export type MutationCreateAnzsicsArgs = {
  data: Array<AnzsicCreateInput>;
};

export type MutationCreateActivityLogArgs = {
  data: ActivityLogCreateInput;
};

export type MutationCreateActivityLogsArgs = {
  data: Array<ActivityLogCreateInput>;
};

export type MutationCreateCompaniesArgs = {
  data: Array<CompanyCreateInput>;
};

export type MutationCreateCompanyArgs = {
  data: CompanyCreateInput;
};

export type MutationCreateContactArgs = {
  data: ContactCreateInput;
};

export type MutationCreateContactsArgs = {
  data: Array<ContactCreateInput>;
};

export type MutationCreateCouponArgs = {
  data: CouponCreateInput;
};

export type MutationCreateCouponsArgs = {
  data: Array<CouponCreateInput>;
};

export type MutationCreateCreditHistoriesArgs = {
  data: Array<CreditHistoryCreateInput>;
};

export type MutationCreateCreditHistoryArgs = {
  data: CreditHistoryCreateInput;
};

export type MutationCreateCronLogArgs = {
  data: CronLogCreateInput;
};

export type MutationCreateCronLogsArgs = {
  data: Array<CronLogCreateInput>;
};

export type MutationCreateDataClaimArgs = {
  data: DataClaimCreateInput;
};

export type MutationCreateDataClaimsArgs = {
  data: Array<DataClaimCreateInput>;
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationCreateInvitationArgs = {
  data: InvitationCreateInput;
};

export type MutationCreateInvitationsArgs = {
  data: Array<InvitationCreateInput>;
};

export type MutationCreateInvoiceArgs = {
  data: InvoiceCreateInput;
};

export type MutationCreateInvoicesArgs = {
  data: Array<InvoiceCreateInput>;
};

export type MutationCreateListContactArgs = {
  data: ListContactCreateInput;
};

export type MutationCreateListContactsArgs = {
  data: Array<ListContactCreateInput>;
};

export type MutationCreateLocationArgs = {
  data: LocationCreateInput;
};

export type MutationCreateLocationsArgs = {
  data: Array<LocationCreateInput>;
};

export type MutationCreateMemberArgs = {
  data: MemberCreateInput;
};

export type MutationCreateMembersArgs = {
  data: Array<MemberCreateInput>;
};

export type MutationCreateNoteArgs = {
  data: NoteCreateInput;
};

export type MutationCreateNotesArgs = {
  data: Array<NoteCreateInput>;
};

export type MutationCreatePaymentMethodArgs = {
  data: PaymentMethodCreateInput;
};

export type MutationCreatePaymentMethodsArgs = {
  data: Array<PaymentMethodCreateInput>;
};

export type MutationCreatePermissionArgs = {
  data: PermissionCreateInput;
};

export type MutationCreatePermissionsArgs = {
  data: Array<PermissionCreateInput>;
};

export type MutationCreatePlanArgs = {
  data: PlanCreateInput;
};

export type MutationCreatePlanOptionArgs = {
  data: PlanOptionCreateInput;
};

export type MutationCreatePlanOptionsArgs = {
  data: Array<PlanOptionCreateInput>;
};

export type MutationCreatePlansArgs = {
  data: Array<PlanCreateInput>;
};

export type MutationCreateProspectArgs = {
  data: ProspectCreateInput;
};

export type MutationCreateProspectsArgs = {
  data: Array<ProspectCreateInput>;
};

export type MutationCreateRoleArgs = {
  data: RoleCreateInput;
};

export type MutationCreateRolesArgs = {
  data: Array<RoleCreateInput>;
};

export type MutationCreateSicArgs = {
  data: SicCreateInput;
};

export type MutationCreateSicsArgs = {
  data: Array<SicCreateInput>;
};

export type MutationCreateSearchLogArgs = {
  data: SearchLogCreateInput;
};

export type MutationCreateSearchLogsArgs = {
  data: Array<SearchLogCreateInput>;
};

export type MutationCreateStripeSubscriptionArgs = {
  data: StripeSubscriptionCreateInput;
};

export type MutationCreateStripeSubscriptionsArgs = {
  data: Array<StripeSubscriptionCreateInput>;
};

export type MutationCreateSystemConfigArgs = {
  data: SystemConfigCreateInput;
};

export type MutationCreateSystemConfigsArgs = {
  data: Array<SystemConfigCreateInput>;
};

export type MutationCreateTeamArgs = {
  data: TeamCreateInput;
};

export type MutationCreateTeamsArgs = {
  data: Array<TeamCreateInput>;
};

export type MutationCreateTopupCreditArgs = {
  data: TopupCreditCreateInput;
};

export type MutationCreateTopupCreditsArgs = {
  data: Array<TopupCreditCreateInput>;
};

export type MutationCreateTopupTransactionArgs = {
  data: TopupTransactionCreateInput;
};

export type MutationCreateTopupTransactionsArgs = {
  data: Array<TopupTransactionCreateInput>;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateUserTokenArgs = {
  data: UserTokenCreateInput;
};

export type MutationCreateUserTokensArgs = {
  data: Array<UserTokenCreateInput>;
};

export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};

export type MutationDeleteAnzsicArgs = {
  where: AnzsicWhereUniqueInput;
};

export type MutationDeleteAnzsicsArgs = {
  where: Array<AnzsicWhereUniqueInput>;
};

export type MutationDeleteActivityLogArgs = {
  where: ActivityLogWhereUniqueInput;
};

export type MutationDeleteActivityLogsArgs = {
  where: Array<ActivityLogWhereUniqueInput>;
};

export type MutationDeleteCompaniesArgs = {
  where: Array<CompanyWhereUniqueInput>;
};

export type MutationDeleteCompanyArgs = {
  where: CompanyWhereUniqueInput;
};

export type MutationDeleteContactArgs = {
  where: ContactWhereUniqueInput;
};

export type MutationDeleteContactsArgs = {
  where: Array<ContactWhereUniqueInput>;
};

export type MutationDeleteCouponArgs = {
  where: CouponWhereUniqueInput;
};

export type MutationDeleteCouponsArgs = {
  where: Array<CouponWhereUniqueInput>;
};

export type MutationDeleteCreditHistoriesArgs = {
  where: Array<CreditHistoryWhereUniqueInput>;
};

export type MutationDeleteCreditHistoryArgs = {
  where: CreditHistoryWhereUniqueInput;
};

export type MutationDeleteCronLogArgs = {
  where: CronLogWhereUniqueInput;
};

export type MutationDeleteCronLogsArgs = {
  where: Array<CronLogWhereUniqueInput>;
};

export type MutationDeleteDataClaimArgs = {
  where: DataClaimWhereUniqueInput;
};

export type MutationDeleteDataClaimsArgs = {
  where: Array<DataClaimWhereUniqueInput>;
};

export type MutationDeleteInvitationArgs = {
  where: InvitationWhereUniqueInput;
};

export type MutationDeleteInvitationsArgs = {
  where: Array<InvitationWhereUniqueInput>;
};

export type MutationDeleteInvoiceArgs = {
  where: InvoiceWhereUniqueInput;
};

export type MutationDeleteInvoicesArgs = {
  where: Array<InvoiceWhereUniqueInput>;
};

export type MutationDeleteListContactArgs = {
  where: ListContactWhereUniqueInput;
};

export type MutationDeleteListContactsArgs = {
  where: Array<ListContactWhereUniqueInput>;
};

export type MutationDeleteLocationArgs = {
  where: LocationWhereUniqueInput;
};

export type MutationDeleteLocationsArgs = {
  where: Array<LocationWhereUniqueInput>;
};

export type MutationDeleteMemberArgs = {
  where: MemberWhereUniqueInput;
};

export type MutationDeleteMembersArgs = {
  where: Array<MemberWhereUniqueInput>;
};

export type MutationDeleteNoteArgs = {
  where: NoteWhereUniqueInput;
};

export type MutationDeleteNotesArgs = {
  where: Array<NoteWhereUniqueInput>;
};

export type MutationDeletePaymentMethodArgs = {
  where: PaymentMethodWhereUniqueInput;
};

export type MutationDeletePaymentMethodsArgs = {
  where: Array<PaymentMethodWhereUniqueInput>;
};

export type MutationDeletePermissionArgs = {
  where: PermissionWhereUniqueInput;
};

export type MutationDeletePermissionsArgs = {
  where: Array<PermissionWhereUniqueInput>;
};

export type MutationDeletePlanArgs = {
  where: PlanWhereUniqueInput;
};

export type MutationDeletePlanOptionArgs = {
  where: PlanOptionWhereUniqueInput;
};

export type MutationDeletePlanOptionsArgs = {
  where: Array<PlanOptionWhereUniqueInput>;
};

export type MutationDeletePlansArgs = {
  where: Array<PlanWhereUniqueInput>;
};

export type MutationDeleteProspectArgs = {
  where: ProspectWhereUniqueInput;
};

export type MutationDeleteProspectsArgs = {
  where: Array<ProspectWhereUniqueInput>;
};

export type MutationDeleteRoleArgs = {
  where: RoleWhereUniqueInput;
};

export type MutationDeleteRolesArgs = {
  where: Array<RoleWhereUniqueInput>;
};

export type MutationDeleteSicArgs = {
  where: SicWhereUniqueInput;
};

export type MutationDeleteSicsArgs = {
  where: Array<SicWhereUniqueInput>;
};

export type MutationDeleteSearchLogArgs = {
  where: SearchLogWhereUniqueInput;
};

export type MutationDeleteSearchLogsArgs = {
  where: Array<SearchLogWhereUniqueInput>;
};

export type MutationDeleteStripeSubscriptionArgs = {
  where: StripeSubscriptionWhereUniqueInput;
};

export type MutationDeleteStripeSubscriptionsArgs = {
  where: Array<StripeSubscriptionWhereUniqueInput>;
};

export type MutationDeleteSystemConfigArgs = {
  where: SystemConfigWhereUniqueInput;
};

export type MutationDeleteSystemConfigsArgs = {
  where: Array<SystemConfigWhereUniqueInput>;
};

export type MutationDeleteTeamArgs = {
  where: TeamWhereUniqueInput;
};

export type MutationDeleteTeamsArgs = {
  where: Array<TeamWhereUniqueInput>;
};

export type MutationDeleteTopupCreditArgs = {
  where: TopupCreditWhereUniqueInput;
};

export type MutationDeleteTopupCreditsArgs = {
  where: Array<TopupCreditWhereUniqueInput>;
};

export type MutationDeleteTopupTransactionArgs = {
  where: TopupTransactionWhereUniqueInput;
};

export type MutationDeleteTopupTransactionsArgs = {
  where: Array<TopupTransactionWhereUniqueInput>;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteUserTokenArgs = {
  where: UserTokenWhereUniqueInput;
};

export type MutationDeleteUserTokensArgs = {
  where: Array<UserTokenWhereUniqueInput>;
};

export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};

export type MutationUpdateAnzsicArgs = {
  data: AnzsicUpdateInput;
  where: AnzsicWhereUniqueInput;
};

export type MutationUpdateAnzsicsArgs = {
  data: Array<AnzsicUpdateArgs>;
};

export type MutationUpdateActivityLogArgs = {
  data: ActivityLogUpdateInput;
  where: ActivityLogWhereUniqueInput;
};

export type MutationUpdateActivityLogsArgs = {
  data: Array<ActivityLogUpdateArgs>;
};

export type MutationUpdateCompaniesArgs = {
  data: Array<CompanyUpdateArgs>;
};

export type MutationUpdateCompanyArgs = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};

export type MutationUpdateContactArgs = {
  data: ContactUpdateInput;
  where: ContactWhereUniqueInput;
};

export type MutationUpdateContactsArgs = {
  data: Array<ContactUpdateArgs>;
};

export type MutationUpdateCouponArgs = {
  data: CouponUpdateInput;
  where: CouponWhereUniqueInput;
};

export type MutationUpdateCouponsArgs = {
  data: Array<CouponUpdateArgs>;
};

export type MutationUpdateCreditHistoriesArgs = {
  data: Array<CreditHistoryUpdateArgs>;
};

export type MutationUpdateCreditHistoryArgs = {
  data: CreditHistoryUpdateInput;
  where: CreditHistoryWhereUniqueInput;
};

export type MutationUpdateCronLogArgs = {
  data: CronLogUpdateInput;
  where: CronLogWhereUniqueInput;
};

export type MutationUpdateCronLogsArgs = {
  data: Array<CronLogUpdateArgs>;
};

export type MutationUpdateDataClaimArgs = {
  data: DataClaimUpdateInput;
  where: DataClaimWhereUniqueInput;
};

export type MutationUpdateDataClaimsArgs = {
  data: Array<DataClaimUpdateArgs>;
};

export type MutationUpdateInvitationArgs = {
  data: InvitationUpdateInput;
  where: InvitationWhereUniqueInput;
};

export type MutationUpdateInvitationsArgs = {
  data: Array<InvitationUpdateArgs>;
};

export type MutationUpdateInvoiceArgs = {
  data: InvoiceUpdateInput;
  where: InvoiceWhereUniqueInput;
};

export type MutationUpdateInvoicesArgs = {
  data: Array<InvoiceUpdateArgs>;
};

export type MutationUpdateListContactArgs = {
  data: ListContactUpdateInput;
  where: ListContactWhereUniqueInput;
};

export type MutationUpdateListContactsArgs = {
  data: Array<ListContactUpdateArgs>;
};

export type MutationUpdateLocationArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};

export type MutationUpdateLocationsArgs = {
  data: Array<LocationUpdateArgs>;
};

export type MutationUpdateMemberArgs = {
  data: MemberUpdateInput;
  where: MemberWhereUniqueInput;
};

export type MutationUpdateMembersArgs = {
  data: Array<MemberUpdateArgs>;
};

export type MutationUpdateNoteArgs = {
  data: NoteUpdateInput;
  where: NoteWhereUniqueInput;
};

export type MutationUpdateNotesArgs = {
  data: Array<NoteUpdateArgs>;
};

export type MutationUpdatePaymentMethodArgs = {
  data: PaymentMethodUpdateInput;
  where: PaymentMethodWhereUniqueInput;
};

export type MutationUpdatePaymentMethodsArgs = {
  data: Array<PaymentMethodUpdateArgs>;
};

export type MutationUpdatePermissionArgs = {
  data: PermissionUpdateInput;
  where: PermissionWhereUniqueInput;
};

export type MutationUpdatePermissionsArgs = {
  data: Array<PermissionUpdateArgs>;
};

export type MutationUpdatePlanArgs = {
  data: PlanUpdateInput;
  where: PlanWhereUniqueInput;
};

export type MutationUpdatePlanOptionArgs = {
  data: PlanOptionUpdateInput;
  where: PlanOptionWhereUniqueInput;
};

export type MutationUpdatePlanOptionsArgs = {
  data: Array<PlanOptionUpdateArgs>;
};

export type MutationUpdatePlansArgs = {
  data: Array<PlanUpdateArgs>;
};

export type MutationUpdateProspectArgs = {
  data: ProspectUpdateInput;
  where: ProspectWhereUniqueInput;
};

export type MutationUpdateProspectsArgs = {
  data: Array<ProspectUpdateArgs>;
};

export type MutationUpdateRoleArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};

export type MutationUpdateRolesArgs = {
  data: Array<RoleUpdateArgs>;
};

export type MutationUpdateSicArgs = {
  data: SicUpdateInput;
  where: SicWhereUniqueInput;
};

export type MutationUpdateSicsArgs = {
  data: Array<SicUpdateArgs>;
};

export type MutationUpdateSearchLogArgs = {
  data: SearchLogUpdateInput;
  where: SearchLogWhereUniqueInput;
};

export type MutationUpdateSearchLogsArgs = {
  data: Array<SearchLogUpdateArgs>;
};

export type MutationUpdateStripeSubscriptionArgs = {
  data: StripeSubscriptionUpdateInput;
  where: StripeSubscriptionWhereUniqueInput;
};

export type MutationUpdateStripeSubscriptionsArgs = {
  data: Array<StripeSubscriptionUpdateArgs>;
};

export type MutationUpdateSystemConfigArgs = {
  data: SystemConfigUpdateInput;
  where: SystemConfigWhereUniqueInput;
};

export type MutationUpdateSystemConfigsArgs = {
  data: Array<SystemConfigUpdateArgs>;
};

export type MutationUpdateTeamArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};

export type MutationUpdateTeamsArgs = {
  data: Array<TeamUpdateArgs>;
};

export type MutationUpdateTopupCreditArgs = {
  data: TopupCreditUpdateInput;
  where: TopupCreditWhereUniqueInput;
};

export type MutationUpdateTopupCreditsArgs = {
  data: Array<TopupCreditUpdateArgs>;
};

export type MutationUpdateTopupTransactionArgs = {
  data: TopupTransactionUpdateInput;
  where: TopupTransactionWhereUniqueInput;
};

export type MutationUpdateTopupTransactionsArgs = {
  data: Array<TopupTransactionUpdateArgs>;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateUserTokenArgs = {
  data: UserTokenUpdateInput;
  where: UserTokenWhereUniqueInput;
};

export type MutationUpdateUserTokensArgs = {
  data: Array<UserTokenUpdateArgs>;
};

export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type Note = {
  __typename?: "Note";
  company?: Maybe<Company>;
  contact?: Maybe<Contact>;
  content?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<User>;
  id: Scalars["ID"];
  team?: Maybe<Team>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type NoteCreateInput = {
  company?: InputMaybe<CompanyRelateToOneForCreateInput>;
  contact?: InputMaybe<ContactRelateToOneForCreateInput>;
  content?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type NoteOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export enum NoteRelatedTypeEnums {
  Company = "company",
  Contact = "contact",
}

export type NoteUpdateArgs = {
  data: NoteUpdateInput;
  where: NoteWhereUniqueInput;
};

export type NoteUpdateInput = {
  company?: InputMaybe<CompanyRelateToOneForUpdateInput>;
  contact?: InputMaybe<ContactRelateToOneForUpdateInput>;
  content?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type NoteWhereInput = {
  AND?: InputMaybe<Array<NoteWhereInput>>;
  NOT?: InputMaybe<Array<NoteWhereInput>>;
  OR?: InputMaybe<Array<NoteWhereInput>>;
  company?: InputMaybe<CompanyWhereInput>;
  contact?: InputMaybe<ContactWhereInput>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  team?: InputMaybe<TeamWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type NoteWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Notes = {
  __typename?: "Notes";
  data?: Maybe<Array<Note>>;
  skip: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  total: Scalars["Int"];
};

export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type PasswordState = {
  __typename?: "PasswordState";
  isSet: Scalars["Boolean"];
};

export type PaymentMethod = {
  __typename?: "PaymentMethod";
  cardFingerprint?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  expiryDate?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  stripePaymentMethodId?: Maybe<Scalars["String"]>;
  triggerEmailExpired?: Maybe<Scalars["DateTime"]>;
  triggerEmailWillExpired?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<User>;
};

export type PaymentMethodCreateInput = {
  cardFingerprint?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  expiryDate?: InputMaybe<Scalars["DateTime"]>;
  stripePaymentMethodId?: InputMaybe<Scalars["String"]>;
  triggerEmailExpired?: InputMaybe<Scalars["DateTime"]>;
  triggerEmailWillExpired?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type PaymentMethodOrderByInput = {
  cardFingerprint?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  expiryDate?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  stripePaymentMethodId?: InputMaybe<OrderDirection>;
  triggerEmailExpired?: InputMaybe<OrderDirection>;
  triggerEmailWillExpired?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PaymentMethodResponse = {
  __typename?: "PaymentMethodResponse";
  expMonth?: Maybe<Scalars["Int"]>;
  expYear?: Maybe<Scalars["Int"]>;
  last4?: Maybe<Scalars["String"]>;
  metadata?: Maybe<Scalars["JSON"]>;
  stripePaymentMethodId?: Maybe<Scalars["String"]>;
};

export type PaymentMethodUpdateArgs = {
  data: PaymentMethodUpdateInput;
  where: PaymentMethodWhereUniqueInput;
};

export type PaymentMethodUpdateInput = {
  cardFingerprint?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  expiryDate?: InputMaybe<Scalars["DateTime"]>;
  stripePaymentMethodId?: InputMaybe<Scalars["String"]>;
  triggerEmailExpired?: InputMaybe<Scalars["DateTime"]>;
  triggerEmailWillExpired?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type PaymentMethodWhereInput = {
  AND?: InputMaybe<Array<PaymentMethodWhereInput>>;
  NOT?: InputMaybe<Array<PaymentMethodWhereInput>>;
  OR?: InputMaybe<Array<PaymentMethodWhereInput>>;
  cardFingerprint?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  expiryDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  stripePaymentMethodId?: InputMaybe<StringFilter>;
  triggerEmailExpired?: InputMaybe<DateTimeNullableFilter>;
  triggerEmailWillExpired?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type PaymentMethodWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Permission = {
  __typename?: "Permission";
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  roles?: Maybe<Array<Role>>;
  rolesCount?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PermissionRolesArgs = {
  orderBy?: Array<RoleOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: RoleWhereInput;
};

export type PermissionRolesCountArgs = {
  where?: RoleWhereInput;
};

export type PermissionCreateInput = {
  code?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  name?: InputMaybe<Scalars["String"]>;
  roles?: InputMaybe<RoleRelateToManyForCreateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type PermissionManyRelationFilter = {
  every?: InputMaybe<PermissionWhereInput>;
  none?: InputMaybe<PermissionWhereInput>;
  some?: InputMaybe<PermissionWhereInput>;
};

export type PermissionOrderByInput = {
  code?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PermissionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  create?: InputMaybe<Array<PermissionCreateInput>>;
};

export type PermissionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  create?: InputMaybe<Array<PermissionCreateInput>>;
  disconnect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  set?: InputMaybe<Array<PermissionWhereUniqueInput>>;
};

export type PermissionUpdateArgs = {
  data: PermissionUpdateInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionUpdateInput = {
  code?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  name?: InputMaybe<Scalars["String"]>;
  roles?: InputMaybe<RoleRelateToManyForUpdateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type PermissionWhereInput = {
  AND?: InputMaybe<Array<PermissionWhereInput>>;
  NOT?: InputMaybe<Array<PermissionWhereInput>>;
  OR?: InputMaybe<Array<PermissionWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  roles?: InputMaybe<RoleManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type PermissionWhereUniqueInput = {
  code?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type Plan = {
  __typename?: "Plan";
  codeName?: Maybe<Scalars["String"]>;
  couponExclude?: Maybe<Array<Coupon>>;
  couponExcludeCount?: Maybe<Scalars["Int"]>;
  couponInclude?: Maybe<Array<Coupon>>;
  couponIncludeCount?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  features?: Maybe<Scalars["JSON"]>;
  id: Scalars["ID"];
  label?: Maybe<Scalars["String"]>;
  monthlyCredits?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  numberUsers?: Maybe<Scalars["Int"]>;
  order?: Maybe<Scalars["Int"]>;
  planOptions?: Maybe<Array<PlanOption>>;
  planOptionsCount?: Maybe<Scalars["Int"]>;
  stripeProductId?: Maybe<Scalars["String"]>;
  team?: Maybe<Team>;
  type?: Maybe<PlanTypeType>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PlanCouponExcludeArgs = {
  orderBy?: Array<CouponOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: CouponWhereInput;
};

export type PlanCouponExcludeCountArgs = {
  where?: CouponWhereInput;
};

export type PlanCouponIncludeArgs = {
  orderBy?: Array<CouponOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: CouponWhereInput;
};

export type PlanCouponIncludeCountArgs = {
  where?: CouponWhereInput;
};

export type PlanPlanOptionsArgs = {
  orderBy?: Array<PlanOptionOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: PlanOptionWhereInput;
};

export type PlanPlanOptionsCountArgs = {
  where?: PlanOptionWhereInput;
};

export type PlanCreateInput = {
  codeName?: InputMaybe<Scalars["String"]>;
  couponExclude?: InputMaybe<CouponRelateToManyForCreateInput>;
  couponInclude?: InputMaybe<CouponRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  features?: InputMaybe<Scalars["JSON"]>;
  label?: InputMaybe<Scalars["String"]>;
  monthlyCredits?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  numberUsers?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["Int"]>;
  planOptions?: InputMaybe<PlanOptionRelateToManyForCreateInput>;
  stripeProductId?: InputMaybe<Scalars["String"]>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  type?: InputMaybe<PlanTypeType>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type PlanOption = {
  __typename?: "PlanOption";
  active?: Maybe<Scalars["Boolean"]>;
  amount?: Maybe<Scalars["Float"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  currency?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  interval?: Maybe<PlanOptionIntervalType>;
  plan?: Maybe<Plan>;
  stripePriceId?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PlanOptionCreateInput = {
  active?: InputMaybe<Scalars["Boolean"]>;
  amount?: InputMaybe<Scalars["Float"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  currency?: InputMaybe<Scalars["String"]>;
  interval?: InputMaybe<PlanOptionIntervalType>;
  plan?: InputMaybe<PlanRelateToOneForCreateInput>;
  stripePriceId?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export enum PlanOptionIntervalType {
  Month = "month",
  Year = "year",
}

export type PlanOptionIntervalTypeNullableFilter = {
  equals?: InputMaybe<PlanOptionIntervalType>;
  in?: InputMaybe<Array<PlanOptionIntervalType>>;
  not?: InputMaybe<PlanOptionIntervalTypeNullableFilter>;
  notIn?: InputMaybe<Array<PlanOptionIntervalType>>;
};

export type PlanOptionManyRelationFilter = {
  every?: InputMaybe<PlanOptionWhereInput>;
  none?: InputMaybe<PlanOptionWhereInput>;
  some?: InputMaybe<PlanOptionWhereInput>;
};

export type PlanOptionOrderByInput = {
  active?: InputMaybe<OrderDirection>;
  amount?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  currency?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  interval?: InputMaybe<OrderDirection>;
  stripePriceId?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PlanOptionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PlanOptionWhereUniqueInput>>;
  create?: InputMaybe<Array<PlanOptionCreateInput>>;
};

export type PlanOptionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PlanOptionWhereUniqueInput>>;
  create?: InputMaybe<Array<PlanOptionCreateInput>>;
  disconnect?: InputMaybe<Array<PlanOptionWhereUniqueInput>>;
  set?: InputMaybe<Array<PlanOptionWhereUniqueInput>>;
};

export type PlanOptionRelateToOneForCreateInput = {
  connect?: InputMaybe<PlanOptionWhereUniqueInput>;
  create?: InputMaybe<PlanOptionCreateInput>;
};

export type PlanOptionRelateToOneForUpdateInput = {
  connect?: InputMaybe<PlanOptionWhereUniqueInput>;
  create?: InputMaybe<PlanOptionCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type PlanOptionUpdateArgs = {
  data: PlanOptionUpdateInput;
  where: PlanOptionWhereUniqueInput;
};

export type PlanOptionUpdateInput = {
  active?: InputMaybe<Scalars["Boolean"]>;
  amount?: InputMaybe<Scalars["Float"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  currency?: InputMaybe<Scalars["String"]>;
  interval?: InputMaybe<PlanOptionIntervalType>;
  plan?: InputMaybe<PlanRelateToOneForUpdateInput>;
  stripePriceId?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type PlanOptionWhereInput = {
  AND?: InputMaybe<Array<PlanOptionWhereInput>>;
  NOT?: InputMaybe<Array<PlanOptionWhereInput>>;
  OR?: InputMaybe<Array<PlanOptionWhereInput>>;
  active?: InputMaybe<BooleanFilter>;
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currency?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  interval?: InputMaybe<PlanOptionIntervalTypeNullableFilter>;
  plan?: InputMaybe<PlanWhereInput>;
  stripePriceId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type PlanOptionWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PlanOrderByInput = {
  codeName?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  label?: InputMaybe<OrderDirection>;
  monthlyCredits?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  numberUsers?: InputMaybe<OrderDirection>;
  order?: InputMaybe<OrderDirection>;
  stripeProductId?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PlanRelateToOneForCreateInput = {
  connect?: InputMaybe<PlanWhereUniqueInput>;
  create?: InputMaybe<PlanCreateInput>;
};

export type PlanRelateToOneForUpdateInput = {
  connect?: InputMaybe<PlanWhereUniqueInput>;
  create?: InputMaybe<PlanCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export enum PlanTypeType {
  Custom = "custom",
  System = "system",
}

export type PlanTypeTypeNullableFilter = {
  equals?: InputMaybe<PlanTypeType>;
  in?: InputMaybe<Array<PlanTypeType>>;
  not?: InputMaybe<PlanTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<PlanTypeType>>;
};

export type PlanUpdateArgs = {
  data: PlanUpdateInput;
  where: PlanWhereUniqueInput;
};

export type PlanUpdateInput = {
  codeName?: InputMaybe<Scalars["String"]>;
  couponExclude?: InputMaybe<CouponRelateToManyForUpdateInput>;
  couponInclude?: InputMaybe<CouponRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  features?: InputMaybe<Scalars["JSON"]>;
  label?: InputMaybe<Scalars["String"]>;
  monthlyCredits?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  numberUsers?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["Int"]>;
  planOptions?: InputMaybe<PlanOptionRelateToManyForUpdateInput>;
  stripeProductId?: InputMaybe<Scalars["String"]>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  type?: InputMaybe<PlanTypeType>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type PlanWhereInput = {
  AND?: InputMaybe<Array<PlanWhereInput>>;
  NOT?: InputMaybe<Array<PlanWhereInput>>;
  OR?: InputMaybe<Array<PlanWhereInput>>;
  codeName?: InputMaybe<StringFilter>;
  couponExclude?: InputMaybe<CouponManyRelationFilter>;
  couponInclude?: InputMaybe<CouponManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  label?: InputMaybe<StringFilter>;
  monthlyCredits?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  numberUsers?: InputMaybe<IntNullableFilter>;
  order?: InputMaybe<IntFilter>;
  planOptions?: InputMaybe<PlanOptionManyRelationFilter>;
  stripeProductId?: InputMaybe<StringFilter>;
  team?: InputMaybe<TeamWhereInput>;
  type?: InputMaybe<PlanTypeTypeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type PlanWhereUniqueInput = {
  codeName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type Plans = {
  __typename?: "Plans";
  data?: Maybe<Array<Plan>>;
  skip: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  total: Scalars["Int"];
};

export type Prospect = {
  __typename?: "Prospect";
  AltMobilePhone?: Maybe<Scalars["String"]>;
  BuyingRole?: Maybe<Scalars["String"]>;
  Company?: Maybe<Company>;
  CompanyName?: Maybe<Scalars["String"]>;
  ContactLinkedInURL?: Maybe<Scalars["String"]>;
  CreatedBy?: Maybe<Scalars["String"]>;
  CreatedDateTime?: Maybe<Scalars["DateTime"]>;
  Department?: Maybe<Scalars["String"]>;
  Email?: Maybe<Scalars["String"]>;
  Gender?: Maybe<Scalars["String"]>;
  GivenName?: Maybe<Scalars["String"]>;
  IsActive?: Maybe<Scalars["Boolean"]>;
  JobFunction?: Maybe<Scalars["String"]>;
  LastModifiedBy?: Maybe<Scalars["String"]>;
  LastModifiedDateTime?: Maybe<Scalars["DateTime"]>;
  Location?: Maybe<Location>;
  LocationName?: Maybe<Scalars["String"]>;
  MobilePhone?: Maybe<Scalars["String"]>;
  PositionName?: Maybe<Scalars["String"]>;
  ReportToId?: Maybe<Scalars["String"]>;
  Surname?: Maybe<Scalars["String"]>;
  Title?: Maybe<Scalars["String"]>;
  extContactId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

export type ProspectCreateInput = {
  AltMobilePhone?: InputMaybe<Scalars["String"]>;
  BuyingRole?: InputMaybe<Scalars["String"]>;
  Company?: InputMaybe<CompanyRelateToOneForCreateInput>;
  CompanyName?: InputMaybe<Scalars["String"]>;
  ContactLinkedInURL?: InputMaybe<Scalars["String"]>;
  CreatedBy?: InputMaybe<Scalars["String"]>;
  CreatedDateTime?: InputMaybe<Scalars["DateTime"]>;
  Department?: InputMaybe<Scalars["String"]>;
  Email?: InputMaybe<Scalars["String"]>;
  Gender?: InputMaybe<Scalars["String"]>;
  GivenName?: InputMaybe<Scalars["String"]>;
  IsActive?: InputMaybe<Scalars["Boolean"]>;
  JobFunction?: InputMaybe<Scalars["String"]>;
  LastModifiedBy?: InputMaybe<Scalars["String"]>;
  LastModifiedDateTime?: InputMaybe<Scalars["DateTime"]>;
  Location?: InputMaybe<LocationRelateToOneForCreateInput>;
  LocationName?: InputMaybe<Scalars["String"]>;
  MobilePhone?: InputMaybe<Scalars["String"]>;
  PositionName?: InputMaybe<Scalars["String"]>;
  ReportToId?: InputMaybe<Scalars["String"]>;
  Surname?: InputMaybe<Scalars["String"]>;
  Title?: InputMaybe<Scalars["String"]>;
  extContactId?: InputMaybe<Scalars["Int"]>;
};

export type ProspectInfo = {
  __typename?: "ProspectInfo";
  id?: Maybe<Scalars["String"]>;
  isRevealed?: Maybe<Scalars["Boolean"]>;
  isVIP?: Maybe<Scalars["Boolean"]>;
  prospect?: Maybe<Prospect>;
};

export type ProspectOrderByInput = {
  AltMobilePhone?: InputMaybe<OrderDirection>;
  BuyingRole?: InputMaybe<OrderDirection>;
  CompanyName?: InputMaybe<OrderDirection>;
  ContactLinkedInURL?: InputMaybe<OrderDirection>;
  CreatedBy?: InputMaybe<OrderDirection>;
  CreatedDateTime?: InputMaybe<OrderDirection>;
  Department?: InputMaybe<OrderDirection>;
  Email?: InputMaybe<OrderDirection>;
  Gender?: InputMaybe<OrderDirection>;
  GivenName?: InputMaybe<OrderDirection>;
  IsActive?: InputMaybe<OrderDirection>;
  JobFunction?: InputMaybe<OrderDirection>;
  LastModifiedBy?: InputMaybe<OrderDirection>;
  LastModifiedDateTime?: InputMaybe<OrderDirection>;
  LocationName?: InputMaybe<OrderDirection>;
  MobilePhone?: InputMaybe<OrderDirection>;
  PositionName?: InputMaybe<OrderDirection>;
  ReportToId?: InputMaybe<OrderDirection>;
  Surname?: InputMaybe<OrderDirection>;
  Title?: InputMaybe<OrderDirection>;
  extContactId?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type ProspectRelateToOneForCreateInput = {
  connect?: InputMaybe<ProspectWhereUniqueInput>;
  create?: InputMaybe<ProspectCreateInput>;
};

export type ProspectRelateToOneForUpdateInput = {
  connect?: InputMaybe<ProspectWhereUniqueInput>;
  create?: InputMaybe<ProspectCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type ProspectUpdateArgs = {
  data: ProspectUpdateInput;
  where: ProspectWhereUniqueInput;
};

export type ProspectUpdateInput = {
  AltMobilePhone?: InputMaybe<Scalars["String"]>;
  BuyingRole?: InputMaybe<Scalars["String"]>;
  Company?: InputMaybe<CompanyRelateToOneForUpdateInput>;
  CompanyName?: InputMaybe<Scalars["String"]>;
  ContactLinkedInURL?: InputMaybe<Scalars["String"]>;
  CreatedBy?: InputMaybe<Scalars["String"]>;
  CreatedDateTime?: InputMaybe<Scalars["DateTime"]>;
  Department?: InputMaybe<Scalars["String"]>;
  Email?: InputMaybe<Scalars["String"]>;
  Gender?: InputMaybe<Scalars["String"]>;
  GivenName?: InputMaybe<Scalars["String"]>;
  IsActive?: InputMaybe<Scalars["Boolean"]>;
  JobFunction?: InputMaybe<Scalars["String"]>;
  LastModifiedBy?: InputMaybe<Scalars["String"]>;
  LastModifiedDateTime?: InputMaybe<Scalars["DateTime"]>;
  Location?: InputMaybe<LocationRelateToOneForUpdateInput>;
  LocationName?: InputMaybe<Scalars["String"]>;
  MobilePhone?: InputMaybe<Scalars["String"]>;
  PositionName?: InputMaybe<Scalars["String"]>;
  ReportToId?: InputMaybe<Scalars["String"]>;
  Surname?: InputMaybe<Scalars["String"]>;
  Title?: InputMaybe<Scalars["String"]>;
  extContactId?: InputMaybe<Scalars["Int"]>;
};

export type ProspectWhereInput = {
  AND?: InputMaybe<Array<ProspectWhereInput>>;
  AltMobilePhone?: InputMaybe<StringNullableFilter>;
  BuyingRole?: InputMaybe<StringNullableFilter>;
  Company?: InputMaybe<CompanyWhereInput>;
  CompanyName?: InputMaybe<StringNullableFilter>;
  ContactLinkedInURL?: InputMaybe<StringNullableFilter>;
  CreatedBy?: InputMaybe<StringNullableFilter>;
  CreatedDateTime?: InputMaybe<DateTimeNullableFilter>;
  Department?: InputMaybe<StringNullableFilter>;
  Email?: InputMaybe<StringNullableFilter>;
  Gender?: InputMaybe<StringNullableFilter>;
  GivenName?: InputMaybe<StringNullableFilter>;
  IsActive?: InputMaybe<BooleanFilter>;
  JobFunction?: InputMaybe<StringNullableFilter>;
  LastModifiedBy?: InputMaybe<StringNullableFilter>;
  LastModifiedDateTime?: InputMaybe<DateTimeNullableFilter>;
  Location?: InputMaybe<LocationWhereInput>;
  LocationName?: InputMaybe<StringNullableFilter>;
  MobilePhone?: InputMaybe<StringNullableFilter>;
  NOT?: InputMaybe<Array<ProspectWhereInput>>;
  OR?: InputMaybe<Array<ProspectWhereInput>>;
  PositionName?: InputMaybe<StringFilter>;
  ReportToId?: InputMaybe<StringNullableFilter>;
  Surname?: InputMaybe<StringNullableFilter>;
  Title?: InputMaybe<StringNullableFilter>;
  extContactId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
};

export type ProspectWhereUniqueInput = {
  extContactId?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type Prospects = {
  __typename?: "Prospects";
  data?: Maybe<Array<ProspectInfo>>;
  searchLogId?: Maybe<Scalars["String"]>;
  skip: Scalars["Int"];
  take?: Maybe<Scalars["Int"]>;
  total: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  aNZSIC?: Maybe<Anzsic>;
  aNZSICS?: Maybe<Array<Anzsic>>;
  aNZSICSCount?: Maybe<Scalars["Int"]>;
  activityLog?: Maybe<ActivityLog>;
  activityLogs?: Maybe<Array<ActivityLog>>;
  activityLogsCount?: Maybe<Scalars["Int"]>;
  auth?: Maybe<AuthQueries>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  companies?: Maybe<Array<Company>>;
  companiesCount?: Maybe<Scalars["Int"]>;
  company?: Maybe<Company>;
  contact?: Maybe<Contact>;
  contacts?: Maybe<Array<Contact>>;
  contactsCount?: Maybe<Scalars["Int"]>;
  coupon?: Maybe<Coupon>;
  coupons?: Maybe<Array<Coupon>>;
  couponsCount?: Maybe<Scalars["Int"]>;
  creditHistories?: Maybe<Array<CreditHistory>>;
  creditHistoriesCount?: Maybe<Scalars["Int"]>;
  creditHistory?: Maybe<CreditHistory>;
  cronLog?: Maybe<CronLog>;
  cronLogs?: Maybe<Array<CronLog>>;
  cronLogsCount?: Maybe<Scalars["Int"]>;
  dataClaim?: Maybe<DataClaim>;
  dataClaims?: Maybe<Array<DataClaim>>;
  dataClaimsCount?: Maybe<Scalars["Int"]>;
  getInvitationMemberInfo?: Maybe<InvitationMemberInfo>;
  getStaticValues?: Maybe<StaticValues>;
  invitation?: Maybe<Invitation>;
  invitations?: Maybe<Array<Invitation>>;
  invitationsCount?: Maybe<Scalars["Int"]>;
  invoice?: Maybe<Invoice>;
  invoices?: Maybe<Array<Invoice>>;
  invoicesCount?: Maybe<Scalars["Int"]>;
  keystone: KeystoneMeta;
  listContact?: Maybe<ListContact>;
  listContacts?: Maybe<Array<ListContact>>;
  listContactsCount?: Maybe<Scalars["Int"]>;
  location?: Maybe<Location>;
  locations?: Maybe<Array<Location>>;
  locationsCount?: Maybe<Scalars["Int"]>;
  member?: Maybe<Member>;
  members?: Maybe<Array<Member>>;
  membersCount?: Maybe<Scalars["Int"]>;
  myTeam?: Maybe<TeamQueries>;
  note?: Maybe<Note>;
  notes?: Maybe<Array<Note>>;
  notesCount?: Maybe<Scalars["Int"]>;
  paymentMethod?: Maybe<PaymentMethod>;
  paymentMethods?: Maybe<Array<PaymentMethod>>;
  paymentMethodsCount?: Maybe<Scalars["Int"]>;
  permission?: Maybe<Permission>;
  permissions?: Maybe<Array<Permission>>;
  permissionsCount?: Maybe<Scalars["Int"]>;
  plan?: Maybe<Plan>;
  planOption?: Maybe<PlanOption>;
  planOptions?: Maybe<Array<PlanOption>>;
  planOptionsCount?: Maybe<Scalars["Int"]>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars["Int"]>;
  prospect?: Maybe<Prospect>;
  prospects?: Maybe<Array<Prospect>>;
  prospectsCount?: Maybe<Scalars["Int"]>;
  role?: Maybe<Role>;
  roles?: Maybe<Array<Role>>;
  rolesCount?: Maybe<Scalars["Int"]>;
  sIC?: Maybe<Sic>;
  sICS?: Maybe<Array<Sic>>;
  sICSCount?: Maybe<Scalars["Int"]>;
  searchLog?: Maybe<SearchLog>;
  searchLogs?: Maybe<Array<SearchLog>>;
  searchLogsCount?: Maybe<Scalars["Int"]>;
  stripeSubscription?: Maybe<StripeSubscription>;
  stripeSubscriptionQuery?: Maybe<StripeSubscriptionQuery>;
  stripeSubscriptions?: Maybe<Array<StripeSubscription>>;
  stripeSubscriptionsCount?: Maybe<Scalars["Int"]>;
  system?: Maybe<SystemQueries>;
  systemConfig?: Maybe<SystemConfig>;
  systemConfigs?: Maybe<Array<SystemConfig>>;
  systemConfigsCount?: Maybe<Scalars["Int"]>;
  team?: Maybe<Team>;
  teams?: Maybe<Array<Team>>;
  teamsCount?: Maybe<Scalars["Int"]>;
  topupCredit?: Maybe<TopupCredit>;
  topupCredits?: Maybe<Array<TopupCredit>>;
  topupCreditsCount?: Maybe<Scalars["Int"]>;
  topupTransaction?: Maybe<TopupTransaction>;
  topupTransactions?: Maybe<Array<TopupTransaction>>;
  topupTransactionsCount?: Maybe<Scalars["Int"]>;
  user?: Maybe<User>;
  userToken?: Maybe<UserToken>;
  userTokens?: Maybe<Array<UserToken>>;
  userTokensCount?: Maybe<Scalars["Int"]>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars["Int"]>;
};

export type QueryANzsicArgs = {
  where: AnzsicWhereUniqueInput;
};

export type QueryANzsicsArgs = {
  orderBy?: Array<AnzsicOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: AnzsicWhereInput;
};

export type QueryANzsicsCountArgs = {
  where?: AnzsicWhereInput;
};

export type QueryActivityLogArgs = {
  where: ActivityLogWhereUniqueInput;
};

export type QueryActivityLogsArgs = {
  orderBy?: Array<ActivityLogOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: ActivityLogWhereInput;
};

export type QueryActivityLogsCountArgs = {
  where?: ActivityLogWhereInput;
};

export type QueryCompaniesArgs = {
  orderBy?: Array<CompanyOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: CompanyWhereInput;
};

export type QueryCompaniesCountArgs = {
  where?: CompanyWhereInput;
};

export type QueryCompanyArgs = {
  where: CompanyWhereUniqueInput;
};

export type QueryContactArgs = {
  where: ContactWhereUniqueInput;
};

export type QueryContactsArgs = {
  orderBy?: Array<ContactOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: ContactWhereInput;
};

export type QueryContactsCountArgs = {
  where?: ContactWhereInput;
};

export type QueryCouponArgs = {
  where: CouponWhereUniqueInput;
};

export type QueryCouponsArgs = {
  orderBy?: Array<CouponOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: CouponWhereInput;
};

export type QueryCouponsCountArgs = {
  where?: CouponWhereInput;
};

export type QueryCreditHistoriesArgs = {
  orderBy?: Array<CreditHistoryOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: CreditHistoryWhereInput;
};

export type QueryCreditHistoriesCountArgs = {
  where?: CreditHistoryWhereInput;
};

export type QueryCreditHistoryArgs = {
  where: CreditHistoryWhereUniqueInput;
};

export type QueryCronLogArgs = {
  where: CronLogWhereUniqueInput;
};

export type QueryCronLogsArgs = {
  orderBy?: Array<CronLogOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: CronLogWhereInput;
};

export type QueryCronLogsCountArgs = {
  where?: CronLogWhereInput;
};

export type QueryDataClaimArgs = {
  where: DataClaimWhereUniqueInput;
};

export type QueryDataClaimsArgs = {
  orderBy?: Array<DataClaimOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: DataClaimWhereInput;
};

export type QueryDataClaimsCountArgs = {
  where?: DataClaimWhereInput;
};

export type QueryGetInvitationMemberInfoArgs = {
  invitationCode: Scalars["String"];
};

export type QueryInvitationArgs = {
  where: InvitationWhereUniqueInput;
};

export type QueryInvitationsArgs = {
  orderBy?: Array<InvitationOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: InvitationWhereInput;
};

export type QueryInvitationsCountArgs = {
  where?: InvitationWhereInput;
};

export type QueryInvoiceArgs = {
  where: InvoiceWhereUniqueInput;
};

export type QueryInvoicesArgs = {
  orderBy?: Array<InvoiceOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: InvoiceWhereInput;
};

export type QueryInvoicesCountArgs = {
  where?: InvoiceWhereInput;
};

export type QueryListContactArgs = {
  where: ListContactWhereUniqueInput;
};

export type QueryListContactsArgs = {
  orderBy?: Array<ListContactOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: ListContactWhereInput;
};

export type QueryListContactsCountArgs = {
  where?: ListContactWhereInput;
};

export type QueryLocationArgs = {
  where: LocationWhereUniqueInput;
};

export type QueryLocationsArgs = {
  orderBy?: Array<LocationOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: LocationWhereInput;
};

export type QueryLocationsCountArgs = {
  where?: LocationWhereInput;
};

export type QueryMemberArgs = {
  where: MemberWhereUniqueInput;
};

export type QueryMembersArgs = {
  orderBy?: Array<MemberOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: MemberWhereInput;
};

export type QueryMembersCountArgs = {
  where?: MemberWhereInput;
};

export type QueryNoteArgs = {
  where: NoteWhereUniqueInput;
};

export type QueryNotesArgs = {
  orderBy?: Array<NoteOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: NoteWhereInput;
};

export type QueryNotesCountArgs = {
  where?: NoteWhereInput;
};

export type QueryPaymentMethodArgs = {
  where: PaymentMethodWhereUniqueInput;
};

export type QueryPaymentMethodsArgs = {
  orderBy?: Array<PaymentMethodOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: PaymentMethodWhereInput;
};

export type QueryPaymentMethodsCountArgs = {
  where?: PaymentMethodWhereInput;
};

export type QueryPermissionArgs = {
  where: PermissionWhereUniqueInput;
};

export type QueryPermissionsArgs = {
  orderBy?: Array<PermissionOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: PermissionWhereInput;
};

export type QueryPermissionsCountArgs = {
  where?: PermissionWhereInput;
};

export type QueryPlanArgs = {
  where: PlanWhereUniqueInput;
};

export type QueryPlanOptionArgs = {
  where: PlanOptionWhereUniqueInput;
};

export type QueryPlanOptionsArgs = {
  orderBy?: Array<PlanOptionOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: PlanOptionWhereInput;
};

export type QueryPlanOptionsCountArgs = {
  where?: PlanOptionWhereInput;
};

export type QueryPlansArgs = {
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: PlanWhereInput;
};

export type QueryPlansCountArgs = {
  where?: PlanWhereInput;
};

export type QueryProspectArgs = {
  where: ProspectWhereUniqueInput;
};

export type QueryProspectsArgs = {
  orderBy?: Array<ProspectOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: ProspectWhereInput;
};

export type QueryProspectsCountArgs = {
  where?: ProspectWhereInput;
};

export type QueryRoleArgs = {
  where: RoleWhereUniqueInput;
};

export type QueryRolesArgs = {
  orderBy?: Array<RoleOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: RoleWhereInput;
};

export type QueryRolesCountArgs = {
  where?: RoleWhereInput;
};

export type QuerySIcArgs = {
  where: SicWhereUniqueInput;
};

export type QuerySIcsArgs = {
  orderBy?: Array<SicOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: SicWhereInput;
};

export type QuerySIcsCountArgs = {
  where?: SicWhereInput;
};

export type QuerySearchLogArgs = {
  where: SearchLogWhereUniqueInput;
};

export type QuerySearchLogsArgs = {
  orderBy?: Array<SearchLogOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: SearchLogWhereInput;
};

export type QuerySearchLogsCountArgs = {
  where?: SearchLogWhereInput;
};

export type QueryStripeSubscriptionArgs = {
  where: StripeSubscriptionWhereUniqueInput;
};

export type QueryStripeSubscriptionsArgs = {
  orderBy?: Array<StripeSubscriptionOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: StripeSubscriptionWhereInput;
};

export type QueryStripeSubscriptionsCountArgs = {
  where?: StripeSubscriptionWhereInput;
};

export type QuerySystemConfigArgs = {
  where: SystemConfigWhereUniqueInput;
};

export type QuerySystemConfigsArgs = {
  orderBy?: Array<SystemConfigOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: SystemConfigWhereInput;
};

export type QuerySystemConfigsCountArgs = {
  where?: SystemConfigWhereInput;
};

export type QueryTeamArgs = {
  where: TeamWhereUniqueInput;
};

export type QueryTeamsArgs = {
  orderBy?: Array<TeamOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: TeamWhereInput;
};

export type QueryTeamsCountArgs = {
  where?: TeamWhereInput;
};

export type QueryTopupCreditArgs = {
  where: TopupCreditWhereUniqueInput;
};

export type QueryTopupCreditsArgs = {
  orderBy?: Array<TopupCreditOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: TopupCreditWhereInput;
};

export type QueryTopupCreditsCountArgs = {
  where?: TopupCreditWhereInput;
};

export type QueryTopupTransactionArgs = {
  where: TopupTransactionWhereUniqueInput;
};

export type QueryTopupTransactionsArgs = {
  orderBy?: Array<TopupTransactionOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: TopupTransactionWhereInput;
};

export type QueryTopupTransactionsCountArgs = {
  where?: TopupTransactionWhereInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUserTokenArgs = {
  where: UserTokenWhereUniqueInput;
};

export type QueryUserTokensArgs = {
  orderBy?: Array<UserTokenOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: UserTokenWhereInput;
};

export type QueryUserTokensCountArgs = {
  where?: UserTokenWhereInput;
};

export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars["Int"];
  take?: Scalars["Int"];
  where?: UserWhereInput;
};

export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive",
}

export enum ReasonType {
  BadQualityData = "badQualityData",
  FoundANewTool = "foundANewTool",
  HardToUse = "hardToUse",
  NoLongerNeeded = "noLongerNeeded",
  Other = "other",
  QuitMyJob = "quitMyJob",
}

export type RegisterResponse = {
  __typename?: "RegisterResponse";
  invitedTeamId?: Maybe<Scalars["String"]>;
  isActivated?: Maybe<Scalars["Boolean"]>;
  isRegisterSuccess?: Maybe<Scalars["Boolean"]>;
};

export type Role = {
  __typename?: "Role";
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  permissions?: Maybe<Array<Permission>>;
  permissionsCount?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type RolePermissionsArgs = {
  orderBy?: Array<PermissionOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: PermissionWhereInput;
};

export type RolePermissionsCountArgs = {
  where?: PermissionWhereInput;
};

export type RoleCreateInput = {
  code?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<PermissionRelateToManyForCreateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type RoleManyRelationFilter = {
  every?: InputMaybe<RoleWhereInput>;
  none?: InputMaybe<RoleWhereInput>;
  some?: InputMaybe<RoleWhereInput>;
};

export type RoleOrderByInput = {
  code?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type RoleRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  create?: InputMaybe<Array<RoleCreateInput>>;
};

export type RoleRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  create?: InputMaybe<Array<RoleCreateInput>>;
  disconnect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  set?: InputMaybe<Array<RoleWhereUniqueInput>>;
};

export type RoleRelateToOneForCreateInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  create?: InputMaybe<RoleCreateInput>;
};

export type RoleRelateToOneForUpdateInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  create?: InputMaybe<RoleCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type RoleUpdateArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};

export type RoleUpdateInput = {
  code?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<PermissionRelateToManyForUpdateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<PermissionManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type RoleWhereUniqueInput = {
  code?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type Sic = {
  __typename?: "SIC";
  Division?: Maybe<Scalars["String"]>;
  SICCode?: Maybe<Scalars["Int"]>;
  SICDescription?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
};

export type SicCreateInput = {
  Division?: InputMaybe<Scalars["String"]>;
  SICCode?: InputMaybe<Scalars["Int"]>;
  SICDescription?: InputMaybe<Scalars["String"]>;
};

export type SicOrderByInput = {
  Division?: InputMaybe<OrderDirection>;
  SICCode?: InputMaybe<OrderDirection>;
  SICDescription?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type SicUpdateArgs = {
  data: SicUpdateInput;
  where: SicWhereUniqueInput;
};

export type SicUpdateInput = {
  Division?: InputMaybe<Scalars["String"]>;
  SICCode?: InputMaybe<Scalars["Int"]>;
  SICDescription?: InputMaybe<Scalars["String"]>;
};

export type SicWhereInput = {
  AND?: InputMaybe<Array<SicWhereInput>>;
  Division?: InputMaybe<StringNullableFilter>;
  NOT?: InputMaybe<Array<SicWhereInput>>;
  OR?: InputMaybe<Array<SicWhereInput>>;
  SICCode?: InputMaybe<IntNullableFilter>;
  SICDescription?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
};

export type SicWhereUniqueInput = {
  SICCode?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export enum ScopeSearchPositionEnum {
  All = "all",
  Team = "team",
}

export type SearchLog = {
  __typename?: "SearchLog";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<User>;
  id: Scalars["ID"];
  searchParams?: Maybe<Scalars["JSON"]>;
  searchText?: Maybe<Scalars["String"]>;
  team?: Maybe<Team>;
  totalResults?: Maybe<Scalars["Int"]>;
  type?: Maybe<SearchLogTypeType>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type SearchLogCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
  searchParams?: InputMaybe<Scalars["JSON"]>;
  searchText?: InputMaybe<Scalars["String"]>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  totalResults?: InputMaybe<Scalars["Int"]>;
  type?: InputMaybe<SearchLogTypeType>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type SearchLogOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  searchText?: InputMaybe<OrderDirection>;
  totalResults?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export enum SearchLogTypeType {
  Contact = "CONTACT",
  Prospect = "PROSPECT",
}

export type SearchLogTypeTypeNullableFilter = {
  equals?: InputMaybe<SearchLogTypeType>;
  in?: InputMaybe<Array<SearchLogTypeType>>;
  not?: InputMaybe<SearchLogTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<SearchLogTypeType>>;
};

export type SearchLogUpdateArgs = {
  data: SearchLogUpdateInput;
  where: SearchLogWhereUniqueInput;
};

export type SearchLogUpdateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  searchParams?: InputMaybe<Scalars["JSON"]>;
  searchText?: InputMaybe<Scalars["String"]>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  totalResults?: InputMaybe<Scalars["Int"]>;
  type?: InputMaybe<SearchLogTypeType>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type SearchLogWhereInput = {
  AND?: InputMaybe<Array<SearchLogWhereInput>>;
  NOT?: InputMaybe<Array<SearchLogWhereInput>>;
  OR?: InputMaybe<Array<SearchLogWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  searchText?: InputMaybe<StringFilter>;
  team?: InputMaybe<TeamWhereInput>;
  totalResults?: InputMaybe<IntNullableFilter>;
  type?: InputMaybe<SearchLogTypeTypeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type SearchLogWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type StaticValues = {
  __typename?: "StaticValues";
  changeOwnerRoleActions?: Maybe<Array<Maybe<StaticValuesOption>>>;
  claimTypes?: Maybe<Array<Maybe<StaticValuesOption>>>;
  couponCurrencies?: Maybe<Array<Maybe<StaticValuesOption>>>;
  couponDiscountTypes?: Maybe<Array<Maybe<StaticValuesOption>>>;
  couponDurations?: Maybe<Array<Maybe<StaticValuesOption>>>;
  creditTypes?: Maybe<Array<Maybe<StaticValuesOption>>>;
  invitationStatuses?: Maybe<Array<Maybe<StaticValuesOption>>>;
  monthTypes?: Maybe<Array<Maybe<StaticValuesOption>>>;
  planIntervalTypes?: Maybe<Array<Maybe<StaticValuesOption>>>;
  planTypes?: Maybe<Array<Maybe<StaticValuesOption>>>;
  reasonCloseAccounts?: Maybe<Array<Maybe<StaticValuesOption>>>;
  roles?: Maybe<Array<Maybe<Role>>>;
  subscriptionStatuses?: Maybe<Array<Maybe<StaticValuesOption>>>;
};

export type StaticValuesOption = {
  __typename?: "StaticValuesOption";
  label?: Maybe<Scalars["String"]>;
  value: Scalars["String"];
};

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type StripeSubscription = {
  __typename?: "StripeSubscription";
  coupon?: Maybe<Coupon>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  currentPeriodEnd?: Maybe<Scalars["DateTime"]>;
  details?: Maybe<Scalars["JSON"]>;
  id: Scalars["ID"];
  monthlyCredits?: Maybe<Scalars["Int"]>;
  nextRolloverDate?: Maybe<Scalars["DateTime"]>;
  planOption?: Maybe<PlanOption>;
  status?: Maybe<StripeSubscriptionStatusType>;
  stripeSubscriptionId?: Maybe<Scalars["String"]>;
  team?: Maybe<Team>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type StripeSubscriptionCreateInput = {
  coupon?: InputMaybe<CouponRelateToOneForCreateInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  currentPeriodEnd?: InputMaybe<Scalars["DateTime"]>;
  details?: InputMaybe<Scalars["JSON"]>;
  monthlyCredits?: InputMaybe<Scalars["Int"]>;
  nextRolloverDate?: InputMaybe<Scalars["DateTime"]>;
  planOption?: InputMaybe<PlanOptionRelateToOneForCreateInput>;
  status?: InputMaybe<StripeSubscriptionStatusType>;
  stripeSubscriptionId?: InputMaybe<Scalars["String"]>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type StripeSubscriptionOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  currentPeriodEnd?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  monthlyCredits?: InputMaybe<OrderDirection>;
  nextRolloverDate?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  stripeSubscriptionId?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type StripeSubscriptionQuery = {
  __typename?: "StripeSubscriptionQuery";
  getCurrentSubscription?: Maybe<StripeSubscription>;
  getLinkDownloadUrl?: Maybe<Scalars["String"]>;
  getPaymentMethod?: Maybe<PaymentMethodResponse>;
  getPlans?: Maybe<Plans>;
  getTeamInvoices?: Maybe<Invoices>;
};

export type StripeSubscriptionQueryGetPlansArgs = {
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["PaginationTake"]>;
  where?: PlanWhereInput;
};

export type StripeSubscriptionQueryGetTeamInvoicesArgs = {
  orderBy?: Array<InvoiceOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["PaginationTake"]>;
  where?: InvoiceWhereInput;
};

export enum StripeSubscriptionStatusType {
  Active = "active",
  Canceled = "canceled",
  Incomplete = "incomplete",
  IncompleteExpired = "incomplete_expired",
  PastDue = "past_due",
  Trialing = "trialing",
  Unpaid = "unpaid",
}

export type StripeSubscriptionStatusTypeNullableFilter = {
  equals?: InputMaybe<StripeSubscriptionStatusType>;
  in?: InputMaybe<Array<StripeSubscriptionStatusType>>;
  not?: InputMaybe<StripeSubscriptionStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<StripeSubscriptionStatusType>>;
};

export type StripeSubscriptionUpdateArgs = {
  data: StripeSubscriptionUpdateInput;
  where: StripeSubscriptionWhereUniqueInput;
};

export type StripeSubscriptionUpdateInput = {
  coupon?: InputMaybe<CouponRelateToOneForUpdateInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  currentPeriodEnd?: InputMaybe<Scalars["DateTime"]>;
  details?: InputMaybe<Scalars["JSON"]>;
  monthlyCredits?: InputMaybe<Scalars["Int"]>;
  nextRolloverDate?: InputMaybe<Scalars["DateTime"]>;
  planOption?: InputMaybe<PlanOptionRelateToOneForUpdateInput>;
  status?: InputMaybe<StripeSubscriptionStatusType>;
  stripeSubscriptionId?: InputMaybe<Scalars["String"]>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type StripeSubscriptionWhereInput = {
  AND?: InputMaybe<Array<StripeSubscriptionWhereInput>>;
  NOT?: InputMaybe<Array<StripeSubscriptionWhereInput>>;
  OR?: InputMaybe<Array<StripeSubscriptionWhereInput>>;
  coupon?: InputMaybe<CouponWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentPeriodEnd?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  monthlyCredits?: InputMaybe<IntNullableFilter>;
  nextRolloverDate?: InputMaybe<DateTimeNullableFilter>;
  planOption?: InputMaybe<PlanOptionWhereInput>;
  status?: InputMaybe<StripeSubscriptionStatusTypeNullableFilter>;
  stripeSubscriptionId?: InputMaybe<StringFilter>;
  team?: InputMaybe<TeamWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type StripeSubscriptionWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type SubscriptionConfirmCreateInput = {
  couponCode?: InputMaybe<Scalars["String"]>;
  planOptionId: Scalars["String"];
  subscriptionIdToDelete?: InputMaybe<Scalars["String"]>;
};

export type SubscriptionConfirmResponse = {
  __typename?: "SubscriptionConfirmResponse";
  amount?: Maybe<Scalars["Float"]>;
  clientSecret?: Maybe<Scalars["String"]>;
  coupon?: Maybe<Coupon>;
  discountAmount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  paymentStatus?: Maybe<Scalars["String"]>;
  planId?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Float"]>;
  stripeSubscriptionId?: Maybe<Scalars["String"]>;
};

export type SubscriptionMutation = {
  __typename?: "SubscriptionMutation";
  assignSubscriptionToTeam?: Maybe<StripeSubscription>;
  createCoupon?: Maybe<Coupon>;
  createPaymentMethod?: Maybe<Scalars["Boolean"]>;
  createPlan?: Maybe<Plan>;
  createPlanOption?: Maybe<PlanOption>;
  createSubscription?: Maybe<SubscriptionResponse>;
  createSubscriptionConfirm?: Maybe<SubscriptionConfirmResponse>;
  updatePlan?: Maybe<Plan>;
  updatePlanOption?: Maybe<PlanOption>;
  updateSubscription?: Maybe<SubscriptionResponse>;
};

export type SubscriptionMutationAssignSubscriptionToTeamArgs = {
  planOptionId: Scalars["String"];
};

export type SubscriptionMutationCreateCouponArgs = {
  data?: InputMaybe<CouponCreateInput>;
};

export type SubscriptionMutationCreatePaymentMethodArgs = {
  stripePaymentMethodId: Scalars["String"];
};

export type SubscriptionMutationCreatePlanArgs = {
  data: CusPlanCreateInput;
};

export type SubscriptionMutationCreatePlanOptionArgs = {
  data: PlanOptionCreateInput;
};

export type SubscriptionMutationCreateSubscriptionArgs = {
  stripeSubscriptionId: Scalars["String"];
};

export type SubscriptionMutationCreateSubscriptionConfirmArgs = {
  billingDetails?: InputMaybe<BillingDetails>;
  data: SubscriptionConfirmCreateInput;
};

export type SubscriptionMutationUpdatePlanArgs = {
  data?: InputMaybe<CusPlanUpdateInput>;
  planId?: InputMaybe<Scalars["String"]>;
};

export type SubscriptionMutationUpdatePlanOptionArgs = {
  data: PlanOptionUpdateInput;
  planOptionId: Scalars["String"];
};

export type SubscriptionMutationUpdateSubscriptionArgs = {
  data?: InputMaybe<CusSubscriptionUpdateInput>;
  planId: Scalars["String"];
  subscriptionId: Scalars["String"];
};

export type SubscriptionResponse = {
  __typename?: "SubscriptionResponse";
  subscriptionId?: Maybe<Scalars["String"]>;
};

export type SubscriptionStatus = {
  __typename?: "SubscriptionStatus";
  subscriptionStatus?: Maybe<Scalars["String"]>;
};

export type SystemConfig = {
  __typename?: "SystemConfig";
  chargeCreditRevealContact?: Maybe<Scalars["Int"]>;
  chargeCreditRevealContactOnDMU?: Maybe<Scalars["Int"]>;
  chromeExtensionUrl?: Maybe<Scalars["String"]>;
  contactSupportUrl?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  customerSupportUrl?: Maybe<Scalars["String"]>;
  dataGuaranteeUrl?: Maybe<Scalars["String"]>;
  extensionPreferences?: Maybe<Scalars["JSON"]>;
  id: Scalars["ID"];
  isActive?: Maybe<Scalars["Boolean"]>;
  learnModelUrl?: Maybe<Scalars["String"]>;
  maxCreditReturnPercentage?: Maybe<Scalars["Int"]>;
  planPromotionText?: Maybe<Scalars["String"]>;
  policyUrl?: Maybe<Scalars["String"]>;
  termOfUseUrl?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userRolesUrl?: Maybe<Scalars["String"]>;
  webAppPreferences?: Maybe<Scalars["JSON"]>;
};

export type SystemConfigCreateInput = {
  chargeCreditRevealContact?: InputMaybe<Scalars["Int"]>;
  chargeCreditRevealContactOnDMU?: InputMaybe<Scalars["Int"]>;
  chromeExtensionUrl?: InputMaybe<Scalars["String"]>;
  contactSupportUrl?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  customerSupportUrl?: InputMaybe<Scalars["String"]>;
  dataGuaranteeUrl?: InputMaybe<Scalars["String"]>;
  extensionPreferences?: InputMaybe<Scalars["JSON"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  learnModelUrl?: InputMaybe<Scalars["String"]>;
  maxCreditReturnPercentage?: InputMaybe<Scalars["Int"]>;
  planPromotionText?: InputMaybe<Scalars["String"]>;
  policyUrl?: InputMaybe<Scalars["String"]>;
  termOfUseUrl?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  userRolesUrl?: InputMaybe<Scalars["String"]>;
  webAppPreferences?: InputMaybe<Scalars["JSON"]>;
};

export type SystemConfigMutations = {
  __typename?: "SystemConfigMutations";
  updateSystemConfig?: Maybe<SystemConfig>;
};

export type SystemConfigMutationsUpdateSystemConfigArgs = {
  data: SystemConfigUpdateInput;
  where: SystemConfigWhereUniqueInput;
};

export type SystemConfigOrderByInput = {
  chargeCreditRevealContact?: InputMaybe<OrderDirection>;
  chargeCreditRevealContactOnDMU?: InputMaybe<OrderDirection>;
  chromeExtensionUrl?: InputMaybe<OrderDirection>;
  contactSupportUrl?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  customerSupportUrl?: InputMaybe<OrderDirection>;
  dataGuaranteeUrl?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isActive?: InputMaybe<OrderDirection>;
  learnModelUrl?: InputMaybe<OrderDirection>;
  maxCreditReturnPercentage?: InputMaybe<OrderDirection>;
  planPromotionText?: InputMaybe<OrderDirection>;
  policyUrl?: InputMaybe<OrderDirection>;
  termOfUseUrl?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  userRolesUrl?: InputMaybe<OrderDirection>;
};

export type SystemConfigResponse = {
  __typename?: "SystemConfigResponse";
  chargeCreditRevealContact?: Maybe<Scalars["Int"]>;
  chargeCreditRevealContactOnDMU?: Maybe<Scalars["Int"]>;
  chromeExtensionUrl?: Maybe<Scalars["String"]>;
  contactSupportUrl?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["String"]>;
  customerSupportUrl?: Maybe<Scalars["String"]>;
  dataGuaranteeUrl?: Maybe<Scalars["String"]>;
  extensionPreferences?: Maybe<Scalars["JSON"]>;
  id?: Maybe<Scalars["ID"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  learnModelUrl?: Maybe<Scalars["String"]>;
  planPromotionText?: Maybe<Scalars["String"]>;
  policyUrl?: Maybe<Scalars["String"]>;
  termOfUseUrl?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
  userRolesUrl?: Maybe<Scalars["String"]>;
  webAppPreferences?: Maybe<Scalars["JSON"]>;
};

export type SystemConfigUpdateArgs = {
  data: SystemConfigUpdateInput;
  where: SystemConfigWhereUniqueInput;
};

export type SystemConfigUpdateInput = {
  chargeCreditRevealContact?: InputMaybe<Scalars["Int"]>;
  chargeCreditRevealContactOnDMU?: InputMaybe<Scalars["Int"]>;
  chromeExtensionUrl?: InputMaybe<Scalars["String"]>;
  contactSupportUrl?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  customerSupportUrl?: InputMaybe<Scalars["String"]>;
  dataGuaranteeUrl?: InputMaybe<Scalars["String"]>;
  extensionPreferences?: InputMaybe<Scalars["JSON"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  learnModelUrl?: InputMaybe<Scalars["String"]>;
  maxCreditReturnPercentage?: InputMaybe<Scalars["Int"]>;
  planPromotionText?: InputMaybe<Scalars["String"]>;
  policyUrl?: InputMaybe<Scalars["String"]>;
  termOfUseUrl?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  userRolesUrl?: InputMaybe<Scalars["String"]>;
  webAppPreferences?: InputMaybe<Scalars["JSON"]>;
};

export type SystemConfigWhereInput = {
  AND?: InputMaybe<Array<SystemConfigWhereInput>>;
  NOT?: InputMaybe<Array<SystemConfigWhereInput>>;
  OR?: InputMaybe<Array<SystemConfigWhereInput>>;
  chargeCreditRevealContact?: InputMaybe<IntNullableFilter>;
  chargeCreditRevealContactOnDMU?: InputMaybe<IntNullableFilter>;
  chromeExtensionUrl?: InputMaybe<StringFilter>;
  contactSupportUrl?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  customerSupportUrl?: InputMaybe<StringFilter>;
  dataGuaranteeUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  learnModelUrl?: InputMaybe<StringFilter>;
  maxCreditReturnPercentage?: InputMaybe<IntNullableFilter>;
  planPromotionText?: InputMaybe<StringFilter>;
  policyUrl?: InputMaybe<StringFilter>;
  termOfUseUrl?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userRolesUrl?: InputMaybe<StringFilter>;
};

export type SystemConfigWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type SystemQueries = {
  __typename?: "SystemQueries";
  getSystemConfig?: Maybe<SystemConfig>;
};

export type Team = {
  __typename?: "Team";
  createdAt?: Maybe<Scalars["DateTime"]>;
  creditsUsed?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  totalCredits?: Maybe<Scalars["Int"]>;
  totalMembersCount?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type TeamCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  creditsUsed?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  totalCredits?: InputMaybe<Scalars["Int"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type TeamInfo = {
  __typename?: "TeamInfo";
  availableCredits?: Maybe<Scalars["Int"]>;
  creditsUsed?: Maybe<Scalars["Int"]>;
  nextRollOver?: Maybe<Scalars["Int"]>;
  totalMembersCount?: Maybe<Scalars["Int"]>;
};

export type TeamMetrics = {
  __typename?: "TeamMetrics";
  contactListsCount?: Maybe<Scalars["Int"]>;
  contactsCount?: Maybe<Scalars["Int"]>;
  totalCredits?: Maybe<Scalars["Int"]>;
  userMembersCount?: Maybe<Scalars["Int"]>;
  vipContactListsCount?: Maybe<Scalars["Int"]>;
};

export type TeamMutations = {
  __typename?: "TeamMutations";
  addContactsFromList?: Maybe<ListContact>;
  changeAccountOwnerRole?: Maybe<Member>;
  changeMemberRole?: Maybe<Member>;
  createContact?: Maybe<Contact>;
  createContacts?: Maybe<Array<Contact>>;
  createDMUContact?: Maybe<Contact>;
  createDataClaim?: Maybe<DataClaim>;
  createListContact?: Maybe<ListContact>;
  createNote?: Maybe<Note>;
  createTopupPayment?: Maybe<TopupCreditResponse>;
  deleteDataClaim?: Maybe<DataClaim>;
  deleteListContacts?: Maybe<Array<Maybe<ListContact>>>;
  deleteNote?: Maybe<Note>;
  inviteUser?: Maybe<Scalars["String"]>;
  moveContactToOtherList?: Maybe<ListContact>;
  removeMember?: Maybe<Member>;
  revealAllProspects?: Maybe<Scalars["Int"]>;
  unlinkContacts?: Maybe<Scalars["Boolean"]>;
  updateContact?: Maybe<Contact>;
  updateContacts?: Maybe<Array<Maybe<Contact>>>;
  updateDataClaim?: Maybe<DataClaim>;
  updateListContact?: Maybe<ListContact>;
  updateListContacts?: Maybe<Array<ListContact>>;
  updateNote?: Maybe<Note>;
  updateTeamBillingDetails?: Maybe<BillingDetailsResponse>;
  updateTopupPayment?: Maybe<Scalars["Boolean"]>;
};

export type TeamMutationsAddContactsFromListArgs = {
  action: ChangeContactsActions;
  contactIds?: InputMaybe<Array<Scalars["String"]>>;
  id: Scalars["String"];
};

export type TeamMutationsChangeAccountOwnerRoleArgs = {
  action?: InputMaybe<ChangeOwnerRoleActions>;
  targetUserId: Scalars["String"];
};

export type TeamMutationsChangeMemberRoleArgs = {
  newRoleId: Scalars["String"];
  targetUserId: Scalars["String"];
};

export type TeamMutationsCreateContactArgs = {
  isVIP?: InputMaybe<Scalars["Boolean"]>;
  prospectId: Scalars["String"];
};

export type TeamMutationsCreateContactsArgs = {
  isVIP?: InputMaybe<Scalars["Boolean"]>;
  prospectIds?: InputMaybe<Array<Scalars["String"]>>;
};

export type TeamMutationsCreateDmuContactArgs = {
  isVIP?: InputMaybe<Scalars["Boolean"]>;
  prospectId: Scalars["String"];
};

export type TeamMutationsCreateDataClaimArgs = {
  data: CusDataClaimInput;
};

export type TeamMutationsCreateListContactArgs = {
  contactIds?: InputMaybe<Array<Scalars["String"]>>;
  isVIP?: InputMaybe<Scalars["Boolean"]>;
  name: Scalars["String"];
};

export type TeamMutationsCreateNoteArgs = {
  content: Scalars["String"];
  relatedId: Scalars["String"];
  relatedType: NoteRelatedTypeEnums;
};

export type TeamMutationsCreateTopupPaymentArgs = {
  billingDetails?: InputMaybe<BillingDetails>;
  topupId: Scalars["String"];
};

export type TeamMutationsDeleteDataClaimArgs = {
  where: DataClaimWhereUniqueInput;
};

export type TeamMutationsDeleteListContactsArgs = {
  ids?: InputMaybe<Array<Scalars["String"]>>;
};

export type TeamMutationsDeleteNoteArgs = {
  id: Scalars["String"];
};

export type TeamMutationsInviteUserArgs = {
  firstName: Scalars["String"];
  invitedEmail: Scalars["String"];
  lastName: Scalars["String"];
  roleId?: InputMaybe<Scalars["String"]>;
};

export type TeamMutationsMoveContactToOtherListArgs = {
  contactIds?: InputMaybe<Array<Scalars["String"]>>;
  fromListId: Scalars["String"];
  toListId: Scalars["String"];
};

export type TeamMutationsRemoveMemberArgs = {
  targetEmail: Scalars["String"];
};

export type TeamMutationsRevealAllProspectsArgs = {
  companyId: Scalars["String"];
};

export type TeamMutationsUnlinkContactsArgs = {
  contactIds?: InputMaybe<Array<Scalars["String"]>>;
  listContactId: Scalars["String"];
};

export type TeamMutationsUpdateContactArgs = {
  id: Scalars["String"];
  params: ContactUpdateInputParams;
};

export type TeamMutationsUpdateContactsArgs = {
  ids: Array<Scalars["String"]>;
  params: ContactUpdateInputParams;
};

export type TeamMutationsUpdateDataClaimArgs = {
  data: CusDataClaimInput;
  dataClaimId: Scalars["String"];
};

export type TeamMutationsUpdateListContactArgs = {
  id: Scalars["String"];
  params: ListContactUpdateInputParams;
};

export type TeamMutationsUpdateListContactsArgs = {
  ids?: InputMaybe<Array<Scalars["String"]>>;
  params: ListContactUpdateInputParams;
};

export type TeamMutationsUpdateNoteArgs = {
  content: Scalars["String"];
  id: Scalars["String"];
};

export type TeamMutationsUpdateTeamBillingDetailsArgs = {
  billingDetails: BillingDetails;
};

export type TeamMutationsUpdateTopupPaymentArgs = {
  invoiceId: Scalars["String"];
  topupId: Scalars["String"];
};

export type TeamOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  creditsUsed?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  totalCredits?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type TeamQueries = {
  __typename?: "TeamQueries";
  exportCSVContacts?: Maybe<Scalars["String"]>;
  exportCSVListContacts?: Maybe<Scalars["String"]>;
  getContacts?: Maybe<Contacts>;
  getContactsInOneList?: Maybe<Contacts>;
  getCreatedByContactLists?: Maybe<Array<User>>;
  getCreatedByContacts?: Maybe<Array<User>>;
  getCreditHistories?: Maybe<CreditHistories>;
  getDMUCompanyProspects?: Maybe<Prospects>;
  getDataClaims?: Maybe<DataClaims>;
  getEmployeeStatisticProspects?: Maybe<Array<EmployeeStatistic>>;
  getFilterProspects?: Maybe<Prospects>;
  getListContacts?: Maybe<ListContacts>;
  getNotes?: Maybe<Notes>;
  getProspectInfo?: Maybe<ProspectInfo>;
  getProspectSearchLogs?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  getRandomTopups?: Maybe<TopupCredits>;
  getRecentlyAddedContacts?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  getRecentlyContacts?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  getSearchLog?: Maybe<SearchLog>;
  getTeamBillingDetails?: Maybe<BillingDetailsResponse>;
  getTeamInfo?: Maybe<TeamInfo>;
  getTeamMetrics?: Maybe<TeamMetrics>;
  verifyRevealAllProspects?: Maybe<VerifyRevealProspect>;
};

export type TeamQueriesExportCsvContactsArgs = {
  contactIds?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  isExportAll?: InputMaybe<Scalars["Boolean"]>;
  listContactId?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<Array<ContactOrderByInput>>;
  where?: InputMaybe<ContactWhereInput>;
};

export type TeamQueriesExportCsvListContactsArgs = {
  isExportAll?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<Array<ListContactOrderByInput>>;
  selectLists?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  where?: InputMaybe<ListContactWhereInput>;
};

export type TeamQueriesGetContactsArgs = {
  orderBy?: InputMaybe<Array<ContactOrderByInput>>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["PaginationTake"]>;
  where?: InputMaybe<ContactWhereInput>;
};

export type TeamQueriesGetContactsInOneListArgs = {
  listContactId: Scalars["String"];
  orderBy?: InputMaybe<Array<ContactOrderByInput>>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["PaginationTake"]>;
  where?: InputMaybe<ContactWhereInput>;
};

export type TeamQueriesGetCreditHistoriesArgs = {
  orderBy?: InputMaybe<Array<CreditHistoryOrderByInput>>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["PaginationTake"]>;
  where?: InputMaybe<CreditHistoryWhereInput>;
};

export type TeamQueriesGetDmuCompanyProspectsArgs = {
  orderBy?: InputMaybe<Array<ProspectOrderByInput>>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["PaginationTake"]>;
  where?: InputMaybe<ProspectWhereInput>;
};

export type TeamQueriesGetDataClaimsArgs = {
  orderBy?: Array<DataClaimOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["PaginationTake"]>;
  where?: DataClaimWhereInput;
};

export type TeamQueriesGetEmployeeStatisticProspectsArgs = {
  companyId: Scalars["String"];
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["PaginationTake"]>;
};

export type TeamQueriesGetFilterProspectsArgs = {
  CompanyNames?: InputMaybe<Array<Scalars["String"]>>;
  Countries?: InputMaybe<Array<Scalars["String"]>>;
  Departments?: InputMaybe<Array<Scalars["String"]>>;
  Employees?: InputMaybe<Array<Scalars["String"]>>;
  Localities?: InputMaybe<Array<Scalars["String"]>>;
  Positions?: InputMaybe<Array<Scalars["String"]>>;
  Revenues?: InputMaybe<Array<Scalars["String"]>>;
  Roles?: InputMaybe<Array<Scalars["String"]>>;
  SICCodes?: InputMaybe<Array<Scalars["Int"]>>;
  orderBy?: InputMaybe<Array<ProspectOrderByInput>>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["PaginationTake"]>;
};

export type TeamQueriesGetListContactsArgs = {
  orderBy?: InputMaybe<Array<ListContactOrderByInput>>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["PaginationTake"]>;
  where?: InputMaybe<ListContactWhereInput>;
};

export type TeamQueriesGetNotesArgs = {
  orderBy?: InputMaybe<Array<NoteOrderByInput>>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["PaginationTake"]>;
  where?: InputMaybe<NoteWhereInput>;
};

export type TeamQueriesGetProspectInfoArgs = {
  linkedinUrl: Scalars["String"];
};

export type TeamQueriesGetSearchLogArgs = {
  id: Scalars["String"];
};

export type TeamQueriesVerifyRevealAllProspectsArgs = {
  companyId: Scalars["String"];
};

export type TeamRelateToOneForCreateInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  create?: InputMaybe<TeamCreateInput>;
};

export type TeamRelateToOneForUpdateInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  create?: InputMaybe<TeamCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type TeamUpdateArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};

export type TeamUpdateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  creditsUsed?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  totalCredits?: InputMaybe<Scalars["Int"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type TeamWhereInput = {
  AND?: InputMaybe<Array<TeamWhereInput>>;
  NOT?: InputMaybe<Array<TeamWhereInput>>;
  OR?: InputMaybe<Array<TeamWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  creditsUsed?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  totalCredits?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type TeamWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type TextSearchOption = {
  __typename?: "TextSearchOption";
  label?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type TopupCredit = {
  __typename?: "TopupCredit";
  createdAt?: Maybe<Scalars["DateTime"]>;
  credits?: Maybe<Scalars["Int"]>;
  currency?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Float"]>;
  stripePriceId?: Maybe<Scalars["String"]>;
  stripeProductId?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type TopupCreditCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  credits?: InputMaybe<Scalars["Int"]>;
  currency?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  stripePriceId?: InputMaybe<Scalars["String"]>;
  stripeProductId?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type TopupCreditOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  credits?: InputMaybe<OrderDirection>;
  currency?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  stripePriceId?: InputMaybe<OrderDirection>;
  stripeProductId?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type TopupCreditRelateToOneForCreateInput = {
  connect?: InputMaybe<TopupCreditWhereUniqueInput>;
  create?: InputMaybe<TopupCreditCreateInput>;
};

export type TopupCreditRelateToOneForUpdateInput = {
  connect?: InputMaybe<TopupCreditWhereUniqueInput>;
  create?: InputMaybe<TopupCreditCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type TopupCreditResponse = {
  __typename?: "TopupCreditResponse";
  clientSecret?: Maybe<Scalars["String"]>;
  credits?: Maybe<Scalars["Float"]>;
  invoiceId?: Maybe<Scalars["String"]>;
  invoiceStatus?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Float"]>;
  topupId?: Maybe<Scalars["String"]>;
};

export type TopupCreditUpdateArgs = {
  data: TopupCreditUpdateInput;
  where: TopupCreditWhereUniqueInput;
};

export type TopupCreditUpdateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  credits?: InputMaybe<Scalars["Int"]>;
  currency?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  stripePriceId?: InputMaybe<Scalars["String"]>;
  stripeProductId?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type TopupCreditWhereInput = {
  AND?: InputMaybe<Array<TopupCreditWhereInput>>;
  NOT?: InputMaybe<Array<TopupCreditWhereInput>>;
  OR?: InputMaybe<Array<TopupCreditWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  credits?: InputMaybe<IntFilter>;
  currency?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  stripePriceId?: InputMaybe<StringFilter>;
  stripeProductId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type TopupCreditWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type TopupCredits = {
  __typename?: "TopupCredits";
  data?: Maybe<Array<TopupCredit>>;
};

export type TopupTransaction = {
  __typename?: "TopupTransaction";
  createdAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  invoiceId?: Maybe<Scalars["String"]>;
  status?: Maybe<TopupTransactionStatusType>;
  team?: Maybe<Team>;
  topupCredit?: Maybe<TopupCredit>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type TopupTransactionCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  invoiceId?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<TopupTransactionStatusType>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  topupCredit?: InputMaybe<TopupCreditRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type TopupTransactionOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  invoiceId?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export enum TopupTransactionStatusType {
  Open = "open",
  Paid = "paid",
}

export type TopupTransactionStatusTypeNullableFilter = {
  equals?: InputMaybe<TopupTransactionStatusType>;
  in?: InputMaybe<Array<TopupTransactionStatusType>>;
  not?: InputMaybe<TopupTransactionStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<TopupTransactionStatusType>>;
};

export type TopupTransactionUpdateArgs = {
  data: TopupTransactionUpdateInput;
  where: TopupTransactionWhereUniqueInput;
};

export type TopupTransactionUpdateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  invoiceId?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<TopupTransactionStatusType>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  topupCredit?: InputMaybe<TopupCreditRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type TopupTransactionWhereInput = {
  AND?: InputMaybe<Array<TopupTransactionWhereInput>>;
  NOT?: InputMaybe<Array<TopupTransactionWhereInput>>;
  OR?: InputMaybe<Array<TopupTransactionWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  invoiceId?: InputMaybe<StringFilter>;
  status?: InputMaybe<TopupTransactionStatusTypeNullableFilter>;
  team?: InputMaybe<TeamWhereInput>;
  topupCredit?: InputMaybe<TopupCreditWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type TopupTransactionWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
  invoiceId?: InputMaybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  billingDetails?: Maybe<Scalars["JSON"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  defaultTeamId?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isActivated?: Maybe<Scalars["Boolean"]>;
  isBlocked?: Maybe<Scalars["Boolean"]>;
  isCmsAdmin?: Maybe<Scalars["Boolean"]>;
  isDeleted?: Maybe<Scalars["Boolean"]>;
  isEnable2FA?: Maybe<Scalars["Boolean"]>;
  isEnableTrackData?: Maybe<Scalars["Boolean"]>;
  isFirstLogin?: Maybe<Scalars["Boolean"]>;
  isMarketingEmail?: Maybe<Scalars["Boolean"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  lastRevokeAccessTokenAt?: Maybe<Scalars["DateTime"]>;
  password?: Maybe<PasswordState>;
  phoneNumber?: Maybe<Scalars["String"]>;
  photo?: Maybe<ImageFieldOutput>;
  reason?: Maybe<Scalars["String"]>;
  reasonTypes?: Maybe<Scalars["JSON"]>;
  stripeCustomer?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: "UserAuthenticationWithPasswordFailure";
  message: Scalars["String"];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordFailure
  | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: "UserAuthenticationWithPasswordSuccess";
  item: User;
  sessionToken: Scalars["String"];
};

export type UserCreateInput = {
  billingDetails?: InputMaybe<Scalars["JSON"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  defaultTeamId?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  isBlocked?: InputMaybe<Scalars["Boolean"]>;
  isCmsAdmin?: InputMaybe<Scalars["Boolean"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isEnable2FA?: InputMaybe<Scalars["Boolean"]>;
  isEnableTrackData?: InputMaybe<Scalars["Boolean"]>;
  isFirstLogin?: InputMaybe<Scalars["Boolean"]>;
  isMarketingEmail?: InputMaybe<Scalars["Boolean"]>;
  jobTitle?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  lastRevokeAccessTokenAt?: InputMaybe<Scalars["DateTime"]>;
  password?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<ImageFieldInput>;
  reason?: InputMaybe<Scalars["String"]>;
  reasonTypes?: InputMaybe<Scalars["JSON"]>;
  stripeCustomer?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  defaultTeamId?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isActivated?: InputMaybe<OrderDirection>;
  isBlocked?: InputMaybe<OrderDirection>;
  isCmsAdmin?: InputMaybe<OrderDirection>;
  isDeleted?: InputMaybe<OrderDirection>;
  isEnable2FA?: InputMaybe<OrderDirection>;
  isEnableTrackData?: InputMaybe<OrderDirection>;
  isFirstLogin?: InputMaybe<OrderDirection>;
  isMarketingEmail?: InputMaybe<OrderDirection>;
  jobTitle?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  lastRevokeAccessTokenAt?: InputMaybe<OrderDirection>;
  phoneNumber?: InputMaybe<OrderDirection>;
  reason?: InputMaybe<OrderDirection>;
  stripeCustomer?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type UserToken = {
  __typename?: "UserToken";
  confirmCode?: Maybe<Scalars["String"]>;
  confirmCodeIat?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  refreshTokenKey?: Maybe<Scalars["String"]>;
  resetPasswordCode?: Maybe<Scalars["String"]>;
  resetPasswordCodeIat?: Maybe<Scalars["DateTime"]>;
  twoFACode?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<User>;
};

export type UserTokenCreateInput = {
  confirmCode?: InputMaybe<Scalars["String"]>;
  confirmCodeIat?: InputMaybe<Scalars["DateTime"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  refreshTokenKey?: InputMaybe<Scalars["String"]>;
  resetPasswordCode?: InputMaybe<Scalars["String"]>;
  resetPasswordCodeIat?: InputMaybe<Scalars["DateTime"]>;
  twoFACode?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type UserTokenOrderByInput = {
  confirmCode?: InputMaybe<OrderDirection>;
  confirmCodeIat?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  refreshTokenKey?: InputMaybe<OrderDirection>;
  resetPasswordCode?: InputMaybe<OrderDirection>;
  resetPasswordCodeIat?: InputMaybe<OrderDirection>;
  twoFACode?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type UserTokenUpdateArgs = {
  data: UserTokenUpdateInput;
  where: UserTokenWhereUniqueInput;
};

export type UserTokenUpdateInput = {
  confirmCode?: InputMaybe<Scalars["String"]>;
  confirmCodeIat?: InputMaybe<Scalars["DateTime"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  refreshTokenKey?: InputMaybe<Scalars["String"]>;
  resetPasswordCode?: InputMaybe<Scalars["String"]>;
  resetPasswordCodeIat?: InputMaybe<Scalars["DateTime"]>;
  twoFACode?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserTokenWhereInput = {
  AND?: InputMaybe<Array<UserTokenWhereInput>>;
  NOT?: InputMaybe<Array<UserTokenWhereInput>>;
  OR?: InputMaybe<Array<UserTokenWhereInput>>;
  confirmCode?: InputMaybe<StringNullableFilter>;
  confirmCodeIat?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  refreshTokenKey?: InputMaybe<StringFilter>;
  resetPasswordCode?: InputMaybe<StringNullableFilter>;
  resetPasswordCodeIat?: InputMaybe<DateTimeNullableFilter>;
  twoFACode?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type UserTokenWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  billingDetails?: InputMaybe<Scalars["JSON"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  defaultTeamId?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  isBlocked?: InputMaybe<Scalars["Boolean"]>;
  isCmsAdmin?: InputMaybe<Scalars["Boolean"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isEnable2FA?: InputMaybe<Scalars["Boolean"]>;
  isEnableTrackData?: InputMaybe<Scalars["Boolean"]>;
  isFirstLogin?: InputMaybe<Scalars["Boolean"]>;
  isMarketingEmail?: InputMaybe<Scalars["Boolean"]>;
  jobTitle?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  lastRevokeAccessTokenAt?: InputMaybe<Scalars["DateTime"]>;
  password?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<ImageFieldInput>;
  reason?: InputMaybe<Scalars["String"]>;
  reasonTypes?: InputMaybe<Scalars["JSON"]>;
  stripeCustomer?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type UserUpdateInputParams = {
  billingDetails?: InputMaybe<BillingDetails>;
  defaultTeamId?: InputMaybe<Scalars["String"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  isEnable2FA?: InputMaybe<Scalars["Boolean"]>;
  isEnableTrackData?: InputMaybe<Scalars["Boolean"]>;
  isFirstLogin?: InputMaybe<Scalars["Boolean"]>;
  jobTitle?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["String"]>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  defaultTeamId?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isActivated?: InputMaybe<BooleanFilter>;
  isBlocked?: InputMaybe<BooleanFilter>;
  isCmsAdmin?: InputMaybe<BooleanFilter>;
  isDeleted?: InputMaybe<BooleanFilter>;
  isEnable2FA?: InputMaybe<BooleanFilter>;
  isEnableTrackData?: InputMaybe<BooleanFilter>;
  isFirstLogin?: InputMaybe<BooleanFilter>;
  isMarketingEmail?: InputMaybe<BooleanFilter>;
  jobTitle?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  lastRevokeAccessTokenAt?: InputMaybe<DateTimeNullableFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  reason?: InputMaybe<StringNullableFilter>;
  stripeCustomer?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type VerifyRevealProspect = {
  __typename?: "VerifyRevealProspect";
  canRevealAll?: Maybe<Scalars["Boolean"]>;
  totalCounts?: Maybe<Scalars["Int"]>;
  totalCredits?: Maybe<Scalars["Float"]>;
};

export enum ClaimTypeEnums {
  Company = "company",
  Email = "email",
  Nodata = "nodata",
  Other = "other",
  Phone = "phone",
  Phone2 = "phone2",
}

export enum PaymentType {
  Card = "card",
}

export type GetTeamInfoQueryVariables = Exact<{ [key: string]: never }>;

export type GetTeamInfoQuery = {
  __typename?: "Query";
  myTeam?: {
    __typename?: "TeamQueries";
    getTeamInfo?: {
      __typename?: "TeamInfo";
      availableCredits?: number | null;
      creditsUsed?: number | null;
      nextRollOver?: number | null;
      totalMembersCount?: number | null;
    } | null;
  } | null;
};

export const GetTeamInfoDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetTeamInfo" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "myTeam" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "getTeamInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "availableCredits" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creditsUsed" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nextRollOver" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalMembersCount" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTeamInfoQuery, GetTeamInfoQueryVariables>;
