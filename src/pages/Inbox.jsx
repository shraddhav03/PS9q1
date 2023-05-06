import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { EmailContext } from "..";

export const Inbox = () => {
  const { data } = useContext(EmailContext);
  const [read, setRead] = useState([]);

  const unreadEmails = data.filter(({ read }) => !read);
  const readEmails = data.filter(({ read }) => read);

  const markAsRead = (itemId) => {
    console.log("clicked");
    console.log(itemId);
    const fltr = data.filter(({ id }) => id === itemId);

    const elem = fltr.find(({ read }) => !read);
    if (elem) elem.read = true;

    setRead(elem);
  };
  console.log(read);
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h1>My Mail Box</h1>
        <p>Unread Emails :{unreadEmails.length}</p>
        <p>Read Emails :{readEmails.length}</p>
        <ul>
          {data.map(({ id, sender, subject, message, read }) => {
            return (
              <li key={id}>
                <Link to={`/emailpage/${id}`}>{subject}</Link>
                {!read && (
                  <button onClick={() => markAsRead(id)}>Mark as Read</button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
