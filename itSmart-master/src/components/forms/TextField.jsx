import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const TextField = forwardRef(
  (
    {
      field, // <-- من Formik
      form,  // <-- من Formik
      label = "",
      id = "",
      type = "text",
      placeholder = "",
      className = "",
      description = "",
      required = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const name = field.name;
    const error = form.errors[name];
    const touched = form.touched[name];

    const inputId =
      id ||
      name ||
      (label ? label.toLowerCase().replace(/\s+/g, "-") : "input-field");

    return (
      <div className="grid w-full max-w-sm items-center gap-1.5 text-gray-700">
        {label && (
          <Label htmlFor={inputId} className={cn(error && touched && "text-gray-700")}>
            {label}
            {required && <span className="text-gray-700 text-xl ml-1">*</span>}
          </Label>
        )}
        <Input
          {...field}
          ref={ref}
          type={type}
          id={inputId}
          placeholder={placeholder || label}
          className={cn(error && touched && "border-destructive", className)}
          aria-invalid={!!(error && touched)}
          aria-describedby={
            error && touched
              ? `${inputId}-error`
              : description
              ? `${inputId}-description`
              : undefined
          }
          disabled={disabled}
          required={required}
          {...props}
        />
        {description && !error && (
          <p id={`${inputId}-description`} className="text-sm text-muted-foreground">
            {description}
          </p>
        )}
        {error && touched && (
          <p
            id={`${inputId}-error`}
            className="text-start pr-3 font-[500] text-[15px] text-red-500"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);
