interface MailBoxProps {
  username: string;
  messages: string[];
  unreadMessages: string[];
}

export default function Mailbox({
  username,
  messages,
  unreadMessages,
}: MailBoxProps) {
  return (
    <div>
      <p>Hello {username}</p>
      <p>Your INBOX contains {messages.length} messages</p>
      <p>
        {unreadMessages.length > 0
          ? `Your INBOX contains ${unreadMessages.length} unread messages`
          : "You don't have unread messages"}
      </p>
    </div>
  );
}
