import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NoteFound from "../pages/NoteFound";
import Result from "../pages/Result";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/search" />} />
      <Route path="*" element={<NoteFound />} />
      {["/search", "/images", "/news", "/videos"].map((path, index) => (
        <Route key={index} path={path} element={<Result />} />
      ))}
    </Routes>
  );
}
