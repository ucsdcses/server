import sys
from pexpect import pxssh
LOGIN_DATA_FILE="./.env"

class SshInterface:
  def __init__(self):
    with open(LOGIN_DATA_FILE) as metaFile:
      self.user = metaFile.readline()[:-1]
      self.password = metaFile.readline()[:-1]
      self.shell = pxssh.pxssh()

  def login(self, hostname):
    print("Logging into %s" % hostname)
    self.shell.login(hostname,self.user, self.password)

  def printFiles(self):
    self.shell.sendline("ls")
    self.shell.prompt()
    print self.shell.before

  def getWho(self):
    self.shell.sendline("who")
    self.shell.prompt()
    print self.shell.before

  def executeArbitrary(self, toExecute):
    print "Executing %s" % toExecute
    self.shell.sendline(toExecute)
    self.shell.prompt(timeout=100)
    print self.shell.before

if __name__ == "__main__":
  hostname = sys.argv[1]
  sI = SshInterface()
  sI.login(sys.argv[1])
  # computerCounter.printFiles()
  sI.executeArbitrary(
    "python find_people.py its-cseb230-12.ucsd.edu"
    )
  sI.logout()
