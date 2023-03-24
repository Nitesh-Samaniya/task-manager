import React from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'
import { CgProfile } from 'react-icons/cg';
import Signup from '../../pages/Signup';
import Login from '../../pages/Login';
import Logout from '../../pages/Logout';

function Account() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='white' variant='outline' onClick={onOpen}>
        <CgProfile size={28}/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent height="70%  !important">
          <DrawerCloseButton />
          <DrawerHeader fontFamily={'cursive'} fontSize={'2xl'}>Task Manager</DrawerHeader>

          <DrawerBody>
              <Tabs size='md' variant='enclosed'>

                <TabList>
                  <Tab fontWeight="bold">Login</Tab>
                  <Tab fontWeight="bold">Signup</Tab>
                  <Tab fontWeight="bold">Logout</Tab>
                </TabList>

                <TabPanels>

                  <TabPanel>
                    <Login />
                  </TabPanel>

                  <TabPanel>
                    <Signup />
                  </TabPanel>

                  <TabPanel>
                    <Logout />
                  </TabPanel>

                </TabPanels>

              </Tabs>
            </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Account;