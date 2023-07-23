"use client";

import { useState } from "react";

interface ExpandableTextProps {
  text: string;
  maxLength: number;
  twClass?: string;
}

export default function ExpandableText({
  text,
  maxLength,
  twClass,
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxLength || isExpanded) {
    return (
      <p className={twClass}>
        {text} {" "}
        {text.length > maxLength && (
          <button className="text-secondary" onClick={() => setIsExpanded(false)}>Read Less</button>
        )}
      </p>
    );
  }

  return (
    <p className={twClass}>
      {text.substring(0, maxLength)}...{" "}
      <button className="text-secondary" onClick={() => setIsExpanded(true)}>Read More</button>
    </p>
  );
}