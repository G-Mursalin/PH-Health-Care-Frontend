"use client";

import useUserInfo from "@/hooks/useUserInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
// import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { email } = useUserInfo();
  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
  };
  // const AuthButton = dynamic(
  //   () => import("@/components/UI/AuthButton/AuthButton"),
  //   { ssr: false }
  // );

  return (
    <Box>
      <Container
        sx={{
          bgcolor: "primary.main",
        }}
      >
        <Stack
          py={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4" component={Link} href="/" fontWeight={600}>
            P
            <Box component="span" color="#ffffff">
              H
            </Box>
            Health Care
          </Typography>

          <Stack direction="row" justifyContent="space-between" gap={4}>
            <Typography color="#ffffff" component={Link} href="/consultation">
              Consultation
            </Typography>
            <Typography color="#ffffff">Health Plans</Typography>
            <Typography color="#ffffff">Medicine</Typography>
            <Typography component={Link} href="/doctors" color="#ffffff">
              Doctors
            </Typography>
            <Typography color="#ffffff">Diagnostics</Typography>
            <Typography color="#ffffff">NGOs</Typography>
            {email && (
              <Typography color="#ffffff" component={Link} href="/dashboard">
                Dashboard
              </Typography>
            )}
          </Stack>

          {/* <AuthButton /> */}
          {email ? (
            <Button color="error" sx={{ boxShadow: 0 }} onClick={handleLogOut}>
              Logout
            </Button>
          ) : (
            <Button component={Link} sx={{ boxShadow: 0 }} href="/login">
              Login
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
