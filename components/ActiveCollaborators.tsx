import { useOthers } from "@liveblocks/react/suspense";
import Image from "next/image";

type Collaborator = {
  id: string | number;
  avatar: string;
  name: string;
  color: string;
};

const ActiveCollaborators = () => {
  const others = useOthers();

  const collaborators: Collaborator[] = others.map(
    (other) => other.info as Collaborator
  );

  return (
    <ul className="collaborators-list">
      {collaborators.map(({ id, avatar, name, color }) => (
        <li key={id}>
          <Image
            src={avatar}
            alt={name}
            width={100}
            height={100}
            className="inline-block size-8 rounded-full ring-2 ring-dark-100"
            style={{ border: `3px solid ${color}` }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ActiveCollaborators;
