import React from "react";
import { SxProps, TextFieldProps, TextField } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { Controller, useFormContext } from "react-hook-form";

dayjs.extend(utc);
dayjs.extend(timezone);

interface ITimePicker {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}

const PHTimePicker = ({
  name,
  label,
  size = "small",
  required,
  fullWidth = true,
  sx,
}: ITimePicker) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={dayjs().tz(dayjs.tz.guess())}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              {...field}
              label={label}
              value={
                value
                  ? dayjs(value).tz(dayjs.tz.guess())
                  : dayjs().tz(dayjs.tz.guess())
              }
              onChange={(time) =>
                onChange(
                  time ? dayjs(time).tz(dayjs.tz.guess()).format() : null
                )
              }
              slotProps={{
                textField: {
                  required: required,
                  fullWidth: fullWidth,
                  size: size,
                  sx: sx,
                  variant: "outlined",
                  error: isError,
                  helperText: isError
                    ? (formState.errors[name]?.message as string)
                    : "",
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default PHTimePicker;
