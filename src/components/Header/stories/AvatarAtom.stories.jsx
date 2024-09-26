import AvatarAtom from "../AvatarAtom";
import { useState } from "react";

export default {
  title: "Component/Atoms/AvatarAtom",
  component: AvatarAtom,
};

export const Default = () => {
  const [avatar, setAvatar] = useState(""); // Sätt en initial avatar
  return <AvatarAtom avatar={avatar} onChangeAvatar={setAvatar} />;
};
