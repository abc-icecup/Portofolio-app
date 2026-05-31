import User from "./User.js";
import Profile from "./profile.js";
import SocialLink from "./SocialLink.js";
import Certificate from "./certificates.js";

// RELATION

User.hasOne(Profile, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Profile.belongsTo(User, {
  foreignKey: "user_id",
});

Profile.hasMany(SocialLink, {
  foreignKey: "profile_id",
  onDelete: "CASCADE",
});

SocialLink.belongsTo(Profile, {
  foreignKey: "profile_id",
});

User.hasMany(Certificate, {
  foreignKey: "user_id",
});

Certificate.belongsTo(User, {
  foreignKey: "user_id",
});

export {
  User,
  Profile,
  SocialLink,
  Certificate,
};