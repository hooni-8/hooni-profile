import React from 'react';
import { motion } from 'framer-motion';
import { Description } from '@mui/icons-material';
import { Typography, Button, Container, Grid, Card, CardContent, Chip, TextField, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

import * as profileData from "@data/ProfileData"

export default function Home() {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Container maxWidth="lg">
                {/*Hero*/}
                <Grid container spacing={4} alignItems="center" sx={{ py: 6 }}>
                    <Grid item xs={12} md={6}>
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <Typography variant="h3" fontWeight="bold">안녕하세요, {profileData.PROFILE.name}입니다.</Typography>
                            <Typography variant="body1" sx={{ mt: 2 }}>{profileData.PROFILE.bio}</Typography>
                            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                                {/*<Button variant="contained" startIcon={<Description />} href={profileData.PROFILE.resumeUrl}>이력서 다운로드</Button>*/}
                                <Button variant="outlined" href="#projects">프로젝트 보기</Button>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>

                {/* Skills */}
                <Box id="skills" sx={{ mt: 6 }}>
                    <Typography variant="h4" fontWeight={600} mb={3}>Skills</Typography>
                    {profileData.SKILLS.map(cat => (
                        <Box key={cat.category} mb={2}>
                            <Typography variant="h6" mb={1}>{cat.category}</Typography>
                            {cat.items.map(skill => <Chip key={skill} label={skill} color="primary" sx={{ mr: 1, mb: 1 }} />)}
                        </Box>
                    ))}
                </Box>

                {/* Experience */}
                <Box id="experience" sx={{ mt: 8 }}>
                    <Typography variant="h4" fontWeight={600} mb={3}>Experience</Typography>
                    <Card sx={{ borderRadius: 2, p: 2 }}>
                        <Timeline position="alternate">
                            {profileData.EXPERIENCES.map((exp, idx) => (
                                <TimelineItem key={idx}>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary" />
                                        {idx < profileData.EXPERIENCES.length - 1 && <TimelineConnector />}
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography variant="h6">{exp.company} · {exp.role}</Typography>
                                        <Typography color="textSecondary">{exp.year}</Typography>
                                        <Typography>{exp.desc}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </Card>
                </Box>

                {/* Projects */}
                <Box id="projects" sx={{ mt: 8 }}>
                    <Typography variant="h4" fontWeight={600} mb={3}>Projects</Typography>
                    <Grid container spacing={3}>
                        {profileData.PROJECTS.map(p => (
                            <Grid item xs={12} md={6} key={p.title}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>{p.title}</Typography>
                                        <Typography>{p.desc}</Typography>
                                        <Box sx={{ mt: 1 }}>{p.tags.map(tag => <Chip key={tag} label={tag} sx={{ mr: 1, mb: 1 }} />)}</Box>
                                        <Button href={p.link} sx={{ mt: 2 }}>자세히</Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Contact */}
                <Box id="contact" sx={{ mt: 8 }}>
                    <Typography variant="h4" fontWeight={600} mb={3}>Contact</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>메시지 보내기</Typography>
                                    <Box component="form" onSubmit={e => e.preventDefault()} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        <TextField label="이름" name="name" />
                                        <TextField label="이메일" name="email" />
                                        <TextField label="메시지" name="message" multiline rows={4} />
                                        <Button variant="contained" type="submit">전송</Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>연락처</Typography>
                                    <Typography>{profileData.PROFILE.location}</Typography>
                                    <Typography>이메일: <a href={profileData.PROFILE.socials.mail}>{profileData.PROFILE.socials.mail.replace('mailto:', '')}</a></Typography>
                                    <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                                        <Button href={profileData.PROFILE.socials.github}>GitHub</Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Box component="footer" sx={{ textAlign: 'center', color: 'text.secondary', mt: 8, mb: 4 }}>
                © {new Date().getFullYear()} {profileData.PROFILE.name} · Built with MUI
            </Box>
        </Box>
    );
}