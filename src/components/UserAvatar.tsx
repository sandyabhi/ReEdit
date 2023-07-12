import { FC } from "react";
import { User } from "next-auth";
import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import Image from "next/image";
import { Icons } from "./Icons";

interface UserAvatarProps {
  user: Pick<User, "name" | "image" | "email">;
}

const UserAvatar: FC<UserAvatarProps> = ({ user }) => {
  return (
    <Avatar>
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <Image
            fill
            src={user.image}
            alt="profile picture"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
          <Icons.User />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
