import React from "react";
export const formatDay = (time: Date): string => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(time);
  };

export const formatTime = (time: Date): string => {
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  return new Intl.DateTimeFormat('en-US', options).format(time);
};