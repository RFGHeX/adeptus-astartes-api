/* eslint-disable max-len */
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chai = require('chai')
const models = require('../../models')
const {
  after, afterEach, beforeEach, describe, it,
} = require('mocha')
const {
  championList,
  singleChampion,
  postedChampion,
  region,
  regionList,
  role,
  roleList
} = require('../mocks/champions')

const {
  getAllChampions,
  getChampionsByIdWithRegionAndRoles,
  postChampion,
  deleteChampion
} = require('../../controllers/champions')

const { getAllRegions, getRegionByIdWithChampionsAndRoles } = require('../../controllers/regions')

const { getAllRoles, getRoleByIdWithChampionsAndRegions } = require('../../controllers/roles')

chai.use(sinonChai)

describe('Controllers - API', () => {
  let response
  let sandbox
  let stubbedChampionsFindOrCreate
  let stubbedChampionsDestroy
  let stubbedChampionsFindAll
  let stubbedChampionsFindOne
  let stubbedStatusSend
  let stubbedRegionsFindOne
  let stubbedRolesFindOne
  let stubbedChampionRolesFindOrCreate
  let stubbedChampionRolesDestroy
  let stubbedRegionsFindAll
  let stubbedRolesFindAll

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    stubbedStatusSend = sandbox.stub()

    response = {
      send: sandbox.stub(),
      status: sandbox.stub().returns({ send: stubbedStatusSend }),
      sendStatus: sandbox.stub(),
    }

    stubbedChampionsFindOrCreate = sandbox.stub(models.champions, 'findOrCreate')
    stubbedChampionsDestroy = sandbox.stub(models.champions, 'destroy')
    stubbedChampionsFindAll = sandbox.stub(models.champions, 'findAll')
    stubbedChampionsFindOne = sandbox.stub(models.champions, 'findOne')

    stubbedRegionsFindOne = sandbox.stub(models.regions, 'findOne')
    stubbedRegionsFindAll = sandbox.stub(models.regions, 'findAll')

    stubbedRolesFindOne = sandbox.stub(models.roles, 'findOne')
    stubbedRolesFindAll = sandbox.stub(models.roles, 'findAll')

    stubbedChampionRolesFindOrCreate = sandbox.stub(models.championRoles, 'findOrCreate')
    stubbedChampionRolesDestroy = sandbox.stub(models.championRoles, 'destroy')

    after(() => {
      sandbox.reset()
    })

    afterEach(() => {
      sandbox.restore()
    })
  })
  describe('Animals', () => {
    describe('getAllChampions', () => {
      it('returns a list of champions', async () => {
        stubbedChampionsFindAll.returns(championList)

        await getAllChampions({}, response)

        chai.expect(stubbedChampionsFindAll).to.have.been.calledWith({
          include: [{
            model: models.regions,
          },
          {
            model: models.roles,
          }]
        })
        chai.expect(response.send).to.have.been.calledWith(championList)
      })

      it('returns a 500 error when the database calls fails', async () => {
        stubbedChampionsFindAll.throws('ERROR!')

        await getAllChampions({}, response)

        chai.expect(stubbedChampionsFindAll).to.have.been.calledWith({
          include: [{
            model: models.regions,
          },
          {
            model: models.roles,
          }]
        })
        chai.expect(response.status).to.have.been.calledWith(500)
        chai.expect(stubbedStatusSend).to.have.been.calledWith('Could not find champions, please try again.')
      })
    })

    describe('getChampionsByIdWithRegionAndRoles', () => {
      it('returns the animal associated with the id passed in', async () => {
        stubbedChampionsFindOne.returns(singleChampion)

        const request = { params: { id: '21' } }

        await getChampionsByIdWithRegionAndRoles(request, response)

        chai.expect(stubbedChampionsFindOne).to.have.been.calledWith({
          include: [{
            model: models.regions,
          },
          {
            model: models.roles,
          }],
          where: {
            [models.Op.or]: [
              { id: '21' },
              { name: { [models.Op.like]: '%21%' } }
            ]
          }
        })
        chai.expect(response.send).to.have.been.calledWith(singleChampion)
      })

      it('returns a 404 when no animal can be found for the id passed in', async () => {
        stubbedChampionsFindOne.returns(null)

        const request = { params: { id: '21' } }

        await getChampionsByIdWithRegionAndRoles(request, response)

        chai.expect(stubbedChampionsFindOne).to.have.been.calledWith({
          include: [{
            model: models.regions,
          },
          {
            model: models.roles,
          }],
          where: {
            [models.Op.or]: [
              { id: '21' },
              { name: { [models.Op.like]: '%21%' } }
            ]
          }
        })
        chai.expect(response.sendStatus).to.have.been.calledWith(404)
      })

      it('returns a 500 error when the database calls fails', async () => {
        stubbedChampionsFindOne.throws('ERROR!')

        const request = { params: { id: '21' } }

        await getChampionsByIdWithRegionAndRoles(request, response)

        chai.expect(stubbedChampionsFindOne).to.have.been.calledWith({
          include: [{
            model: models.regions,
          },
          {
            model: models.roles,
          }],
          where: {
            [models.Op.or]: [
              { id: '21' },
              { name: { [models.Op.like]: '%21%' } }
            ]
          }
        })
        chai.expect(response.status).to.have.been.calledWith(500)
        chai.expect(stubbedStatusSend).to.have.been.calledWith('Could not retrieve the champion, please try again.')
      })
    })
    describe('postChampion', () => {
      it('returns a 201 with the new animal when created', async () => {
        stubbedChampionsFindOne.returns({ id: '21' })
        stubbedRegionsFindOne.returns(region)
        stubbedRolesFindOne.returns(role)
        stubbedChampionsFindOrCreate.returns(postedChampion)
        stubbedChampionRolesFindOrCreate.returns(postedChampion)

        const request = { body: { name: 'Darius', region: 'Noxus', role: 'Fighter' } }

        await postChampion(request, response)

        chai.expect(stubbedChampionsFindOrCreate).to.have.been.calledWith({
          where: { name: 'Darius' },
          defaults: { regionId: 6 }
        })
        chai.expect(response.status).to.have.been.calledWith(201)
        chai.expect(stubbedStatusSend).to.have.been.calledWith(postedChampion)
      })

      it('returns a 400 when missing data', async () => {
        const request = { body: { name: '' } }

        await postChampion(request, response)

        chai.expect(stubbedChampionsFindOrCreate).to.have.callCount(0)
        chai.expect(response.status).to.have.been.calledWith(400)
        chai.expect(stubbedStatusSend).to.have.been
          .calledWith('Please fill out all required fields')
      })

      it('returns a 500 error when the database calls fails', async () => {
        stubbedChampionsFindOrCreate.throws('ERROR!')

        await postChampion({}, response)

        chai.expect(response.status).to.have.been.calledWith(500)
        chai.expect(stubbedStatusSend).to.have.been.calledWith('Could not save new champion, please try again.')
      })
    })

    describe('deleteChampion', () => {
      it('responds with a success message when the animal is deleted', async () => {
        stubbedChampionsFindOne.returns(postedChampion)
        stubbedChampionsDestroy.returns({})

        const request = { params: { name: 'Darius' } }

        await deleteChampion(request, response)

        chai.expect(stubbedChampionsDestroy).to.have.been.calledWith({ where: { name: 'Darius' } })
        chai.expect(stubbedChampionRolesDestroy).to.have.been.calledWith({ where: { championId: '21' } })
        chai.expect(response.send).to.have.been.calledWith('Successfully deleted the champion')
      })

      it('responds with a 404 when no animal can be found with the id passed in', async () => {
        stubbedChampionsFindOne.returns(null)

        const request = { params: { name: 'yugo' } }

        await deleteChampion(request, response)

        chai.expect(stubbedChampionsFindOne).to.have.been.calledWith({ where: { name: 'yugo' } })
        chai.expect(stubbedChampionsDestroy).to.have.callCount(0)
        chai.expect(response.status).to.have.been.calledWith(404)
      })

      it('returns a 500 error when the database calls fails', async () => {
        stubbedChampionsFindOne.returns(postedChampion)
        stubbedChampionsDestroy.throws('ERROR!')

        const request = { params: { name: 'Darius' } }

        await deleteChampion(request, response)

        chai.expect(stubbedChampionsDestroy).to.have.been.calledWith({ where: { name: 'Darius' } })
        chai.expect(response.status).to.have.been.calledWith(500)
        chai.expect(stubbedStatusSend).to.have.been.calledWith('Unknown error while deleting champion, please try again.')
      })
    })
  })
  describe('regions', () => {
    describe('getAllRegions', () => {
      it('returns a list of champions', async () => {
        stubbedRegionsFindAll.returns(regionList)

        await getAllRegions({}, response)

        chai.expect(stubbedRegionsFindAll).to.have.been.calledWith()
        chai.expect(response.send).to.have.been.calledWith(regionList)
      })

      it('returns a 500 error when the database calls fails', async () => {
        stubbedRegionsFindAll.throws('ERROR!')

        await getAllRegions({}, response)

        chai.expect(stubbedRegionsFindAll).to.have.been.calledWith()
        chai.expect(response.status).to.have.been.calledWith(500)
        chai.expect(stubbedStatusSend).to.have.been.calledWith('Could not retrieve regions, please try again.')
      })
    })

    describe('getRegionByIdWithChampionsAndRoles', () => {
      it('returns the animal associated with the id passed in', async () => {
        stubbedRegionsFindOne.returns(region)

        const request = { params: { id: '21' } }

        await getRegionByIdWithChampionsAndRoles(request, response)

        chai.expect(stubbedRegionsFindOne).to.have.been.calledWith({
          include: [{
            include: [{ model: models.roles }],
            model: models.champions
          }],
          where: {
            [models.Op.or]: [
              { id: '21' },
              { name: { [models.Op.like]: '%21%' } }
            ]
          }
        })
        chai.expect(response.send).to.have.been.calledWith(region)
      })

      it('returns a 404 when no animal can be found for the id passed in', async () => {
        stubbedRegionsFindOne.returns(null)

        const request = { params: { id: '21' } }

        await getRegionByIdWithChampionsAndRoles(request, response)

        chai.expect(stubbedRegionsFindOne).to.have.been.calledWith({
          include: [{
            include: [{ model: models.roles }],
            model: models.champions
          }],
          where: {
            [models.Op.or]: [
              { id: '21' },
              { name: { [models.Op.like]: '%21%' } }
            ]
          }
        })
        chai.expect(response.sendStatus).to.have.been.calledWith(404)
      })

      it('returns a 500 error when the database calls fails', async () => {
        stubbedRegionsFindOne.throws('ERROR!')

        const request = { params: { id: '21' } }

        await getRegionByIdWithChampionsAndRoles(request, response)

        chai.expect(stubbedRegionsFindOne).to.have.been.calledWith({
          include: [{
            include: [{ model: models.roles }],
            model: models.champions
          }],
          where: {
            [models.Op.or]: [
              { id: '21' },
              { name: { [models.Op.like]: '%21%' } }
            ]
          }
        })
        chai.expect(response.status).to.have.been.calledWith(500)
        chai.expect(stubbedStatusSend).to.have.been.calledWith('Could not retrieve the region, please try again.')
      })
    })
  })

  describe('roles', () => {
    describe('getAllRoles', () => {
      it('returns a list of champions', async () => {
        stubbedRolesFindAll.returns(roleList)

        await getAllRoles({}, response)

        chai.expect(stubbedRolesFindAll).to.have.been.calledWith()
        chai.expect(response.send).to.have.been.calledWith(roleList)
      })

      it('returns a 500 error when the database calls fails', async () => {
        stubbedRolesFindAll.throws('ERROR!')

        await getAllRoles({}, response)

        chai.expect(stubbedRolesFindAll).to.have.been.calledWith()
        chai.expect(response.status).to.have.been.calledWith(500)
        chai.expect(stubbedStatusSend).to.have.been.calledWith('Could not retrieve the roles, please try again.')
      })
    })

    describe('getRoleByIdWithChampionsAndRegions', () => {
      it('returns the animal associated with the id passed in', async () => {
        stubbedRolesFindOne.returns(role)

        const request = { params: { id: '21' } }

        await getRoleByIdWithChampionsAndRegions(request, response)

        chai.expect(stubbedRolesFindOne).to.have.been.calledWith({
          include: [{
            include: [{
              model: models.regions
            }],
            model: models.champions,
          }],
          where: {
            [models.Op.or]: [
              { id: '21' },
              { role: { [models.Op.like]: '%21%' } }
            ]
          }
        })
        chai.expect(response.send).to.have.been.calledWith(role)
      })

      it('returns a 404 when no animal can be found for the id passed in', async () => {
        stubbedRolesFindOne.returns(null)

        const request = { params: { id: '21' } }

        await getRoleByIdWithChampionsAndRegions(request, response)

        chai.expect(stubbedRolesFindOne).to.have.been.calledWith({
          include: [{
            include: [{
              model: models.regions
            }],
            model: models.champions,
          }],
          where: {
            [models.Op.or]: [
              { id: '21' },
              { role: { [models.Op.like]: '%21%' } }
            ]
          }
        })
        chai.expect(response.sendStatus).to.have.been.calledWith(404)
      })

      it('returns a 500 error when the database calls fails', async () => {
        stubbedRolesFindOne.throws('ERROR!')

        const request = { params: { id: '21' } }

        await getRoleByIdWithChampionsAndRegions(request, response)

        chai.expect(stubbedRolesFindOne).to.have.been.calledWith({
          include: [{
            include: [{
              model: models.regions
            }],
            model: models.champions,
          }],
          where: {
            [models.Op.or]: [
              { id: '21' },
              { role: { [models.Op.like]: '%21%' } }
            ]
          }
        })
        chai.expect(response.status).to.have.been.calledWith(500)
        chai.expect(stubbedStatusSend).to.have.been.calledWith('Could not retrieve the role, please try again')
      })
    })
  })
})
